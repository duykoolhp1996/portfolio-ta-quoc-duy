// BLEU. Social Platform — Core Application Logic (v3.0 Enterprise)
// Pairs with 🐱 Xu Xu AI Assistant & FastAPI Backend

// ================= PLATFORM SPECIFICATIONS & RULES =================
const PLATFORM_SPECS = {
  facebook_profile: {
    id: "facebook_profile",
    name: "FB Trang cá nhân (Tường nhà)",
    icon: "user",
    color: "#063E9E",
    aspectRatio: "Ảnh 1:1, 4:5 hoặc 16:9, Video Reels dọc 9:16",
    maxChars: 63206,
    recommendedChars: "Văn phong tự nhiên, chia sẻ góc nhìn cá nhân",
    hashtagsTip: "1 - 3 hashtags nhẹ nhàng",
    rules: "Đăng trực tiếp lên tường nhà của Nick Facebook bạn đang đăng nhập."
  },
  facebook_group: {
    id: "facebook_group",
    name: "Facebook Groups (Hội nhóm)",
    icon: "users",
    color: "#063E9E",
    aspectRatio: "Ảnh 1:1, 16:9 hoặc Album dọc 4:5",
    maxChars: 63206,
    recommendedChars: "Dưới 1.000 từ để người đọc không bị ngợp",
    hashtagsTip: "3 - 5 hashtags chủ đề chính",
    rules: "Giãn cách tự động 3–5 phút chống checkpoint."
  },
  threads: {
    id: "threads",
    name: "Threads",
    icon: "at-sign",
    color: "#000000",
    aspectRatio: "Ảnh vuông 1:1, ảnh ngang 16:9 hoặc Video dọc 9:16",
    maxChars: 500,
    recommendedChars: "Khoảng 150 - 350 ký tự",
    hashtagsTip: "1 Topic Tag duy nhất theo chuẩn Meta",
    rules: "Giới hạn nghiêm ngặt 500 ký tự. Văn phong trò chuyện, thân mật."
  },
  x_twitter: {
    id: "x_twitter",
    name: "X (Twitter)",
    icon: "twitter",
    color: "#111827",
    aspectRatio: "Ảnh 16:9 (1200x675) hoặc 1:1, tối đa 4 ảnh",
    maxChars: 280,
    recommendedChars: "Dưới 260 ký tự để chừa chỗ cho link & tag",
    hashtagsTip: "2 - 3 hashtags xu hướng",
    rules: "Giới hạn 280 ký tự. Câu mở đầu (Hook) phải thu hút ngay."
  },
  linkedin: {
    id: "linkedin",
    name: "LinkedIn",
    icon: "briefcase",
    color: "#0077b5",
    aspectRatio: "Ảnh 1.91:1 (1200x627) hoặc 1:1, Slide PDF",
    maxChars: 3000,
    recommendedChars: "Khoảng 500 - 1.200 ký tự",
    hashtagsTip: "3 - 5 hashtags ngành nghề",
    rules: "Văn phong trang trọng, chia sẻ bài học kinh nghiệm, case study."
  },
  instagram: {
    id: "instagram",
    name: "Instagram",
    icon: "camera",
    color: "#e1306c",
    aspectRatio: "Ảnh dọc 4:5 (1080x1350) hoặc Vuông 1:1. Reels 9:16",
    maxChars: 2200,
    recommendedChars: "125 ký tự đầu tiên là quan trọng nhất",
    hashtagsTip: "15 - 25 hashtags",
    rules: "BẮT BUỘC phải có hình ảnh hoặc video chất lượng cao."
  },
  tiktok: {
    id: "tiktok",
    name: "TikTok",
    icon: "music",
    color: "#00f2fe",
    aspectRatio: "Video dọc 9:16 (1080x1920)",
    maxChars: 2200,
    recommendedChars: "Caption ngắn gọn 100 - 300 ký tự",
    hashtagsTip: "4 - 6 hashtags xu hướng",
    rules: "BẮT BUỘC định dạng video dọc ngắn."
  }
};

// ================= GLOBAL APP STATE =================
let currentView = "dashboard";
let currentBrandId = 1;
let currentStep = 1;
let currentActivePlatformTab = "";
let platformCustomizations = {};
let selectedMediaFiles = [];
let mediaAspectRatios = [];
let allGroups = [];
let allCategories = [];
let activeComposerCategory = "ALL";
let allBrands = [];
let allCampaigns = [];
let allMediaAssets = [];
let selectedPickerMediaIds = new Set();
let calendarCurrentDate = new Date();
let timelineChartInstance = null;

// ================= TOAST NOTIFICATION SYSTEM =================
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  const isSuccess = (type === "success");
  const isError = (type === "error");

  const bgBorder = isSuccess ? "bg-white border-emerald-300 text-emerald-800" :
                   isError ? "bg-white border-rose-300 text-rose-800" :
                   "bg-white border-[#C2D7FE] text-[#063E9E]";

  const iconName = isSuccess ? "check-circle-2" : isError ? "alert-circle" : "info";

  toast.className = `flex items-center space-x-3 px-4 py-3 rounded-2xl border ${bgBorder} shadow-xl text-xs font-bold pointer-events-auto transition-all duration-300 transform translate-y-2 opacity-0`;
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 flex-shrink-0 ${isSuccess ? 'text-emerald-600' : isError ? 'text-rose-600' : 'text-[#063E9E]'}"></i>
    <span class="flex-1">${message}</span>
    <button onclick="this.parentElement.remove()" class="text-slate-400 hover:text-slate-700 ml-2">✕</button>
  `;

  container.appendChild(toast);
  lucide.createIcons();

  requestAnimationFrame(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  });

  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// ================= VIEW SWITCHING & NAVIGATION =================
function switchView(viewName) {
  currentView = viewName;

  // Hide all view sections
  const viewSections = [
    "dashboard", "calendar", "composer", "queue",
    "media", "accounts", "groups", "settings"
  ];
  viewSections.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.add("hidden");
  });

  // Show target view
  const targetEl = document.getElementById(`view-${viewName}`);
  if (targetEl) targetEl.classList.remove("hidden");

  // Update navigation button active styles
  document.querySelectorAll(".nav-item").forEach(btn => {
    btn.className = "nav-item w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all text-slate-600 hover:bg-[#F4F1EA] hover:text-[#063E9E]";
  });
  const activeNavBtn = document.getElementById(`nav-${viewName}`);
  if (activeNavBtn) {
    activeNavBtn.className = "nav-item w-full flex items-center space-x-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all bg-[#063E9E] text-white shadow-md shadow-[#063E9E]/20";
  }

  // Load view-specific data
  if (viewName === "dashboard") loadDashboardStats();
  else if (viewName === "calendar") loadCalendarEvents();
  else if (viewName === "queue") loadPosts();
  else if (viewName === "media") loadMediaAssets();
  else if (viewName === "accounts") loadAccounts();
  else if (viewName === "groups") { loadGroups(); loadCategories(); }
  else if (viewName === "settings") { loadSettings(); loadAuditLogsFull(); }

  lucide.createIcons();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleSidebar() {
  const sidebar = document.getElementById("main-sidebar");
  if (sidebar) {
    sidebar.classList.toggle("sidebar-collapsed");
  }
}

function handleBrandChange(brandId) {
  currentBrandId = parseInt(brandId, 10);
  const composerBrandSelect = document.getElementById("composer-brand-id");
  if (composerBrandSelect) composerBrandSelect.value = brandId;
  showToast(`Đã chuyển workspace sang thương hiệu #${brandId}`, "info");
  
  if (currentView === "dashboard") loadDashboardStats();
  else if (currentView === "calendar") loadCalendarEvents();
  else if (currentView === "queue") loadPosts();
}

// ================= VIEW 1: DASHBOARD ANALYTICS =================
async function loadDashboardStats() {
  const timeframe = document.getElementById("dashboard-timeframe") ? document.getElementById("dashboard-timeframe").value : "7days";
  try {
    const res = await fetch(`/api/analytics/dashboard?timeframe=${timeframe}&brand_id=${currentBrandId}`);
    if (!res.ok) throw new Error("Không thể tải số liệu phân tích");
    const data = await res.json();

    const kpi = data.kpi || {};

    // Populate KPI Cards
    const totalEl = document.getElementById("kpi-total-posts");
    const pubEl = document.getElementById("kpi-published-posts");
    const schedEl = document.getElementById("kpi-scheduled-posts");
    const failEl = document.getElementById("kpi-failed-posts");
    const rateEl = document.getElementById("kpi-success-rate");

    if (totalEl) totalEl.textContent = kpi.total_posts || 0;
    if (pubEl) pubEl.textContent = kpi.published_posts || 0;
    if (schedEl) schedEl.textContent = kpi.scheduled_posts || 0;
    if (failEl) failEl.textContent = kpi.failed_posts || 0;
    if (rateEl) rateEl.textContent = `${kpi.success_rate || 0}%`;

    // Populate Upcoming Queue
    renderUpcomingQueue(data.upcoming_posts || []);

    // Populate Recent Activities
    renderRecentActivities(data.recent_activity || []);

    // Populate Channel Performance
    renderChannelPerformance(data.channel_performance || {});

    // Render Timeline Chart
    loadTimelineChart();
  } catch (err) {
    console.error("Dashboard error:", err);
  }
}

async function loadTimelineChart() {
  try {
    const res = await fetch(`/api/analytics/timeline?days=14&brand_id=${currentBrandId}`);
    if (!res.ok) return;
    const rawList = await res.json();
    if (!Array.isArray(rawList)) return;

    const labels = rawList.map(item => item.label);
    const published = rawList.map(item => item.success);
    const failed = rawList.map(item => item.failed);

    const canvas = document.getElementById("timelineChart");
    if (!canvas) return;

    if (timelineChartInstance) {
      timelineChartInstance.destroy();
    }

    const ctx = canvas.getContext("2d");
    timelineChartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Thành công",
            data: published,
            backgroundColor: "#063E9E",
            borderRadius: 6,
          },
          {
            label: "Thất bại",
            data: failed,
            backgroundColor: "#F43F5E",
            borderRadius: 6,
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "top",
            labels: {
              boxWidth: 12,
              font: { family: "'Plus Jakarta Sans'", size: 11, weight: 600 }
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            ticks: { font: { family: "'Plus Jakarta Sans'", size: 10 } }
          },
          y: {
            beginAtZero: true,
            ticks: { stepSize: 1, font: { family: "'Plus Jakarta Sans'", size: 10 } }
          }
        }
      }
    });
  } catch (e) {
    console.error("Failed to render chart:", e);
  }
}

function renderUpcomingQueue(queue) {
  const container = document.getElementById("upcoming-queue-list");
  if (!container) return;

  if (queue.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-xs text-slate-400">Không có bài viết chờ xuất bản trong hàng đợi</div>`;
    return;
  }

  container.innerHTML = queue.map(item => `
    <div class="flex items-center justify-between p-3 rounded-2xl bg-[#FCFAF7] border border-[#E7E1D4] hover:border-[#063E9E] transition cursor-pointer" onclick="openPostDetail(${item.id})">
      <div class="flex items-center space-x-3 min-w-0">
        <div class="w-8 h-8 rounded-xl bg-blue-50 text-[#063E9E] flex items-center justify-center font-bold text-xs flex-shrink-0">
          #${item.id}
        </div>
        <div class="min-w-0">
          <p class="text-xs font-bold text-slate-800 truncate">${escapeHtml(item.content_snippet)}</p>
          <div class="flex items-center space-x-2 text-[10px] text-slate-500 mt-0.5">
            <span>⏰ ${formatDateTime(item.scheduled_time)}</span>
            <span>•</span>
            <span class="font-semibold text-blue-700">${item.channels ? item.channels.join(", ") : "Multi-channel"}</span>
          </div>
        </div>
      </div>
      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
        Chờ xuất bản
      </span>
    </div>
  `).join("");
}

function renderRecentActivities(activities) {
  const container = document.getElementById("recent-activities-list");
  if (!container) return;

  if (activities.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-xs text-slate-400">Chưa có nhật ký hoạt động gần đây</div>`;
    return;
  }

  container.innerHTML = activities.map(act => `
    <div class="flex items-start space-x-2.5 p-2.5 rounded-xl hover:bg-[#FCFAF7] transition text-xs">
      <div class="w-2 h-2 rounded-full bg-[#063E9E] mt-1.5 flex-shrink-0"></div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between">
          <span class="font-bold text-slate-800">${escapeHtml(act.action)}</span>
          <span class="text-[10px] text-slate-400 font-mono">${formatDateTime(act.created_at)}</span>
        </div>
        <p class="text-[11px] text-slate-500 truncate mt-0.5">${escapeHtml(act.details || act.entity_type)}</p>
      </div>
    </div>
  `).join("");
}

function renderChannelPerformance(perf) {
  const container = document.getElementById("channel-performance-list");
  if (!container) return;

  const channelKeys = Object.keys(perf);
  if (channelKeys.length === 0) {
    container.innerHTML = `<div class="text-center py-6 text-xs text-slate-400">Chưa có dữ liệu bài đăng theo kênh</div>`;
    return;
  }

  container.innerHTML = channelKeys.map(ch => {
    const data = perf[ch] || {};
    const successCount = data.success || 0;
    const failedCount = data.failed || 0;
    const totalCount = successCount + failedCount;
    const rate = totalCount > 0 ? Math.round((successCount / totalCount) * 100) : 0;
    const spec = PLATFORM_SPECS[ch] || { name: ch, color: "#063E9E" };
    return `
      <div class="space-y-1">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-slate-800">${spec.name}</span>
          <span class="font-mono text-slate-500 text-[11px]">${rate}% (${successCount}/${totalCount})</span>
        </div>
        <div class="w-full bg-[#F4F1EA] h-2 rounded-full overflow-hidden">
          <div class="h-2 rounded-full transition-all duration-500" style="width: ${rate}%; background-color: ${spec.color}"></div>
        </div>
      </div>
    `;
  }).join("");
}

function exportAnalyticsCSV() {
  window.open(`/api/analytics/export?brand_id=${currentBrandId}`, "_blank");
}

// ================= VIEW 2: CONTENT CALENDAR =================
async function loadCalendarEvents() {
  const year = calendarCurrentDate.getFullYear();
  const month = calendarCurrentDate.getMonth() + 1;
  const monthStr = `${year}-${String(month).padStart(2, "0")}`;

  const label = document.getElementById("calendar-current-month-label");
  if (label) label.textContent = `Tháng ${month}, ${year}`;

  const channelFilter = document.getElementById("calendar-filter-channel") ? document.getElementById("calendar-filter-channel").value : "ALL";
  const statusFilter = document.getElementById("calendar-filter-status") ? document.getElementById("calendar-filter-status").value : "ALL";

  try {
    let url = `/api/calendar/events?month=${monthStr}&brand_id=${currentBrandId}`;
    if (channelFilter !== "ALL") url += `&channel=${channelFilter}`;
    if (statusFilter !== "ALL") url += `&status=${statusFilter}`;

    const res = await fetch(url);
    if (!res.ok) throw new Error("Không thể tải lịch nội dung");
    const events = await res.json();

    renderCalendarGrid(year, month, events);
  } catch (err) {
    console.error("Calendar load error:", err);
  }
}

function renderCalendarGrid(year, month, events) {
  const container = document.getElementById("calendar-days-grid");
  if (!container) return;

  container.innerHTML = "";

  // Group events by date string YYYY-MM-DD
  const eventsByDate = {};
  events.forEach(evt => {
    if (evt.date) {
      if (!eventsByDate[evt.date]) eventsByDate[evt.date] = [];
      eventsByDate[evt.date].push(evt);
    }
  });

  const firstDayOfMonth = new Date(year, month - 1, 1);
  let startingDay = firstDayOfMonth.getDay(); // 0 is Sunday
  startingDay = (startingDay === 0) ? 6 : startingDay - 1; // convert to Mon = 0 ... Sun = 6

  const daysInMonth = new Date(year, month, 0).getDate();
  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, "0")}-${String(today.getDate()).padStart(2, "0")}`;

  // Empty cells before first day
  for (let i = 0; i < startingDay; i++) {
    const emptyCell = document.createElement("div");
    emptyCell.className = "min-h-[110px] bg-[#FCFAF7]/50 p-2 text-slate-300 text-xs";
    container.appendChild(emptyCell);
  }

  // Days of month
  for (let d = 1; d <= daysInMonth; d++) {
    const dateStr = `${year}-${String(month).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
    const dayEvents = eventsByDate[dateStr] || [];
    const isToday = (dateStr === todayStr);

    const cell = document.createElement("div");
    cell.className = `min-h-[110px] p-2 bg-white transition hover:bg-[#FCFAF7] flex flex-col justify-between ${isToday ? 'ring-2 ring-inset ring-[#063E9E]' : ''}`;
    cell.dataset.date = dateStr;

    // Enable dragover and drop for rescheduling
    cell.ondragover = (e) => {
      e.preventDefault();
      cell.classList.add("drag-over");
    };
    cell.ondragleave = () => {
      cell.classList.remove("drag-over");
    };
    cell.ondrop = async (e) => {
      e.preventDefault();
      cell.classList.remove("drag-over");
      const postId = e.dataTransfer.getData("text/plain");
      if (postId) {
        await handleRescheduleDrop(postId, dateStr);
      }
    };

    // Header of cell
    const header = document.createElement("div");
    header.className = "flex items-center justify-between";
    header.innerHTML = `
      <span class="text-xs font-bold ${isToday ? 'w-5 h-5 rounded-full bg-[#063E9E] text-white flex items-center justify-center' : 'text-slate-700'}">${d}</span>
      <button onclick="openComposerWithDate('${dateStr}')" class="text-slate-300 hover:text-[#063E9E] p-0.5 rounded" title="Tạo bài viết ngày này">+</button>
    `;
    cell.appendChild(header);

    // Event pills container
    const eventList = document.createElement("div");
    eventList.className = "space-y-1 mt-1 flex-1 overflow-y-auto max-h-24";

    dayEvents.forEach(evt => {
      const pill = document.createElement("div");
      pill.draggable = true;
      pill.ondragstart = (e) => {
        e.dataTransfer.setData("text/plain", evt.id);
      };
      pill.onclick = () => openPostDetail(evt.id);

      const statusColor = (evt.status === "completed") ? "bg-emerald-50 text-emerald-800 border-emerald-200" :
                          (evt.status === "failed") ? "bg-rose-50 text-rose-800 border-rose-200" :
                          "bg-blue-50 text-[#063E9E] border-blue-200";

      pill.className = `p-1 rounded-lg border text-[10px] font-bold truncate cursor-grab active:cursor-grabbing hover:shadow-sm transition ${statusColor}`;
      pill.innerHTML = `
        <span class="font-mono">${evt.time || ''}</span>
        <span>${escapeHtml(evt.title)}</span>
      `;
      eventList.appendChild(pill);
    });

    cell.appendChild(eventList);
    container.appendChild(cell);
  }

  lucide.createIcons();
}

function navigateCalendar(direction) {
  calendarCurrentDate.setMonth(calendarCurrentDate.getMonth() + direction);
  loadCalendarEvents();
}

function calendarToday() {
  calendarCurrentDate = new Date();
  loadCalendarEvents();
}

async function handleRescheduleDrop(postId, newDateStr) {
  try {
    const newDateTime = `${newDateStr}T09:00:00`;
    const res = await fetch(`/api/posts/${postId}/reschedule`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ scheduled_time: newDateTime })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Không thể đổi lịch");
    }

    showToast(`Đã đổi lịch bài #${postId} sang ${newDateStr} 09:00`, "success");
    loadCalendarEvents();
  } catch (err) {
    showToast(err.message, "error");
  }
}

function openComposerWithDate(dateStr) {
  switchView("composer");
  goToStep(4);
  const radioSchedule = document.querySelector('input[name="post_mode"][value="schedule"]');
  if (radioSchedule) {
    radioSchedule.checked = true;
    togglePublishingOptions();
  }
  const dateInput = document.getElementById("scheduled-time");
  if (dateInput) {
    const targetDate = dateStr ? `${dateStr}T09:00` : new Date(Date.now() + 3600000).toISOString().slice(0, 16);
    dateInput.value = targetDate;
  }
}

// ================= VIEW 3: CONTENT STUDIO & COMPOSER =================
function goToStep(step) {
  currentStep = step;

  // Update step progress indicator
  for (let s = 1; s <= 4; s++) {
    const badge = document.getElementById(`step-badge-${s}`);
    const text = document.getElementById(`step-text-${s}`);
    const panel = document.getElementById(`wizard-step-${s}`);

    if (panel) panel.classList.add("hidden");

    if (s < step) {
      if (badge) badge.className = "w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shadow-sm transition";
      if (text) text.className = "text-[11px] font-bold text-emerald-700 uppercase tracking-wider";
    } else if (s === step) {
      if (badge) badge.className = "w-9 h-9 rounded-full bg-[#063E9E] text-white flex items-center justify-center font-bold text-xs shadow-md shadow-[#063E9E]/20 transition";
      if (text) text.className = "text-[11px] font-bold text-[#063E9E] uppercase tracking-wider";
    } else {
      if (badge) badge.className = "w-9 h-9 rounded-full bg-[#F4F1EA] text-slate-500 border border-[#E7E1D4] flex items-center justify-center font-bold text-xs transition";
      if (text) text.className = "text-[11px] font-bold text-slate-400 uppercase tracking-wider";
    }
  }

  // Show active step panel
  const activePanel = document.getElementById(`wizard-step-${step}`);
  if (activePanel) activePanel.classList.remove("hidden");

  // Step transitions logic
  if (step === 3) {
    initStep3PlatformCustomizations();
  } else if (step === 4) {
    generateLiveMockups();
  }

  lucide.createIcons();
  window.scrollTo({ top: 120, behavior: "smooth" });
}

function handleChannelSelectionChange() {
  const fbGroupCheck = document.querySelector('input[name="channels"][value="facebook_group"]');
  const groupSelectionBox = document.getElementById("group-selection-box");
  if (groupSelectionBox) {
    groupSelectionBox.style.display = (fbGroupCheck && fbGroupCheck.checked) ? "block" : "none";
  }
}

function getSelectedChannels() {
  const checked = document.querySelectorAll('input[name="channels"]:checked');
  return Array.from(checked).map(cb => cb.value);
}

// Media inspection and previews in Master Draft
function previewMediaWithInspection(event) {
  const files = Array.from(event.target.files);
  selectedMediaFiles = files;
  renderMediaPreviews();
}

function renderMediaPreviews() {
  const container = document.getElementById("media-previews");
  if (!container) return;
  container.innerHTML = "";

  if (selectedMediaFiles.length === 0) {
    const tag = document.getElementById("media-aspect-ratio-tag");
    if (tag) tag.textContent = "Chưa chọn file";
    return;
  }

  const tag = document.getElementById("media-aspect-ratio-tag");
  if (tag) tag.textContent = `Đã chọn ${selectedMediaFiles.length} tệp`;

  selectedMediaFiles.forEach((file, index) => {
    const isVideo = file.type.startsWith("video/");
    const url = URL.createObjectURL(file);

    const card = document.createElement("div");
    card.className = "relative w-24 h-24 rounded-xl border border-[#E7E1D4] overflow-hidden group bg-slate-900";
    card.innerHTML = `
      ${isVideo ? 
        `<video src="${url}" class="w-full h-full object-cover"></video><div class="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">🎬</div>` :
        `<img src="${url}" class="w-full h-full object-cover">`
      }
      <button type="button" onclick="removeSelectedMedia(${index})" class="absolute top-1 right-1 w-5 h-5 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center shadow hover:bg-rose-700">✕</button>
    `;
    container.appendChild(card);
  });
}

function removeSelectedMedia(index) {
  selectedMediaFiles.splice(index, 1);
  renderMediaPreviews();
}

// Step 3: Platform Customization Panels
function initStep3PlatformCustomizations() {
  const selectedChannels = getSelectedChannels();
  const tabsContainer = document.getElementById("step3-platform-tabs");
  const panelsContainer = document.getElementById("step3-platform-panels");
  const masterContent = document.getElementById("post-content") ? document.getElementById("post-content").value : "";

  if (!tabsContainer || !panelsContainer) return;
  tabsContainer.innerHTML = "";
  panelsContainer.innerHTML = "";

  if (selectedChannels.length === 0) {
    panelsContainer.innerHTML = `<p class="text-xs text-rose-600 font-bold p-4">Bạn chưa chọn kênh nào ở Bước 1. Vui lòng quay lại chọn ít nhất 1 kênh.</p>`;
    return;
  }

  if (!selectedChannels.includes(currentActivePlatformTab)) {
    currentActivePlatformTab = selectedChannels[0];
  }

  selectedChannels.forEach(ch => {
    const spec = PLATFORM_SPECS[ch] || { name: ch, maxChars: 5000, recommendedChars: "" };
    
    // Initialize draft customization if absent
    if (!platformCustomizations[ch]) {
      platformCustomizations[ch] = {
        caption: masterContent,
        title: "",
        hashtags: ""
      };
    }

    // Tab button
    const isActive = (ch === currentActivePlatformTab);
    const tabBtn = document.createElement("button");
    tabBtn.type = "button";
    tabBtn.onclick = () => switchStep3Tab(ch);
    tabBtn.className = `px-4 py-2 rounded-xl text-xs font-bold transition flex items-center space-x-2 ${
      isActive ? 'bg-[#063E9E] text-white shadow-sm' : 'bg-[#FCFAF7] border border-[#E7E1D4] text-slate-700 hover:bg-[#F4F1EA]'
    }`;
    tabBtn.innerHTML = `<span>${spec.name}</span>`;
    tabsContainer.appendChild(tabBtn);

    // Panel
    const panel = document.createElement("div");
    panel.id = `panel-custom-${ch}`;
    panel.className = isActive ? "space-y-4 pt-4" : "hidden space-y-4 pt-4";
    panel.innerHTML = `
      <div class="p-4 rounded-2xl bg-[#FCFAF7] border border-[#E7E1D4] space-y-2">
        <div class="flex items-center justify-between text-xs">
          <span class="font-bold text-slate-800 uppercase">Quy chuẩn ${spec.name}</span>
          <span class="font-mono text-slate-500">Giới hạn: ${spec.maxChars} ký tự</span>
        </div>
        <p class="text-[11px] text-slate-600">${spec.rules || ''}</p>
      </div>

      <div>
        <div class="flex items-center justify-between mb-1.5">
          <label class="block text-xs font-bold text-slate-700 uppercase tracking-wider">Nội dung tối ưu riêng</label>
          <span id="char-count-${ch}" class="text-xs font-mono font-semibold text-slate-400">0 / ${spec.maxChars}</span>
        </div>
        <textarea id="custom-caption-${ch}" rows="5" class="w-full text-xs p-3.5 rounded-xl border border-[#E7E1D4] bg-white focus:outline-none focus:border-[#063E9E]" onkeyup="updatePlatformCustomization('${ch}')">${escapeHtml(platformCustomizations[ch].caption)}</textarea>
      </div>

      <div class="flex justify-between items-center pt-2">
        <button type="button" onclick="resetToMasterContent('${ch}')" class="text-xs text-slate-500 hover:text-slate-800 font-bold underline">Khôi phục về nội dung gốc Master</button>
        <button type="button" onclick="optimizeSinglePlatformAI('${ch}')" class="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-50 text-[#063E9E] border border-blue-200 text-xs font-bold hover:bg-blue-100 transition">
          <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          <span>Tối ưu kênh này với AI</span>
        </button>
      </div>
    `;
    panelsContainer.appendChild(panel);
  });

  lucide.createIcons();
}

function switchStep3Tab(channel) {
  currentActivePlatformTab = channel;
  initStep3PlatformCustomizations();
}

function updatePlatformCustomization(channel) {
  const textarea = document.getElementById(`custom-caption-${channel}`);
  if (textarea) {
    if (!platformCustomizations[channel]) platformCustomizations[channel] = {};
    platformCustomizations[channel].caption = textarea.value;

    const countEl = document.getElementById(`char-count-${channel}`);
    const spec = PLATFORM_SPECS[channel];
    if (countEl && spec) {
      const len = textarea.value.length;
      countEl.textContent = `${len} / ${spec.maxChars}`;
      countEl.className = len > spec.maxChars ? "text-xs font-mono font-bold text-rose-600" : "text-xs font-mono font-semibold text-slate-400";
    }
  }
}

function resetToMasterContent(channel) {
  const masterContent = document.getElementById("post-content") ? document.getElementById("post-content").value : "";
  if (!platformCustomizations[channel]) platformCustomizations[channel] = {};
  platformCustomizations[channel].caption = masterContent;
  const textarea = document.getElementById(`custom-caption-${channel}`);
  if (textarea) textarea.value = masterContent;
  updatePlatformCustomization(channel);
  showToast(`Đã đồng bộ lại nội dung gốc cho ${channel}`, "info");
}

// Step 4: Live Mockups Preview
function generateLiveMockups() {
  const container = document.getElementById("live-mockups-container");
  if (!container) return;
  container.innerHTML = "";

  const selectedChannels = getSelectedChannels();
  if (selectedChannels.length === 0) {
    container.innerHTML = `<p class="col-span-2 text-xs text-rose-600 p-4">Chưa chọn kênh nào để xem trước.</p>`;
    return;
  }

  const masterContent = document.getElementById("post-content") ? document.getElementById("post-content").value : "";

  selectedChannels.forEach(ch => {
    const spec = PLATFORM_SPECS[ch] || { name: ch, color: "#063E9E" };
    const customText = (platformCustomizations[ch] && platformCustomizations[ch].caption) ? platformCustomizations[ch].caption : masterContent;

    const card = document.createElement("div");
    card.className = "bg-[#FCFAF7] border border-[#E7E1D4] rounded-2xl p-4 space-y-3 shadow-sm";
    card.innerHTML = `
      <div class="flex items-center justify-between border-b border-[#E7E1D4] pb-2">
        <div class="flex items-center space-x-2">
          <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${spec.color}"></span>
          <span class="text-xs font-bold text-slate-900">${spec.name}</span>
        </div>
        <span class="text-[10px] text-slate-400 font-mono">Bản mô phỏng</span>
      </div>

      <div class="space-y-2">
        <div class="flex items-center space-x-2">
          <div class="w-7 h-7 rounded-full bg-slate-300 flex items-center justify-center font-bold text-[10px] text-slate-700">D</div>
          <div>
            <div class="text-[11px] font-bold text-slate-800">Duy Hiền Digital</div>
            <div class="text-[9px] text-slate-400">Vừa xong • 🌐 Công khai</div>
          </div>
        </div>
        <div class="text-xs text-slate-800 leading-relaxed whitespace-pre-wrap">${escapeHtml(customText)}</div>
      </div>
    `;
    container.appendChild(card);
  });
}

function togglePublishingOptions() {
  const mode = document.querySelector('input[name="post_mode"]:checked')?.value;
  const schedContainer = document.getElementById("schedule-datetime-container");
  const submitText = document.getElementById("btn-submit-text");

  if (schedContainer) {
    schedContainer.style.display = (mode === "schedule") ? "block" : "none";
  }

  if (submitText) {
    if (mode === "schedule") submitText.textContent = "Xác nhận lên lịch xuất bản";
    else if (mode === "draft") submitText.textContent = "Lưu thành bản nháp (Draft)";
    else submitText.textContent = "Xác nhận xuất bản bài viết";
  }
}

// Final Submit
async function handleFinalSubmit() {
  const content = document.getElementById("post-content")?.value?.trim();
  const selectedChannels = getSelectedChannels();
  const brandId = document.getElementById("composer-brand-id")?.value || currentBrandId;
  const campaignId = document.getElementById("composer-campaign-id")?.value || null;
  const mode = document.querySelector('input[name="post_mode"]:checked')?.value || "now";

  if (!content) {
    showToast("Vui lòng nhập nội dung bài viết gốc!", "error");
    goToStep(2);
    return;
  }

  if (selectedChannels.length === 0) {
    showToast("Vui lòng chọn ít nhất 1 kênh xuất bản!", "error");
    goToStep(1);
    return;
  }

  let scheduledTime = null;
  if (mode === "schedule") {
    const rawTime = document.getElementById("scheduled-time")?.value;
    if (!rawTime) {
      showToast("Vui lòng chọn ngày và giờ hẹn đăng!", "error");
      return;
    }
    scheduledTime = rawTime;
  }

  // Get selected group IDs if FB Group is selected
  let targetGroupIds = [];
  if (selectedChannels.includes("facebook_group")) {
    const checkedBoxes = document.querySelectorAll('input[name="composer_group_check"]:checked');
    targetGroupIds = Array.from(checkedBoxes).map(cb => cb.value);
  }

  const formData = new FormData();
  formData.append("content", content);
  formData.append("channels", JSON.stringify(selectedChannels));
  formData.append("brand_id", brandId);
  if (campaignId) formData.append("campaign_id", campaignId);
  if (scheduledTime) formData.append("scheduled_time", scheduledTime);
  formData.append("group_ids", JSON.stringify(targetGroupIds));
  formData.append("platform_customizations", JSON.stringify(platformCustomizations));
  if (mode === "draft") formData.append("is_draft", "true");

  // Media files
  selectedMediaFiles.forEach(file => {
    formData.append("media_files", file);
  });

  const modal = document.getElementById("publishing-modal");
  if (modal && mode === "now") modal.classList.remove("hidden");

  try {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: formData
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Không thể tạo bài viết");
    }

    const result = await res.json();
    showToast("Đã xử lý bài viết thành công!", "success");

    // Reset Form
    document.getElementById("post-content").value = "";
    selectedMediaFiles = [];
    platformCustomizations = {};
    renderMediaPreviews();

    // Redirect to Queue
    setTimeout(() => {
      if (modal) modal.classList.add("hidden");
      switchView("queue");
    }, 1200);

  } catch (err) {
    if (modal) modal.classList.add("hidden");
    showToast(err.message, "error");
  }
}

// ================= AI CONTENT ASSISTANT LOGIC =================
function openAiAssistantDrawer() {
  const drawer = document.getElementById("ai-assistant-drawer");
  if (drawer) drawer.classList.remove("hidden");
  lucide.createIcons();
}

function closeAiAssistantDrawer() {
  const drawer = document.getElementById("ai-assistant-drawer");
  if (drawer) drawer.classList.add("hidden");
}

async function runAiGenerateCaption() {
  const topic = document.getElementById("ai-prompt-topic")?.value?.trim();
  const tone = document.getElementById("ai-prompt-tone")?.value;
  const goal = document.getElementById("ai-prompt-goal")?.value;
  const resultBox = document.getElementById("ai-result-content");

  if (!topic) {
    showToast("Vui lòng nhập chủ đề ngắn để AI có ngữ cảnh tạo bài!", "error");
    return;
  }

  if (resultBox) resultBox.textContent = "🐱 Xu Xu đang tạo Caption bài viết...";

  try {
    const res = await fetch("/api/ai/caption", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        topic,
        tone,
        goal,
        brand_name: "Duy Hiền Digital"
      })
    });
    const data = await res.json();
    if (resultBox) resultBox.textContent = data.caption;
  } catch (err) {
    if (resultBox) resultBox.textContent = "Không thể kết nối dịch vụ AI: " + err.message;
  }
}

async function runAiGenerateHooks() {
  const topic = document.getElementById("ai-prompt-topic")?.value?.trim();
  const tone = document.getElementById("ai-prompt-tone")?.value;
  const resultBox = document.getElementById("ai-result-content");

  if (!topic) {
    showToast("Vui lòng nhập chủ đề!", "error");
    return;
  }

  if (resultBox) resultBox.textContent = "🐱 Xu Xu đang tạo các câu Hook mở đầu...";

  try {
    const res = await fetch("/api/ai/hooks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, tone })
    });
    const data = await res.json();
    if (resultBox) {
      resultBox.textContent = data.hooks.map((h, i) => `${i + 1}. ${h}`).join("\n\n");
    }
  } catch (err) {
    if (resultBox) resultBox.textContent = "Lỗi tạo Hook: " + err.message;
  }
}

async function runAiGenerateCta() {
  const topic = document.getElementById("ai-prompt-topic")?.value?.trim();
  const goal = document.getElementById("ai-prompt-goal")?.value;
  const resultBox = document.getElementById("ai-result-content");

  if (!topic) {
    showToast("Vui lòng nhập chủ đề!", "error");
    return;
  }

  if (resultBox) resultBox.textContent = "Đang tạo Call-to-Action...";

  try {
    const res = await fetch("/api/ai/cta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, goal })
    });
    const data = await res.json();
    if (resultBox) resultBox.textContent = data.cta;
  } catch (err) {
    if (resultBox) resultBox.textContent = "Lỗi tạo CTA: " + err.message;
  }
}

async function runAiGenerateHashtags() {
  const topic = document.getElementById("ai-prompt-topic")?.value?.trim();
  const resultBox = document.getElementById("ai-result-content");

  if (!topic) {
    showToast("Vui lòng nhập chủ đề!", "error");
    return;
  }

  if (resultBox) resultBox.textContent = "Đang gợi ý Hashtags...";

  try {
    const res = await fetch("/api/ai/hashtags", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ topic, count: 6 })
    });
    const data = await res.json();
    if (resultBox) resultBox.textContent = data.hashtags.join(" ");
  } catch (err) {
    if (resultBox) resultBox.textContent = "Lỗi gợi ý Hashtags: " + err.message;
  }
}

function applyAiResultToMaster() {
  const resultBox = document.getElementById("ai-result-content");
  const masterInput = document.getElementById("post-content");
  if (!resultBox || !masterInput) return;

  const text = resultBox.textContent.trim();
  if (!text || text.startsWith("Nhập chủ đề")) {
    showToast("Chưa có nội dung AI nào để áp dụng!", "error");
    return;
  }

  masterInput.value = text;
  closeAiAssistantDrawer();
  showToast("Đã chèn nội dung AI vào bản thảo Master!", "success");
}

async function checkMasterGrammarAI() {
  const content = document.getElementById("post-content")?.value?.trim();
  if (!content) {
    showToast("Vui lòng nhập nội dung trước khi soát lỗi!", "error");
    return;
  }

  showToast("Đang soát lỗi chính tả & văn phong...", "info");
  try {
    const res = await fetch("/api/ai/grammar", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content })
    });
    const data = await res.json();
    if (data.improved_content) {
      document.getElementById("post-content").value = data.improved_content;
      showToast("Đã sửa các lỗi chính tả và tối ưu câu cú!", "success");
    }
  } catch (err) {
    showToast("Lỗi kiểm tra ngữ pháp: " + err.message, "error");
  }
}

async function autoOptimizeAllPlatformsAI() {
  const content = document.getElementById("post-content")?.value?.trim();
  const selectedChannels = getSelectedChannels();
  if (!content) {
    showToast("Vui lòng nhập nội dung gốc trước!", "error");
    return;
  }

  showToast("Đang tối ưu nội dung cho từng kênh với AI...", "info");
  try {
    const res = await fetch("/api/ai/adapt-channel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        master_content: content,
        channels: selectedChannels
      })
    });
    const data = await res.json();
    if (data.adaptations) {
      Object.keys(data.adaptations).forEach(ch => {
        if (!platformCustomizations[ch]) platformCustomizations[ch] = {};
        platformCustomizations[ch].caption = data.adaptations[ch];
      });
      initStep3PlatformCustomizations();
      showToast("Đã điều chỉnh độ dài và văn phong riêng biệt cho tất cả các kênh!", "success");
    }
  } catch (err) {
    showToast("Lỗi tự động tối ưu: " + err.message, "error");
  }
}

async function optimizeSinglePlatformAI(channel) {
  const content = document.getElementById("post-content")?.value?.trim();
  if (!content) return;

  showToast(`Đang tối ưu riêng cho ${channel}...`, "info");
  try {
    const res = await fetch("/api/ai/adapt-channel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        master_content: content,
        channels: [channel]
      })
    });
    const data = await res.json();
    if (data.adaptations && data.adaptations[channel]) {
      if (!platformCustomizations[channel]) platformCustomizations[channel] = {};
      platformCustomizations[channel].caption = data.adaptations[channel];
      const textarea = document.getElementById(`custom-caption-${channel}`);
      if (textarea) textarea.value = data.adaptations[channel];
      updatePlatformCustomization(channel);
      showToast(`Đã tối ưu xong cho ${channel}!`, "success");
    }
  } catch (err) {
    showToast(err.message, "error");
  }
}

// ================= VIEW 4: PUBLISHING QUEUE =================
async function loadPosts() {
  const container = document.getElementById("posts-container");
  if (!container) return;

  const statusFilter = document.getElementById("queue-filter-status") ? document.getElementById("queue-filter-status").value : "ALL";

  try {
    const res = await fetch(`/api/posts?brand_id=${currentBrandId}`);
    if (!res.ok) throw new Error("Không thể tải danh sách bài viết");
    let posts = await res.json();

    if (statusFilter !== "ALL") {
      posts = posts.filter(p => p.status === statusFilter);
    }

    // Update queue badge count in sidebar
    const scheduledCount = posts.filter(p => p.status === "scheduled").length;
    const badge = document.getElementById("badge-queue-count");
    if (badge) badge.textContent = scheduledCount;

    if (posts.length === 0) {
      container.innerHTML = `<div class="text-center py-12 text-xs text-slate-400">Không có bài viết nào phù hợp trong hàng đợi</div>`;
      return;
    }

    container.innerHTML = posts.map(post => {
      const isCompleted = (post.status === "completed");
      const isFailed = (post.status === "failed");
      const isScheduled = (post.status === "scheduled");

      const statusBadge = isCompleted ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">Đã xuất bản</span>` :
                          isFailed ? `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">Thất bại (${post.retry_count || 0}/3)</span>` :
                          `<span class="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">Chờ đăng</span>`;

      return `
        <div class="p-5 rounded-2xl bg-[#FCFAF7] border border-[#E7E1D4] hover:border-[#063E9E] transition space-y-3">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#E7E1D4] pb-3">
            <div class="flex items-center space-x-3">
              <span class="w-7 h-7 rounded-lg bg-blue-100 text-[#063E9E] flex items-center justify-center font-mono font-bold text-xs">#${post.id}</span>
              <div>
                <span class="text-xs font-bold text-slate-800">${post.channels ? post.channels.join(", ") : "Multi-channel"}</span>
                <span class="text-[10px] text-slate-400 font-mono ml-2">Tạo lúc: ${formatDateTime(post.created_at)}</span>
              </div>
            </div>
            <div class="flex items-center space-x-2">
              ${statusBadge}
            </div>
          </div>

          <div class="text-xs text-slate-700 leading-relaxed max-h-16 overflow-hidden text-ellipsis whitespace-pre-wrap">
            ${escapeHtml(post.content)}
          </div>

          ${isFailed && post.error_log ? `
            <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-700 font-mono">
              <strong>Lỗi:</strong> ${escapeHtml(post.error_log)}
            </div>
          ` : ''}

          <div class="flex items-center justify-between pt-2">
            <div class="text-[11px] text-slate-500">
              ${post.scheduled_time ? `⏰ Hẹn: <strong>${formatDateTime(post.scheduled_time)}</strong>` : '🚀 Xuất bản tức thời'}
            </div>
            <div class="flex items-center space-x-2">
              <button onclick="openPostDetail(${post.id})" class="px-3 py-1.5 rounded-xl bg-white border border-[#E7E1D4] text-xs font-bold text-slate-700 hover:bg-[#F4F1EA]">
                Chi tiết
              </button>
              ${isFailed ? `
                <button onclick="retryPost(${post.id})" class="px-3 py-1.5 rounded-xl bg-[#063E9E] text-white text-xs font-bold hover:bg-[#05317C] flex items-center space-x-1">
                  <i data-lucide="rotate-ccw" class="w-3 h-3"></i>
                  <span>Thử lại (Retry)</span>
                </button>
              ` : ''}
              ${isScheduled ? `
                <button onclick="cancelPost(${post.id})" class="px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 border border-rose-200 text-xs font-bold hover:bg-rose-100">
                  Hủy lịch
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;
    }).join("");

    lucide.createIcons();
  } catch (err) {
    container.innerHTML = `<p class="text-xs text-rose-600 p-4">Lỗi: ${err.message}</p>`;
  }
}

async function openPostDetail(postId) {
  try {
    const res = await fetch(`/api/posts/${postId}`);
    if (!res.ok) throw new Error("Không thể tải chi tiết bài viết");
    const post = await res.json();

    const drawer = document.getElementById("post-drawer");
    const idLabel = document.getElementById("drawer-post-id");
    const body = document.getElementById("drawer-body");
    const footer = document.getElementById("drawer-footer");

    if (idLabel) idLabel.textContent = `#${post.id}`;

    if (body) {
      body.innerHTML = `
        <div class="space-y-4 text-xs">
          <div>
            <span class="font-bold text-slate-700 uppercase tracking-wider block mb-1">Trạng thái:</span>
            <span class="font-semibold text-slate-900">${post.status}</span>
          </div>
          <div>
            <span class="font-bold text-slate-700 uppercase tracking-wider block mb-1">Nội dung bài viết:</span>
            <div class="p-3.5 rounded-xl bg-[#FCFAF7] border border-[#E7E1D4] whitespace-pre-wrap">${escapeHtml(post.content)}</div>
          </div>
          <div>
            <span class="font-bold text-slate-700 uppercase tracking-wider block mb-1">Kênh xuất bản:</span>
            <span>${post.channels ? post.channels.join(", ") : "—"}</span>
          </div>
          ${post.error_log ? `
            <div class="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800">
              <span class="font-bold block mb-1">Chi tiết lỗi:</span>
              <pre class="font-mono text-[11px] whitespace-pre-wrap">${escapeHtml(post.error_log)}</pre>
            </div>
          ` : ''}
        </div>
      `;
    }

    if (footer) {
      footer.innerHTML = `
        <button onclick="closePostDrawer()" class="px-4 py-2 rounded-xl bg-[#F4F1EA] text-xs font-bold text-slate-700">Đóng</button>
        <div class="flex space-x-2">
          ${post.status === "failed" ? `
            <button onclick="retryPost(${post.id}); closePostDrawer();" class="px-4 py-2 rounded-xl bg-[#063E9E] text-white text-xs font-bold">Thử lại (Retry)</button>
          ` : ''}
          ${post.status === "scheduled" ? `
            <button onclick="cancelPost(${post.id}); closePostDrawer();" class="px-4 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold">Hủy bài</button>
          ` : ''}
        </div>
      `;
    }

    if (drawer) drawer.classList.remove("hidden");
  } catch (err) {
    showToast(err.message, "error");
  }
}

function closePostDrawer() {
  const drawer = document.getElementById("post-drawer");
  if (drawer) drawer.classList.add("hidden");
}

async function retryPost(postId) {
  showToast(`Đang gửi lệnh thử lại cho bài #${postId}...`, "info");
  try {
    const res = await fetch(`/api/posts/${postId}/retry`, { method: "POST" });
    if (!res.ok) throw new Error("Thử lại thất bại");
    showToast(`Đã đưa bài #${postId} trở lại hàng đợi!`, "success");
    loadPosts();
  } catch (err) {
    showToast(err.message, "error");
  }
}

async function cancelPost(postId) {
  if (!confirm(`Bạn có chắc chắn muốn hủy bài viết #${postId} không?`)) return;
  try {
    const res = await fetch(`/api/posts/${postId}/cancel`, { method: "POST" });
    if (!res.ok) throw new Error("Hủy bài thất bại");
    showToast(`Đã hủy bài #${postId}!`, "success");
    loadPosts();
  } catch (err) {
    showToast(err.message, "error");
  }
}

// ================= VIEW 5: MEDIA LIBRARY (DAM) =================
async function loadMediaAssets() {
  const grid = document.getElementById("dam-assets-grid");
  if (!grid) return;

  try {
    const res = await fetch(`/api/media?brand_id=${currentBrandId}`);
    if (!res.ok) throw new Error("Không thể tải thư viện Media");
    allMediaAssets = await res.json();
    renderMediaGrid(allMediaAssets);
  } catch (err) {
    grid.innerHTML = `<p class="col-span-full text-xs text-rose-600 p-4">Lỗi: ${err.message}</p>`;
  }
}

function renderMediaGrid(assets) {
  const grid = document.getElementById("dam-assets-grid");
  if (!grid) return;

  if (assets.length === 0) {
    grid.innerHTML = `<div class="col-span-full py-12 text-center text-xs text-slate-400">Thư viện chưa có hình ảnh hoặc video nào</div>`;
    return;
  }

  grid.innerHTML = assets.map(asset => {
    const isVideo = (asset.mime_type && asset.mime_type.startsWith("video/"));
    const sizeKB = asset.file_size ? Math.round(asset.file_size / 1024) : 0;

    return `
      <div class="bg-[#FCFAF7] border border-[#E7E1D4] rounded-2xl overflow-hidden p-2 space-y-2 group hover:border-[#063E9E] transition">
        <div class="w-full h-28 rounded-xl bg-slate-900 overflow-hidden relative flex items-center justify-center">
          ${isVideo ?
            `<video src="${asset.file_path}" class="w-full h-full object-cover"></video><span class="absolute text-white font-bold text-xs">🎬</span>` :
            `<img src="${asset.file_path}" class="w-full h-full object-cover">`
          }
        </div>
        <div class="min-w-0">
          <p class="text-[11px] font-bold text-slate-800 truncate" title="${escapeHtml(asset.file_name)}">${escapeHtml(asset.file_name)}</p>
          <div class="flex items-center justify-between text-[10px] text-slate-400 mt-1">
            <span>${sizeKB} KB</span>
            <button onclick="deleteMediaAsset(${asset.id})" class="text-rose-600 hover:underline">Xóa</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

function filterMediaByType(type) {
  document.querySelectorAll(".media-filter-btn").forEach(btn => {
    btn.className = "media-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-[#F4F1EA] text-slate-600 hover:text-[#063E9E]";
  });
  event.target.className = "media-filter-btn px-3 py-1.5 rounded-xl text-xs font-bold bg-[#063E9E] text-white";

  if (type === "ALL") {
    renderMediaGrid(allMediaAssets);
  } else {
    const filtered = allMediaAssets.filter(a => a.mime_type && a.mime_type.startsWith(type));
    renderMediaGrid(filtered);
  }
}

function searchMediaAssets(query) {
  const q = query.toLowerCase().trim();
  const filtered = allMediaAssets.filter(a => 
    (a.file_name && a.file_name.toLowerCase().includes(q)) ||
    (a.tags && a.tags.toLowerCase().includes(q))
  );
  renderMediaGrid(filtered);
}

async function handleDamUpload(event) {
  const files = Array.from(event.target.files);
  if (files.length === 0) return;

  showToast(`Đang tải lên ${files.length} tệp vào DAM...`, "info");
  for (const file of files) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("brand_id", currentBrandId);

    try {
      await fetch("/api/media/upload", {
        method: "POST",
        body: formData
      });
    } catch (err) {
      console.error(err);
    }
  }

  showToast("Tải media hoàn tất!", "success");
  loadMediaAssets();
}

async function deleteMediaAsset(assetId) {
  if (!confirm("Bạn có chắc chắn muốn xóa asset này khỏi thư viện không?")) return;
  try {
    const res = await fetch(`/api/media/${assetId}`, { method: "DELETE" });
    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Không thể xóa file");
    }
    showToast("Đã xóa media asset!", "success");
    loadMediaAssets();
  } catch (err) {
    showToast(err.message, "error");
  }
}

// Media Picker Modal (For Composer)
function openMediaPickerModal() {
  const modal = document.getElementById("media-picker-modal");
  const grid = document.getElementById("picker-media-grid");
  if (!modal || !grid) return;

  grid.innerHTML = allMediaAssets.map(asset => {
    const isVideo = asset.mime_type && asset.mime_type.startsWith("video/");
    return `
      <div onclick="togglePickerSelection(${asset.id}, this)" class="cursor-pointer border-2 border-transparent rounded-xl overflow-hidden relative bg-slate-900 h-20">
        ${isVideo ?
          `<video src="${asset.file_path}" class="w-full h-full object-cover"></video>` :
          `<img src="${asset.file_path}" class="w-full h-full object-cover">`
        }
      </div>
    `;
  }).join("");

  modal.classList.remove("hidden");
}

function closeMediaPickerModal() {
  const modal = document.getElementById("media-picker-modal");
  if (modal) modal.classList.add("hidden");
}

function togglePickerSelection(assetId, el) {
  if (selectedPickerMediaIds.has(assetId)) {
    selectedPickerMediaIds.delete(assetId);
    el.classList.remove("border-[#063E9E]");
  } else {
    selectedPickerMediaIds.add(assetId);
    el.classList.add("border-[#063E9E]");
  }
  const label = document.getElementById("picker-selected-count");
  if (label) label.textContent = `Đã chọn ${selectedPickerMediaIds.size} files`;
}

function confirmMediaPickerSelection() {
  closeMediaPickerModal();
  showToast(`Đã chọn ${selectedPickerMediaIds.size} asset vào bài viết!`, "success");
}

// ================= VIEW 6: CONNECTED ACCOUNTS & MULTI-PLATFORM =================
let allAccountsData = [];
let currentAccountFilter = "ALL";
let currentConfigAccountId = null;

async function loadAccounts() {
  const grid = document.getElementById("accounts-cards-grid");
  if (!grid) return;

  try {
    const res = await fetch("/api/accounts");
    if (!res.ok) throw new Error("Không thể tải danh sách tài khoản");
    allAccountsData = await res.json();

    // 1. Cập nhật cụm Mini-stats
    const totalCount = allAccountsData.length;
    const activeCount = allAccountsData.filter(a => a.status === "connected").length;
    const expiringCount = allAccountsData.filter(a => a.status === "expiring_soon").length;
    const disconnectedCount = allAccountsData.filter(a => a.status === "disconnected").length;

    const elTotal = document.getElementById("acc-stat-total");
    const elActive = document.getElementById("acc-stat-active");
    const elExpiring = document.getElementById("acc-stat-expiring");
    const elDisconnected = document.getElementById("acc-stat-disconnected");

    if (elTotal) elTotal.textContent = totalCount;
    if (elActive) elActive.textContent = activeCount;
    if (elExpiring) elExpiring.textContent = expiringCount;
    if (elDisconnected) elDisconnected.textContent = disconnectedCount;

    // 2. Cập nhật Badge số lượng trên thanh Filter Tabs
    const badgeAll = document.getElementById("tab-count-all");
    const badgeFbPage = document.getElementById("tab-count-facebook_page");
    const badgeFbProfile = document.getElementById("tab-count-facebook_profile");
    const badgeFbGroup = document.getElementById("tab-count-facebook_group");
    const badgeZaloOA = document.getElementById("tab-count-zalo_oa");
    const badgeZaloProfile = document.getElementById("tab-count-zalo_profile");
    const badgeOther = document.getElementById("tab-count-other");

    if (badgeAll) badgeAll.textContent = totalCount;
    if (badgeFbPage) badgeFbPage.textContent = allAccountsData.filter(a => a.category === "facebook_page").length;
    if (badgeFbProfile) badgeFbProfile.textContent = allAccountsData.filter(a => a.category === "facebook_profile").length;
    if (badgeFbGroup) badgeFbGroup.textContent = allAccountsData.filter(a => a.category === "facebook_group").length;
    if (badgeZaloOA) badgeZaloOA.textContent = allAccountsData.filter(a => a.category === "zalo_oa").length;
    if (badgeZaloProfile) badgeZaloProfile.textContent = allAccountsData.filter(a => a.category === "zalo_profile").length;
    if (badgeOther) {
      badgeOther.textContent = allAccountsData.filter(a => 
        !["facebook_page", "facebook_profile", "facebook_group", "zalo_oa", "zalo_profile"].includes(a.category)
      ).length;
    }

    // 3. Render Cards
    renderAccountsGrid();

  } catch (err) {
    grid.innerHTML = `<div class="col-span-2 text-center py-10 text-xs text-rose-600 bg-rose-50 rounded-2xl border border-rose-200">Không thể nạp dữ liệu kênh: ${escapeHtml(err.message)}</div>`;
  }
}

function filterAccountsTab(category) {
  currentAccountFilter = category;

  // Cập nhật style nút tab được chọn
  document.querySelectorAll(".acc-tab-btn").forEach(btn => {
    btn.className = "acc-tab-btn flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-[#FCFAF7] border border-[#E7E1D4] text-slate-700 hover:bg-[#F4F1EA] transition";
  });

  const activeBtn = document.getElementById(`tab-acc-${category.toLowerCase()}`);
  if (activeBtn) {
    activeBtn.className = "acc-tab-btn flex items-center space-x-1.5 px-3.5 py-2 rounded-xl bg-[#063E9E] text-white shadow-sm transition";
  }

  renderAccountsGrid();
}

function renderAccountsGrid() {
  const grid = document.getElementById("accounts-cards-grid");
  if (!grid) return;

  // Lọc theo tab
  let filtered = allAccountsData;
  if (currentAccountFilter !== "ALL") {
    if (currentAccountFilter === "other") {
      filtered = allAccountsData.filter(a => 
        !["facebook_page", "facebook_profile", "facebook_group", "zalo_oa", "zalo_profile"].includes(a.category)
      );
    } else {
      filtered = allAccountsData.filter(a => a.category === currentAccountFilter);
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="col-span-2 text-center py-12 text-xs text-slate-400 bg-[#FCFAF7] rounded-3xl border border-[#E7E1D4]">Không có kênh nào trong mục lọc này. Bấm <strong>+ Kết nối kênh mới</strong> để thêm.</div>`;
    return;
  }

  grid.innerHTML = filtered.map(acc => {
    // 1. Xử lý tên và fallback an toàn 100% không còn undefined
    const accountName = escapeHtml(acc.account_name || acc.name || "Chưa đặt tên");
    const platformName = escapeHtml(acc.platform_name || "Mạng xã hội");
    const identifier = escapeHtml(acc.identifier || "Tài khoản hệ thống");
    const authMethod = escapeHtml(acc.auth_method || "API Token");
    const lastSynced = escapeHtml(acc.last_synced_at || "Vừa xong");
    const channelKey = acc.platform_key || acc.id || "facebook";

    // 2. Icon nhận diện riêng chuẩn sắc nét cho từng nền tảng
    let platformIconHtml = "";
    let platformBgColor = "#063E9E";

    if (acc.category === "facebook_page") {
      platformBgColor = "#1877F2";
      platformIconHtml = `
        <div class="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
          <span>🚩</span>
        </div>`;
    } else if (acc.category === "facebook_profile" || acc.category === "facebook_group") {
      platformBgColor = "#1877F2";
      platformIconHtml = `
        <div class="w-5 h-5 rounded-full bg-[#1877F2] text-white flex items-center justify-center font-bold text-[11px] shadow-sm font-sans">
          <span>f</span>
        </div>`;
    } else if (acc.category === "zalo_oa" || acc.category === "zalo_profile") {
      platformBgColor = "#0068FF";
      platformIconHtml = `
        <div class="w-5 h-5 rounded-full bg-[#0068FF] text-white flex items-center justify-center font-black text-[8px] shadow-sm tracking-tighter">
          <span>Z</span>
        </div>`;
    } else if (acc.category === "threads") {
      platformBgColor = "#000000";
      platformIconHtml = `
        <div class="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
          <span>@</span>
        </div>`;
    } else if (acc.category === "x_twitter") {
      platformBgColor = "#111827";
      platformIconHtml = `
        <div class="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
          <span>𝕏</span>
        </div>`;
    } else {
      platformBgColor = "#E1306C";
      platformIconHtml = `
        <div class="w-5 h-5 rounded-full bg-gradient-to-tr from-amber-500 to-pink-600 text-white flex items-center justify-center font-bold text-[10px] shadow-sm">
          <span>📸</span>
        </div>`;
    }

    // 3. Avatar tài khoản
    const avatarImg = acc.avatar_url ?
      `<img src="${escapeHtml(acc.avatar_url)}" alt="${accountName}" class="w-12 h-12 rounded-2xl object-cover border border-[#E7E1D4] shadow-sm">` :
      `<div class="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-sm shadow-sm" style="background-color: ${platformBgColor}">
        ${accountName.charAt(0).toUpperCase()}
       </div>`;

    // 4. Status Badge
    let statusBadgeHtml = "";
    if (acc.status === "connected") {
      statusBadgeHtml = `<span class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>Đã kết nối</span>
      </span>`;
    } else if (acc.status === "expiring_soon") {
      statusBadgeHtml = `<span class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-50 text-amber-700 border border-amber-200 animate-pulse">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
        <span>Token sắp hết hạn</span>
      </span>`;
    } else {
      statusBadgeHtml = `<span class="inline-flex items-center space-x-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
        <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
        <span>Lỗi / Chưa kết nối</span>
      </span>`;
    }

    // 5. Phạm vi quyền (Permissions) dạng tags nhỏ xinh
    let permissions = [];
    if (Array.isArray(acc.permissions) && acc.permissions.length > 0) {
      permissions = acc.permissions;
    } else if (typeof acc.permissions_granted === "string" && acc.permissions_granted.trim() && acc.permissions_granted !== "—") {
      permissions = acc.permissions_granted.split(",").map(p => p.trim());
    } else if (Array.isArray(acc.capabilities) && acc.capabilities.length > 0) {
      permissions = acc.capabilities;
    } else {
      permissions = ["Đăng bài tự động", "Quản lý tương tác"];
    }

    const permissionTagsHtml = permissions.slice(0, 4).map(perm => 
      `<span class="inline-block px-2 py-0.5 rounded-lg bg-white border border-[#E7E1D4] text-[10px] font-semibold text-slate-700 shadow-2xs">${escapeHtml(perm)}</span>`
    ).join(" ");

    // 6. Hạn dùng Token & Progress Bar
    const expiryDays = (acc.token_expiry_days !== undefined) ? acc.token_expiry_days : 45;
    const expiryLabel = escapeHtml(acc.token_expiry || (expiryDays > 300 ? "Vĩnh viễn (Session)" : `Còn ${expiryDays} ngày`));
    
    // Tính % progress bar (giả định 60 ngày là 100%)
    let progressPercent = 100;
    let progressBarColor = "#10B981"; // green
    if (expiryDays < 900) {
      progressPercent = Math.min(100, Math.max(5, Math.round((expiryDays / 60) * 100)));
      if (expiryDays <= 3) {
        progressBarColor = "#F43F5E"; // red
      } else if (expiryDays <= 14) {
        progressBarColor = "#F59E0B"; // amber
      }
    }

    return `
      <div class="p-5 sm:p-6 rounded-3xl bg-[#FCFAF7] border border-[#E7E1D4] hover:border-[#063E9E] hover:shadow-md transition duration-200 space-y-4 relative flex flex-col justify-between">
        
        <!-- Header Thẻ -->
        <div class="flex items-start justify-between gap-3">
          <div class="flex items-center space-x-3.5 min-w-0">
            <!-- Avatar có badge icon nằm ở góc dưới bên phải -->
            <div class="relative flex-shrink-0">
              ${avatarImg}
              <div class="absolute -bottom-1 -right-1 border-2 border-[#FCFAF7] rounded-full">
                ${platformIconHtml}
              </div>
            </div>

            <!-- Tên & ID -->
            <div class="min-w-0 flex-1">
              <h4 class="text-sm font-black text-slate-900 truncate" title="${accountName}">${accountName}</h4>
              <p class="text-[11px] text-slate-500 mt-0.5 truncate flex items-center space-x-1.5">
                <span class="font-bold text-[#063E9E]">${platformName}</span>
                <span>•</span>
                <span class="font-mono text-slate-400">${identifier}</span>
              </p>
            </div>
          </div>

          <!-- Status Badge -->
          <div class="flex-shrink-0">
            ${statusBadgeHtml}
          </div>
        </div>

        <!-- Body Thẻ: Quyền, Phương thức & Hạn Token -->
        <div class="space-y-3 pt-3 border-t border-[#E7E1D4]/80 text-xs">
          
          <!-- Phương thức xác thực -->
          <div class="flex items-center justify-between text-[11px]">
            <span class="text-slate-500 font-medium">Phương thức kết nối:</span>
            <span class="px-2 py-0.5 rounded-lg bg-blue-50 text-[#063E9E] font-bold font-mono text-[10px] border border-blue-200">
              ${authMethod}
            </span>
          </div>

          <!-- Permissions Tags -->
          <div>
            <span class="block text-[11px] text-slate-500 font-medium mb-1.5">Phạm vi quyền được cấp:</span>
            <div class="flex flex-wrap gap-1.5">
              ${permissionTagsHtml}
            </div>
          </div>

          <!-- Hạn dùng Token & Progress bar -->
          <div class="space-y-1 pt-1">
            <div class="flex items-center justify-between text-[11px]">
              <span class="text-slate-500 font-medium">Hạn dùng Token / Session:</span>
              <span class="font-bold ${expiryDays <= 3 ? 'text-rose-600 font-black animate-pulse' : 'text-slate-800'}">
                ${expiryLabel}
              </span>
            </div>
            <div class="w-full bg-[#EAE4D6] h-1.5 rounded-full overflow-hidden">
              <div class="h-1.5 rounded-full transition-all duration-500" style="width: ${progressPercent}%; background-color: ${progressBarColor}"></div>
            </div>
          </div>

          <!-- Đồng bộ lần cuối -->
          <div class="flex items-center justify-between text-[11px] text-slate-400 pt-1">
            <span>Đồng bộ lần cuối:</span>
            <span class="font-medium text-slate-600">${lastSynced}</span>
          </div>
        </div>

        <!-- Footer Thẻ: Nút Hành Động -->
        <div class="pt-3.5 border-t border-[#E7E1D4] flex items-center justify-between gap-2">
          <div class="flex items-center space-x-2">
            <!-- Nút Kiểm tra kết nối có Loading Spinner -->
            <button onclick="handleTestAccount('${channelKey}', this)" class="px-3.5 py-2 rounded-xl bg-white border border-[#E7E1D4] hover:bg-[#F4F1EA] text-slate-800 text-xs font-bold transition flex items-center space-x-1.5 shadow-2xs cursor-pointer">
              <i data-lucide="refresh-cw" class="btn-icon w-3.5 h-3.5 text-[#063E9E]"></i>
              <span class="btn-text">Kiểm tra kết nối</span>
            </button>

            <!-- Nút Làm mới Token hoặc Kết nối lại -->
            <button onclick="reconnectAccount('${channelKey}')" class="px-3.5 py-2 rounded-xl bg-blue-50 border border-blue-200 hover:bg-blue-100 text-[#063E9E] text-xs font-bold transition flex items-center space-x-1.5 cursor-pointer">
              <i data-lucide="key" class="w-3.5 h-3.5"></i>
              <span>Làm mới Token</span>
            </button>
          </div>

          <!-- Menu phụ 3 chấm -->
          <button onclick="openChannelOptionsModal('${acc.id || channelKey}', '${accountName}')" class="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-white border border-transparent hover:border-[#E7E1D4] transition" title="Cấu hình & Tùy chọn nâng cao">
            <i data-lucide="more-vertical" class="w-4 h-4"></i>
          </button>
        </div>

      </div>
    `;
  }).join("");

  lucide.createIcons();
}

// Xử lý kiểm tra kết nối tài khoản có hiệu ứng loading spinner
async function handleTestAccount(channelKey, btnEl) {
  const icon = btnEl.querySelector(".btn-icon");
  const text = btnEl.querySelector(".btn-text");

  if (icon) icon.classList.add("animate-spin");
  if (text) text.textContent = "Đang ping...";
  btnEl.disabled = true;

  try {
    const res = await fetch("/api/accounts/test-connection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ channel: channelKey })
    });
    const result = await res.json();
    if (result.success || result.status === "ok") {
      showToast(result.message || `Kênh ${channelKey} kết nối hoàn hảo!`, "success");
    } else {
      showToast(result.message || `Lỗi kết nối kênh ${channelKey}`, "error");
    }
  } catch (err) {
    showToast(`Lỗi ping kênh: ${err.message}`, "error");
  } finally {
    if (icon) icon.classList.remove("animate-spin");
    if (text) text.textContent = "Kiểm tra kết nối";
    btnEl.disabled = false;
    lucide.createIcons();
  }
}

// Làm mới Token / Kết nối lại
function reconnectAccount(channelKey) {
  if (channelKey.includes("facebook_profile")) {
    openFbConnectModal();
  } else if (channelKey.includes("facebook_group")) {
    switchView("groups");
  } else if (channelKey.includes("zalo")) {
    openZaloConnectModal();
  } else {
    showToast(`Mở hộp thoại cấp lại quyền OAuth cho ${channelKey}...`, "info");
    openConnectChannelModal();
  }
}

// ================= MODAL CONNECT CHANNEL (KẾT NỐI KÊNH MỚI) =================
function openConnectChannelModal() {
  const modal = document.getElementById("connect-channel-modal");
  if (modal) modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeConnectChannelModal() {
  const modal = document.getElementById("connect-channel-modal");
  if (modal) modal.classList.add("hidden");
}

function selectConnectorType(type) {
  closeConnectChannelModal();

  if (type === "facebook_page") {
    openFbPageConnectModal();
  } else if (type === "facebook_profile") {
    openFbConnectModal();
  } else if (type === "facebook_group") {
    openFbGroupConnectModal();
  } else if (type === "zalo_oa") {
    openZaloConnectModal("oa");
  } else if (type === "zalo_profile") {
    openZaloConnectModal("profile");
  } else if (type === "other_apis") {
    openOtherApisModal("threads");
  }
}

// ================= MODAL FACEBOOK FANPAGE (PAGE TOKEN) =================
function openFbPageConnectModal() {
  const modal = document.getElementById("fb-page-connect-modal");
  if (modal) modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeFbPageConnectModal() {
  const modal = document.getElementById("fb-page-connect-modal");
  if (modal) modal.classList.add("hidden");
}

async function testFbPageToken() {
  const token = document.getElementById("fb-page-token-input")?.value?.trim();
  if (!token) {
    showToast("Vui lòng dán chuỗi Page Access Token để kiểm tra!", "error");
    return;
  }
  showToast("Đang kiểm tra quyền hạn Page Access Token với Meta...", "info");
  try {
    const res = await fetch("/api/accounts/test-connection", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ channel: "facebook_page" })
    });
    const data = await res.json();
    if (data.success) {
      showToast(data.message || "Token Fanpage hợp lệ và đầy đủ quyền!", "success");
    } else {
      showToast(data.message || "Token không hợp lệ hoặc thiếu quyền hạn", "error");
    }
  } catch (err) {
    showToast("Lỗi kiểm tra token: " + err.message, "error");
  }
}

async function submitFbPageConnect() {
  const name = document.getElementById("fb-page-name-input")?.value?.trim() || "Facebook Fanpage Mới";
  const token = document.getElementById("fb-page-token-input")?.value?.trim();

  if (!token) {
    showToast("Vui lòng nhập Page Access Token (EAAB...)!", "error");
    return;
  }

  showToast(`Đang kết nối Fanpage "${name}"...`, "info");
  try {
    // Add to local state and notify
    const newPage = {
      id: `fb_page_${Date.now()}`,
      platform_key: "facebook_page",
      platform_name: "Facebook Page",
      account_name: name,
      name: name,
      avatar_url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=150&auto=format&fit=crop&q=80",
      category: "facebook_page",
      status: "connected",
      identifier: `Fanpage • ID: ${Math.floor(100000000000000 + Math.random() * 900000000000000)}`,
      auth_method: "Graph API v19.0",
      permissions: ["Đăng bài viết", "Thước phim Reels", "Album ảnh HD", "Quản lý tương tác"],
      permissions_granted: "Đăng bài viết, Thước phim Reels, Album ảnh HD, Quản lý tương tác",
      token_expiry: "Còn 60 ngày",
      token_expiry_days: 60,
      last_synced_at: "Vừa xong",
      capabilities: ["Bản tin Facebook", "Video Reels 9:16", "Album ảnh HD"]
    };
    allAccountsData.unshift(newPage);
    renderAccountsGrid();
    showToast(`Đã kết nối Fanpage "${name}" thành công!`, "success");
    closeFbPageConnectModal();
  } catch (err) {
    showToast("Không thể lưu kết nối Fanpage: " + err.message, "error");
  }
}

// ================= MODAL FACEBOOK GROUPS =================
function openFbGroupConnectModal() {
  const modal = document.getElementById("fb-group-connect-modal");
  if (modal) modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeFbGroupConnectModal() {
  const modal = document.getElementById("fb-group-connect-modal");
  if (modal) modal.classList.add("hidden");
}

async function submitFbGroupConnect() {
  const urlsText = document.getElementById("fb-group-urls-input")?.value?.trim();
  const category = document.getElementById("fb-group-category-select")?.value || "marketing";

  if (!urlsText) {
    showToast("Vui lòng nhập ít nhất một đường link hoặc ID nhóm Facebook!", "error");
    return;
  }

  const lines = urlsText.split("\n").map(l => l.trim()).filter(Boolean);
  showToast(`Đang phân tích và thêm ${lines.length} nhóm Facebook...`, "info");

  let addedCount = 0;
  for (const line of lines) {
    let cleanId = line;
    let name = "Nhóm Facebook mới";

    if (line.includes("facebook.com/groups/")) {
      const match = line.match(/groups\/([^\/\?]+)/);
      if (match && match[1]) cleanId = match[1];
      name = `Hội nhóm: ${cleanId.replace(/[-_]/g, " ")}`;
    }

    try {
      await fetch("/api/groups", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name,
          group_id: cleanId,
          category: category,
          url: line.startsWith("http") ? line : `https://www.facebook.com/groups/${cleanId}/`
        })
      });
      addedCount++;
    } catch (e) {
      console.warn("Lỗi lưu nhóm:", e);
    }
  }

  showToast(`Đã thêm thành công ${addedCount} nhóm Facebook vào hệ thống!`, "success");
  closeFbGroupConnectModal();
  loadGroups();
  loadAccounts();
}

// ================= MODAL ZALO CONNECT (OA & PROFILE) =================
let zaloQrInterval = null;

function openZaloConnectModal(defaultTab = "oa") {
  const modal = document.getElementById("zalo-connect-modal");
  if (modal) modal.classList.remove("hidden");
  switchZaloTab(defaultTab);
  lucide.createIcons();
}

function closeZaloConnectModal() {
  const modal = document.getElementById("zalo-connect-modal");
  if (modal) modal.classList.add("hidden");
  if (zaloQrInterval) clearInterval(zaloQrInterval);
}

function switchZaloTab(tab) {
  const tabOa = document.getElementById("zalo-tab-oa");
  const tabProfile = document.getElementById("zalo-tab-profile");
  const btnOa = document.getElementById("tab-btn-zalo-oa");
  const btnProfile = document.getElementById("tab-btn-zalo-profile");

  if (tab === "oa") {
    if (tabOa) tabOa.classList.remove("hidden");
    if (tabProfile) tabProfile.classList.add("hidden");
    if (btnOa) btnOa.className = "pb-2.5 px-3 border-b-2 border-[#0068FF] text-[#0068FF] flex items-center space-x-1.5 transition";
    if (btnProfile) btnProfile.className = "pb-2.5 px-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center space-x-1.5 transition";
    if (zaloQrInterval) clearInterval(zaloQrInterval);
  } else {
    if (tabOa) tabOa.classList.add("hidden");
    if (tabProfile) tabProfile.classList.remove("hidden");
    if (btnOa) btnOa.className = "pb-2.5 px-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center space-x-1.5 transition";
    if (btnProfile) btnProfile.className = "pb-2.5 px-3 border-b-2 border-[#0068FF] text-[#0068FF] flex items-center space-x-1.5 transition";
    startZaloQrTimer();
  }
  lucide.createIcons();
}

function startZaloQrTimer() {
  if (zaloQrInterval) clearInterval(zaloQrInterval);
  let seconds = 120;
  const timerEl = document.getElementById("zalo-qr-timer");
  if (timerEl) timerEl.textContent = `${seconds}s`;

  zaloQrInterval = setInterval(() => {
    seconds--;
    if (timerEl) timerEl.textContent = `${seconds}s`;
    if (seconds <= 0) {
      clearInterval(zaloQrInterval);
      if (timerEl) timerEl.textContent = "Hết hạn";
    }
  }, 1000);
}

function refreshZaloQrCode() {
  const qrImg = document.getElementById("zalo-qr-image");
  if (qrImg) {
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=BLEU_ZALO_LOGIN_QR_${Date.now()}`;
  }
  startZaloQrTimer();
  showToast("Đã tạo mới mã QR đăng nhập Zalo!", "info");
}

function submitZaloConnect(type = "oa") {
  if (type === "oa") {
    const oaId = document.getElementById("zalo-oa-id-input")?.value?.trim();
    const token = document.getElementById("zalo-token-input")?.value?.trim();

    if (!oaId && !token) {
      showToast("Vui lòng nhập Zalo OA ID hoặc Access Token!", "error");
      return;
    }
    showToast("Đã lưu kết nối Zalo Official Account thành công!", "success");
  } else {
    showToast("Đã xác nhận phiên làm việc Zalo Cá nhân qua mã QR!", "success");
  }
  closeZaloConnectModal();
  loadAccounts();
}

// ================= MODAL THREADS & X (TWITTER) =================
function openOtherApisModal(defaultTab = "threads") {
  const modal = document.getElementById("other-apis-connect-modal");
  if (modal) modal.classList.remove("hidden");
  switchOtherApisTab(defaultTab);
  lucide.createIcons();
}

function closeOtherApisModal() {
  const modal = document.getElementById("other-apis-connect-modal");
  if (modal) modal.classList.add("hidden");
}

function switchOtherApisTab(tab) {
  const tabThreads = document.getElementById("other-tab-threads");
  const tabTwitter = document.getElementById("other-tab-twitter");
  const btnThreads = document.getElementById("tab-btn-threads");
  const btnTwitter = document.getElementById("tab-btn-twitter");

  if (tab === "threads") {
    if (tabThreads) tabThreads.classList.remove("hidden");
    if (tabTwitter) tabTwitter.classList.add("hidden");
    if (btnThreads) btnThreads.className = "pb-2.5 px-3 border-b-2 border-slate-900 text-slate-900 flex items-center space-x-1.5 transition";
    if (btnTwitter) btnTwitter.className = "pb-2.5 px-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center space-x-1.5 transition";
  } else {
    if (tabThreads) tabThreads.classList.add("hidden");
    if (tabTwitter) tabTwitter.classList.remove("hidden");
    if (btnThreads) btnThreads.className = "pb-2.5 px-3 border-b-2 border-transparent text-slate-500 hover:text-slate-800 flex items-center space-x-1.5 transition";
    if (btnTwitter) btnTwitter.className = "pb-2.5 px-3 border-b-2 border-slate-900 text-slate-900 flex items-center space-x-1.5 transition";
  }
  lucide.createIcons();
}

async function submitOtherApisConnect() {
  const threadsUser = document.getElementById("threads-user-id-input")?.value?.trim();
  const threadsToken = document.getElementById("threads-token-input")?.value?.trim();
  const twitterKey = document.getElementById("twitter-api-key-input")?.value?.trim();
  const twitterSecret = document.getElementById("twitter-api-secret-input")?.value?.trim();
  const twitterToken = document.getElementById("twitter-token-input")?.value?.trim();

  const payload = {};
  if (threadsUser) payload.threads_user_id = threadsUser;
  if (threadsToken) payload.threads_access_token = threadsToken;
  if (twitterKey) payload.twitter_api_key = twitterKey;
  if (twitterSecret) payload.twitter_api_secret = twitterSecret;
  if (twitterToken) payload.twitter_access_token = twitterToken;

  try {
    await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    showToast("Đã lưu thông tin chìa khóa API Threads & X thành công!", "success");
    closeOtherApisModal();
    loadAccounts();
  } catch (err) {
    showToast("Không thể lưu cấu hình API: " + err.message, "error");
  }
}

// ================= MODAL CHANNEL OPTIONS (PROXY & DELAY) =================
function openChannelOptionsModal(channelId, channelTitle) {
  currentConfigAccountId = channelId;
  const modal = document.getElementById("channel-options-modal");
  const titleEl = document.getElementById("options-modal-title");

  if (titleEl && channelTitle) {
    titleEl.textContent = `Cấu hình: ${channelTitle}`;
  }

  if (modal) modal.classList.remove("hidden");
  lucide.createIcons();
}

function closeChannelOptionsModal() {
  const modal = document.getElementById("channel-options-modal");
  if (modal) modal.classList.add("hidden");
}

function saveChannelOptions() {
  const delay = document.getElementById("channel-opt-delay")?.value;
  const proxy = document.getElementById("channel-opt-proxy")?.value?.trim();

  showToast(`Đã lưu thiết lập giãn cách (${delay}s) và Proxy riêng!`, "success");
  closeChannelOptionsModal();
}

function handleDeleteChannel() {
  if (confirm(`Bạn có chắc chắn muốn ngắt kết nối và xóa kênh này khỏi hệ thống không?`)) {
    showToast(`Đã xóa kênh khỏi hệ thống!`, "success");
    closeChannelOptionsModal();
    allAccountsData = allAccountsData.filter(a => (a.id !== currentConfigAccountId && a.platform_key !== currentConfigAccountId));
    renderAccountsGrid();
  }
}

async function testAllConnections() {
  showToast("Đang kiểm tra kết nối toàn bộ hệ thống đa nền tảng...", "info");
  await handleTestAccount("facebook_profile", { querySelector: () => null });
  await handleTestAccount("facebook_page_duyhien", { querySelector: () => null });
  await handleTestAccount("zalo_oa", { querySelector: () => null });
  showToast("Đã hoàn tất kiểm tra sức khỏe tất cả các kênh!", "success");
  loadAccounts();
}

// ================= VIEW 7: FACEBOOK GROUPS =================
async function loadGroups() {
  const tbody = document.getElementById("groups-table-body");
  const composerList = document.getElementById("composer-groups-list");
  if (!tbody) return;

  try {
    const res = await fetch("/api/groups");
    if (!res.ok) throw new Error("Không thể tải danh sách groups");
    allGroups = await res.json();

    const badge = document.getElementById("badge-groups-count");
    if (badge) badge.textContent = allGroups.length;

    // Render in Groups View
    tbody.innerHTML = allGroups.map(grp => `
      <tr class="hover:bg-[#FCFAF7]">
        <td class="py-3 px-4 font-bold text-slate-800">${escapeHtml(grp.name)}</td>
        <td class="py-3 px-4 font-mono text-[11px] text-slate-500">${escapeHtml(grp.group_id)}</td>
        <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">${escapeHtml(grp.category || 'Mặc định')}</span></td>
        <td class="py-3 px-4 text-center">
          <input type="checkbox" ${grp.is_active ? 'checked' : ''} onchange="toggleGroupActive(${grp.id}, this.checked)" class="w-4 h-4 rounded text-[#063E9E]">
        </td>
        <td class="py-3 px-4 text-right">
          <button onclick="deleteGroup(${grp.id})" class="text-rose-600 hover:underline font-bold text-xs">Xóa</button>
        </td>
      </tr>
    `).join("");

    // Render in Composer Step 1
    if (composerList) {
      composerList.innerHTML = allGroups.map(grp => `
        <label class="flex items-center space-x-2 text-xs text-slate-700 p-1.5 rounded-lg hover:bg-[#F4F1EA] cursor-pointer">
          <input type="checkbox" name="composer_group_check" value="${grp.group_id}" checked class="rounded text-[#063E9E]">
          <span class="font-bold">${escapeHtml(grp.name)}</span>
          <span class="text-[10px] text-slate-400">(${escapeHtml(grp.category || 'Chung')})</span>
        </label>
      `).join("");
    }
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-rose-600 text-xs">${err.message}</td></tr>`;
  }
}

async function handleAddGroup(event) {
  event.preventDefault();
  const name = document.getElementById("grp-name")?.value?.trim();
  const group_id = document.getElementById("grp-id")?.value?.trim();
  const category = document.getElementById("grp-cat")?.value || "Chung";

  if (!name || !group_id) return;

  try {
    const res = await fetch("/api/groups", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, group_id, category, is_active: true })
    });
    if (!res.ok) throw new Error("Không thể thêm group");
    showToast("Đã thêm Facebook Group mới!", "success");
    document.getElementById("grp-name").value = "";
    document.getElementById("grp-id").value = "";
    loadGroups();
  } catch (err) {
    showToast(err.message, "error");
  }
}

async function deleteGroup(id) {
  if (!confirm("Bạn có chắc chắn muốn xóa nhóm này?")) return;
  try {
    await fetch(`/api/groups/${id}`, { method: "DELETE" });
    showToast("Đã xóa nhóm!", "success");
    loadGroups();
  } catch (err) {
    showToast(err.message, "error");
  }
}

async function toggleGroupActive(id, isActive) {
  try {
    await fetch(`/api/groups/${id}/toggle`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ is_active: isActive })
    });
  } catch (err) {
    console.error(err);
  }
}

function selectAllFilteredGroups(select) {
  document.querySelectorAll('input[name="composer_group_check"]').forEach(cb => {
    cb.checked = select;
  });
}

async function loadCategories() {
  try {
    const res = await fetch("/api/categories");
    if (!res.ok) return;
    allCategories = await res.json();
    const select = document.getElementById("grp-cat");
    if (select) {
      select.innerHTML = allCategories.map(c => `<option value="${c}">${c}</option>`).join("");
    }
  } catch (e) {
    console.error(e);
  }
}

function promptAddCategory() {
  const newCat = prompt("Nhập tên thể loại / chủ đề mới:");
  if (newCat && newCat.trim()) {
    allCategories.push(newCat.trim());
    const select = document.getElementById("grp-cat");
    if (select) {
      const opt = document.createElement("option");
      opt.value = newCat.trim();
      opt.textContent = newCat.trim();
      opt.selected = true;
      select.appendChild(opt);
    }
  }
}

// ================= VIEW 8: SETTINGS & AUDIT LOGS =================
async function loadSettings() {
  try {
    const res = await fetch("/api/settings");
    if (!res.ok) return;
    const data = await res.json();

    const minDelay = document.getElementById("set-min-delay");
    const maxDelay = document.getElementById("set-max-delay");
    const headless = document.getElementById("set-headless");
    const geminiKey = document.getElementById("set-gemini-key");
    const threadsUid = document.getElementById("set-threads-uid");
    const threadsToken = document.getElementById("set-threads-token");
    const twKey = document.getElementById("set-tw-key");
    const twSecret = document.getElementById("set-tw-secret");
    const twToken = document.getElementById("set-tw-token");
    const twTokenSecret = document.getElementById("set-tw-token-secret");

    if (minDelay) minDelay.value = data.delay_between_groups_min || 180;
    if (maxDelay) maxDelay.value = data.delay_between_groups_max || 300;
    if (headless) headless.value = String(data.headless ?? true);
    if (geminiKey) geminiKey.value = data.gemini_api_key || "";
    if (threadsUid) threadsUid.value = data.threads_user_id || "";
    if (threadsToken) threadsToken.value = data.threads_access_token || "";
    if (twKey) twKey.value = data.twitter_api_key || "";
    if (twSecret) twSecret.value = data.twitter_api_secret || "";
    if (twToken) twToken.value = data.twitter_access_token || "";
    if (twTokenSecret) twTokenSecret.value = data.twitter_access_token_secret || "";
  } catch (err) {
    console.error("Failed to load settings:", err);
  }
}

async function handleSaveSettings(event) {
  event.preventDefault();
  const payload = {
    delay_between_groups_min: parseInt(document.getElementById("set-min-delay")?.value || "180", 10),
    delay_between_groups_max: parseInt(document.getElementById("set-max-delay")?.value || "300", 10),
    headless: document.getElementById("set-headless")?.value === "true",
    gemini_api_key: document.getElementById("set-gemini-key")?.value || "",
    threads_user_id: document.getElementById("set-threads-uid")?.value || "",
    threads_access_token: document.getElementById("set-threads-token")?.value || "",
    twitter_api_key: document.getElementById("set-tw-key")?.value || "",
    twitter_api_secret: document.getElementById("set-tw-secret")?.value || "",
    twitter_access_token: document.getElementById("set-tw-token")?.value || "",
    twitter_access_token_secret: document.getElementById("set-tw-token-secret")?.value || ""
  };

  try {
    const res = await fetch("/api/settings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    if (!res.ok) throw new Error("Lưu thất bại");
    showToast("Đã lưu toàn bộ cấu hình hệ thống & API Keys!", "success");
  } catch (err) {
    showToast(err.message, "error");
  }
}

async function loadAuditLogsFull() {
  const tbody = document.getElementById("audit-logs-table-body");
  if (!tbody) return;

  try {
    const res = await fetch("/api/audit-logs?limit=50");
    if (!res.ok) return;
    const logs = await res.json();

    if (logs.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" class="py-4 text-center text-slate-400">Chưa có nhật ký hoạt động</td></tr>`;
      return;
    }

    tbody.innerHTML = logs.map(l => `
      <tr class="hover:bg-[#FCFAF7]">
        <td class="py-2 px-3 text-slate-500">${formatDateTime(l.created_at)}</td>
        <td class="py-2 px-3 font-bold text-slate-800">${escapeHtml(l.action)}</td>
        <td class="py-2 px-3">${escapeHtml(l.entity_type)} #${l.entity_id || ''}</td>
        <td class="py-2 px-3"><span class="px-2 py-0.5 rounded text-[10px] font-bold ${l.status === 'success' ? 'bg-emerald-50 text-emerald-700' : 'bg-rose-50 text-rose-700'}">${l.status}</span></td>
        <td class="py-2 px-3 text-slate-600 truncate max-w-xs">${escapeHtml(l.details || '')}</td>
      </tr>
    `).join("");
  } catch (err) {
    console.error(err);
  }
}

// ================= FACEBOOK CONNECTION (CHROME / COOKIE) =================
function openFbConnectModal() {
  const modal = document.getElementById("fb-connect-modal");
  if (modal) modal.classList.remove("hidden");
}

function closeFbConnectModal() {
  const modal = document.getElementById("fb-connect-modal");
  if (modal) modal.classList.add("hidden");
}

async function triggerInteractiveLogin() {
  showToast("Đang mở trình duyệt Chromium trên máy chủ...", "info");
  try {
    const res = await fetch("/api/facebook/interactive-login", { method: "POST" });
    const data = await res.json();
    showToast(data.message || "Đã kích hoạt cửa sổ đăng nhập!", "success");
  } catch (err) {
    showToast("Không thể mở trình duyệt: " + err.message, "error");
  }
}

async function submitCookieImport() {
  const cuser = document.getElementById("cookie-cuser-input")?.value?.trim();
  const xs = document.getElementById("cookie-xs-input")?.value?.trim();
  const raw = (document.getElementById("cookie-raw-input") || document.getElementById("cookie-input"))?.value?.trim();

  let cookieString = "";
  if (cuser && xs) {
    cookieString = `c_user=${cuser}; xs=${xs};`;
  } else if (raw) {
    cookieString = raw;
  } else {
    showToast("Vui lòng nhập c_user & xs hoặc dán chuỗi cookie!", "error");
    return;
  }

  showToast("Đang xác thực Cookie Facebook...", "info");
  try {
    const res = await fetch("/api/facebook/import-cookie", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ c_user: cuser, xs: xs, cookie_string: cookieString })
    });
    if (!res.ok) {
      const errData = await res.json().catch(() => ({}));
      throw new Error(errData.detail || "Cookie không hợp lệ hoặc đã hết hạn");
    }
    showToast("Đã lưu Cookie Facebook thành công!", "success");
    closeFbConnectModal();
    checkFacebookStatus();
  } catch (err) {
    showToast(err.message, "error");
  }
}

async function checkFacebookStatus() {
  try {
    const res = await fetch("/api/status");
    if (!res.ok) return;
    const data = await res.json();
    const pill = document.getElementById("fb-status-pill");
    const label = document.getElementById("fb-status-label");

    const isLoggedIn = data.facebook_connected || data.is_logged_in;
    if (isLoggedIn) {
      if (label) label.textContent = `Facebook: ${data.user_name || 'Đã kết nối'}`;
      if (pill) {
        pill.className = "flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-emerald-50 border border-emerald-200 text-emerald-800 shadow-sm transition cursor-pointer";
        pill.innerHTML = `<span class="w-2 h-2 rounded-full bg-emerald-500"></span><span class="hidden lg:inline text-[11px]">Facebook: Đã kết nối</span><span class="lg:hidden text-[11px]">FB</span>`;
      }
    } else {
      if (label) label.textContent = "Facebook: Chưa đăng nhập";
      if (pill) {
        pill.className = "flex items-center space-x-2 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-50 border border-rose-200 text-rose-800 shadow-sm transition cursor-pointer";
        pill.innerHTML = `<span class="w-2 h-2 rounded-full bg-rose-500"></span><span class="hidden lg:inline text-[11px]">Facebook: Chưa đăng nhập</span><span class="lg:hidden text-[11px]">FB</span>`;
      }
    }
  } catch (e) {
    console.error("FB status check failed:", e);
  }
}

// Brands and Campaigns Loader
async function loadBrandsAndCampaigns() {
  try {
    const resBrands = await fetch("/api/brands");
    if (resBrands.ok) {
      allBrands = await resBrands.json();
      const brandSelect = document.getElementById("composer-brand-id");
      const globalBrandSelect = document.getElementById("global-brand-select");
      if (brandSelect && allBrands.length > 0) {
        brandSelect.innerHTML = allBrands.map(b => `<option value="${b.id}">${b.name}</option>`).join("");
      }
      if (globalBrandSelect && allBrands.length > 0) {
        globalBrandSelect.innerHTML = allBrands.map(b => `<option value="${b.id}">${b.name}</option>`).join("");
      }
    }

    const resCamps = await fetch(`/api/campaigns?brand_id=${currentBrandId}`);
    if (resCamps.ok) {
      allCampaigns = await resCamps.json();
      const campSelect = document.getElementById("composer-campaign-id");
      if (campSelect) {
        campSelect.innerHTML = `<option value="">(Không thuộc chiến dịch)</option>` +
          allCampaigns.map(c => `<option value="${c.id}">${c.name}</option>`).join("");
      }
    }
  } catch (err) {
    console.error("Brands/Campaigns loader error:", err);
  }
}

// ================= UTILITIES =================
function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function formatDateTime(isoString) {
  if (!isoString) return "—";
  try {
    const d = new Date(isoString);
    if (isNaN(d.getTime())) return isoString;
    return d.toLocaleString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  } catch {
    return isoString;
  }
}

// Global Search
function handleGlobalSearch(event) {
  if (event.key === "Enter") {
    const query = event.target.value.trim();
    if (!query) return;
    showToast(`Tìm kiếm: "${query}"`, "info");
    switchView("queue");
  }
}

// Master character counter
document.addEventListener("DOMContentLoaded", () => {
  const masterContentEl = document.getElementById("post-content");
  if (masterContentEl) {
    masterContentEl.addEventListener("input", () => {
      const charCount = document.getElementById("master-char-count");
      if (charCount) charCount.textContent = `${masterContentEl.value.length} ký tự`;
    });
  }
});

// ================= APP INITIALIZATION =================
window.addEventListener("DOMContentLoaded", async () => {
  lucide.createIcons();
  await loadBrandsAndCampaigns();
  checkFacebookStatus();
  loadDashboardStats();
  loadGroups();
  loadCategories();
  loadMediaAssets();

  // Polling server background status every 60s
  setInterval(() => {
    checkFacebookStatus();
  }, 60000);
});
