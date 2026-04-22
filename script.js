document.addEventListener('DOMContentLoaded', function() {
    // 扩展模拟数据 - 添加评论回复功能
    const mockNotes = [
        {
            id: 1,
            user: {
                name: '花友小红',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20girl%20avatar%20with%20flowers%2C%20cartoon%20style%2C%20soft%20colors&image_size=square',
                location: '上海市浦东新区'
            },
            content: '我的绿萝终于长出新叶子了！分享一下我的养护心得：每周浇水一次，放在散光处，偶尔喷点叶面肥。',
            images: [
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=lush%20green%20pothos%20plant%20in%20white%20ceramic%20pot%2C%20new%20leaves%20growing&image_size=square',
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=close%20up%20of%20new%20pothos%20leaves%2C%20vibrant%20green&image_size=square'
            ],
            tags: ['绿萝', '养护心得', '新叶子'],
            favorited: false,
            favorites: 23,
            comments: [
                {
                    id: 1,
                    user: '花友小明',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20boy%20avatar%20with%20plants%2C%20cartoon%20style&image_size=square',
                    text: '养得真好！我的绿萝总是黄叶',
                    time: '1小时前',
                    replies: [
                        {
                            id: 1,
                            user: '花友小红',
                            avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20girl%20avatar%20with%20flowers%2C%20cartoon%20style%2C%20soft%20colors&image_size=square',
                            text: '可能是浇水太多了，控制一下水量试试',
                            replyTo: '花友小明',
                            time: '30分钟前'
                        }
                    ]
                },
                {
                    id: 2,
                    user: '花友花花',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20girl%20avatar%20with%20succulents%2C%20cartoon%20style&image_size=square',
                    text: '学习了！回去试试',
                    time: '30分钟前',
                    replies: []
                }
            ],
            time: '2小时前'
        },
        {
            id: 2,
            user: {
                name: '多肉爱好者',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20succulent%20plants%2C%20cartoon%20style&image_size=square',
                location: '北京市朝阳区'
            },
            content: '周末去花鸟市场淘了几盆多肉，状态都很好！老板说这几盆是贵货，大家帮我看看值不值？',
            images: [
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=collection%20of%20colorful%20succulent%20plants%20in%20small%20pots%2C%20vibrant%20colors&image_size=square',
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=close%20up%20of%20rare%20succulent%20with%20pink%20tips%2C%20macro%20shot&image_size=square',
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=succulent%20collection%20on%20wooden%20shelf%2C%20natural%20light&image_size=square'
            ],
            tags: ['多肉', '花鸟市场', '求鉴定'],
            favorited: true,
            favorites: 56,
            comments: [
                {
                    id: 1,
                    user: '多肉达人',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20cactus%2C%20cartoon%20style&image_size=square',
                    text: '第一盆是桃蛋，确实是贵货！赚了',
                    time: '2小时前',
                    replies: []
                }
            ],
            time: '5小时前'
        },
        {
            id: 3,
            user: {
                name: '绿植新手',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20small%20plant%2C%20cartoon%20style%2C%20beginner&image_size=square',
                location: '广州市天河区'
            },
            content: '求助！我的发财树叶子发黄掉叶，怎么办？已经换过盆了，水也控制了，但还是不见好。有没有大神指点一下？',
            images: [
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=pachira%20money%20tree%20with%20yellowing%20leaves%2C%20indoor%20plant&image_size=square',
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=close%20up%20of%20yellow%20leaves%20on%20money%20tree%2C%20worried%20look&image_size=square'
            ],
            tags: ['发财树', '求助', '黄叶'],
            favorited: false,
            favorites: 12,
            comments: [
                {
                    id: 1,
                    user: '绿植达人',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20gardening%20tools%2C%20cartoon%20style&image_size=square',
                    text: '可能是烂根了，建议脱盆检查根系',
                    time: '1天前',
                    replies: []
                },
                {
                    id: 2,
                    user: '花友小李',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20indoor%20plants%2C%20cartoon%20style&image_size=square',
                    text: '我之前也遇到过，通风不好也会这样',
                    time: '1天前',
                    replies: [
                        {
                            id: 1,
                            user: '绿植新手',
                            avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20small%20plant%2C%20cartoon%20style%2C%20beginner&image_size=square',
                            text: '好的，我今天就把窗户打开通风',
                            replyTo: '花友小李',
                            time: '20小时前'
                        }
                    ]
                },
                {
                    id: 3,
                    user: '园艺爱好者',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20garden%20flowers%2C%20cartoon%20style&image_size=square',
                    text: '少浇水，多晒太阳试试',
                    time: '1天前',
                    replies: []
                }
            ],
            time: '1天前'
        },
        {
            id: 4,
            user: {
                name: '蝴蝶兰达人',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20orchid%20flower%2C%20cartoon%20style&image_size=square',
                location: '深圳市南山区'
            },
            content: '分享我的蝴蝶兰养护秘诀！已经连续开花3个月了，花朵还很鲜艳。关键是：1. 散射光 2. 干透浇透 3. 每月施一次兰花专用肥。',
            images: [
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=beautiful%20phalaenopsis%20orchid%20with%20purple%20flowers%2C%20blooming%20indoor&image_size=square',
                'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=close%20up%20of%20orchid%20flowers%20and%20roots%2C%20healthy%20growth&image_size=square'
            ],
            tags: ['蝴蝶兰', '养护技巧', '开花'],
            favorited: false,
            favorites: 89,
            comments: [
                {
                    id: 1,
                    user: '兰花爱好者',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20orchids%2C%20cartoon%20style&image_size=square',
                    text: '收藏了！我的蝴蝶兰总是养不好',
                    time: '2天前',
                    replies: []
                },
                {
                    id: 2,
                    user: '新手花友',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20first%20plant%2C%20cartoon%20style&image_size=square',
                    text: '太详细了，谢谢分享！',
                    time: '2天前',
                    replies: []
                }
            ],
            time: '2天前'
        }
    ];

    const mockConsultRecords = [
        {
            id: 1,
            plantName: '绿萝',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=green%20pothos%20plant%20with%20some%20yellow%20spots%20on%20leaves&image_size=square',
            date: '2024-04-20',
            status: 'attention',
            statusText: '需要关注',
            preview: '叶片出现黄斑，可能是光照过强或浇水过多...',
            detail: {
                diagnosis: '叶片黄斑问题',
                symptoms: '部分叶片边缘发黄，有轻微焦枯现象',
                carePlan: [
                    '将植物移至散光处，避免阳光直射',
                    '减少浇水频率，待土壤表面干燥后再浇水',
                    '可适当喷洒叶面肥补充营养',
                    '剪掉严重发黄的叶片，促进新叶生长'
                ]
            }
        },
        {
            id: 2,
            plantName: '多肉植物',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=healthy%20succulent%20plant%20with%20thick%20green%20leaves%20in%20pot&image_size=square',
            date: '2024-04-15',
            status: 'healthy',
            statusText: '健康',
            preview: '植株状态良好，建议继续保持当前养护方式...',
            detail: {
                diagnosis: '健康状态',
                symptoms: '叶片饱满，颜色正常，生长态势良好',
                carePlan: [
                    '继续保持当前光照和浇水频率',
                    '每月施一次稀薄的多肉专用肥',
                    '注意通风，避免闷热环境',
                    '定期检查叶片背面是否有虫害'
                ]
            }
        },
        {
            id: 3,
            plantName: '发财树',
            image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=money%20tree%20plant%20with%20drooping%20leaves%2C%20looking%20sick&image_size=square',
            date: '2024-04-10',
            status: 'sick',
            statusText: '需要治疗',
            preview: '叶片下垂发软，可能是根系问题，建议紧急处理...',
            detail: {
                diagnosis: '根系问题',
                symptoms: '叶片发软下垂，盆土长期潮湿，有轻微异味',
                carePlan: [
                    '立即停止浇水，将植物移至通风处',
                    '脱盆检查根系，剪掉腐烂发黑的部分',
                    '用多菌灵溶液消毒根系后重新上盆',
                    '更换新的透气排水好的土壤',
                    '恢复期内减少浇水，保持土壤微干'
                ]
            }
        }
    ];

    const mockReminders = [
        {
            id: 1,
            plantName: '绿萝',
            task: '浇水',
            time: '今天 18:00',
            date: '2024-04-23',
            timeValue: '18:00',
            type: 'water',
            urgent: true
        },
        {
            id: 2,
            plantName: '多肉植物',
            task: '浇水',
            time: '明天 10:00',
            date: '2024-04-24',
            timeValue: '10:00',
            type: 'water',
            urgent: false
        },
        {
            id: 3,
            plantName: '发财树',
            task: '施肥',
            time: '后天 15:00',
            date: '2024-04-25',
            timeValue: '15:00',
            type: 'fertilizer',
            urgent: false
        },
        {
            id: 4,
            plantName: '蝴蝶兰',
            task: '浇水',
            time: '大后天 09:00',
            date: '2024-04-26',
            timeValue: '09:00',
            type: 'water',
            urgent: false
        }
    ];

    // 新增：消息提醒数据
    const mockNotifications = [
        {
            id: 1,
            type: 'comment',
            user: {
                name: '花友小红',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20girl%20avatar%20with%20flowers%2C%20cartoon%20style%2C%20soft%20colors&image_size=square'
            },
            text: '回复了你的评论：可能是浇水太多了，控制一下水量试试',
            noteTitle: '我的绿萝终于长出新叶子了！',
            time: '30分钟前',
            read: false,
            noteId: 1
        },
        {
            id: 2,
            type: 'comment',
            user: {
                name: '多肉达人',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20cactus%2C%20cartoon%20style&image_size=square'
            },
            text: '评论了你的笔记：第一盆是桃蛋，确实是贵货！赚了',
            noteTitle: '周末去花鸟市场淘了几盆多肉',
            time: '2小时前',
            read: false,
            noteId: 2
        },
        {
            id: 3,
            type: 'like',
            user: {
                name: '兰花爱好者',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20orchids%2C%20cartoon%20style&image_size=square'
            },
            text: '收藏了你的笔记',
            noteTitle: '分享我的蝴蝶兰养护秘诀！',
            time: '1天前',
            read: true,
            noteId: 4
        }
    ];

    // 当前选中的状态
    let currentNoteId = null;
    let currentConsultId = null;
    let currentEditingReminderId = null;
    let currentReplyTarget = null;
    
    // 图片查看器状态
    let imageViewerState = {
        images: [],
        currentIndex: 0
    };
    
    // 幻灯片状态
    let sliderState = {
        images: [],
        currentIndex: 0
    };

    // DOM 元素
    const navItems = document.querySelectorAll('.nav-item');
    const pages = document.querySelectorAll('.page');
    const notesContainer = document.getElementById('notes-container');
    const consultRecordsContainer = document.getElementById('consult-records');
    const remindersList = document.getElementById('reminders-list');
    const searchInput = document.getElementById('search-input');

    // 模态框元素
    const commentModal = document.getElementById('comment-modal');
    const consultDetailModal = document.getElementById('consult-detail-modal');
    const photoResultModal = document.getElementById('photo-result-modal');
    const editUsernameModal = document.getElementById('edit-username-modal');
    const imageViewerModal = document.getElementById('image-viewer-modal');
    const noteDetailModal = document.getElementById('note-detail-modal');
    const photoOptionModal = document.getElementById('photo-option-modal');
    const reminderSettingModal = document.getElementById('reminder-setting-modal');
    const notificationModal = document.getElementById('notification-modal');

    // 按钮元素
    const takePhotoBtn = document.getElementById('take-photo-btn');
    const avatarEditBtn = document.getElementById('avatar-edit-btn');
    const avatarInput = document.getElementById('avatar-input');
    const editUsernameBtn = document.getElementById('edit-username-btn');
    const saveUsernameBtn = document.getElementById('save-username-btn');
    const cancelEditUsernameBtn = document.getElementById('cancel-edit-username-btn');
    const notificationBtn = document.getElementById('notification-btn');
    
    // 文件输入框
    const photoCaptureInput = document.getElementById('photo-capture-input');
    const photoUploadInput = document.getElementById('photo-upload-input');
    
    // 拍照选项按钮
    const optionCameraBtn = document.getElementById('option-camera-btn');
    const optionGalleryBtn = document.getElementById('option-gallery-btn');
    const cancelPhotoOption = document.getElementById('cancel-photo-option');
    
    // 提醒设置按钮
    const saveReminderBtn = document.getElementById('save-reminder-btn');
    const cancelReminderBtn = document.getElementById('cancel-reminder-btn');
    
    // 图片查看器按钮
    const closeImageViewer = document.getElementById('close-image-viewer');
    const prevImageBtn = document.getElementById('prev-image-btn');
    const nextImageBtn = document.getElementById('next-image-btn');
    
    // 笔记详情按钮
    const closeNoteDetail = document.getElementById('close-note-detail');
    
    // 消息提醒按钮
    const closeNotification = document.getElementById('close-notification');

    // 关闭模态框按钮
    const closeCommentModal = document.getElementById('close-comment-modal');
    const closeConsultDetailModal = document.getElementById('close-consult-detail-modal');
    const closePhotoResultModal = document.getElementById('close-photo-result-modal');
    const closeEditUsernameModal = document.getElementById('close-edit-username-modal');
    const closeReminderSetting = document.getElementById('close-reminder-setting');
    
    // 摄像头模态框
    const cameraModal = document.getElementById('camera-modal');
    const closeCameraBtn = document.getElementById('close-camera');
    const capturePhotoBtn = document.getElementById('capture-photo-btn');
    const switchCameraBtn = document.getElementById('switch-camera-btn');
    const cameraGalleryBtn = document.getElementById('camera-gallery-btn');
    const cameraVideo = document.getElementById('camera-video');
    const cameraCanvas = document.getElementById('camera-canvas');
    
    // 摄像头状态
    let mediaStream = null;
    let facingMode = 'environment';

    // 初始化
    function init() {
        renderNotes(mockNotes);
        renderConsultRecords(mockConsultRecords);
        renderReminders(mockReminders);
        renderNotifications();
        setupEventListeners();
        updateNotificationBadge();
    }

    // 更新消息提醒徽章
    function updateNotificationBadge() {
        const badge1 = document.getElementById('notification-badge');
        const badge2 = document.getElementById('profile-notification-badge');
        const unreadCount = mockNotifications.filter(n => !n.read).length;
        
        [badge1, badge2].forEach(badge => {
            if (badge) {
                if (unreadCount > 0) {
                    badge.textContent = unreadCount;
                    badge.style.display = 'flex';
                } else {
                    badge.style.display = 'none';
                }
            }
        });
    }

    // 渲染花友笔记
    function renderNotes(notes) {
        notesContainer.innerHTML = '';
        
        if (notes.length === 0) {
            notesContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-leaf"></i>
                    <p>暂无花友笔记</p>
                </div>
            `;
            return;
        }

        notes.forEach(note => {
            const noteCard = document.createElement('div');
            noteCard.className = 'note-card';
            noteCard.dataset.id = note.id;

            const imagesClass = getImagesClass(note.images.length);
            
            noteCard.innerHTML = `
                <div class="note-header">
                    <img src="${note.user.avatar}" alt="${note.user.name}" class="note-avatar">
                    <div class="note-user-info">
                        <div class="note-username">${note.user.name}</div>
                        <div class="note-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${note.user.location}
                        </div>
                    </div>
                </div>
                <div class="note-content">
                    <p class="note-text">${note.content}</p>
                    ${note.images.length > 0 ? `
                        <div class="note-images ${imagesClass}">
                            ${note.images.map((img, index) => `
                                <img src="${img}" alt="笔记图片" class="note-image" data-note-id="${note.id}" data-image-index="${index}">
                            `).join('')}
                        </div>
                    ` : ''}
                    <div class="note-tags">
                        ${note.tags.map(tag => `
                            <span class="note-tag">${tag}</span>
                        `).join('')}
                    </div>
                </div>
                <div class="note-footer">
                    <div class="note-stats">
                        <div class="note-stat favorite-btn ${note.favorited ? 'favorited' : ''}" data-id="${note.id}">
                            <i class="${note.favorited ? 'fas' : 'far'} fa-heart"></i>
                            <span class="favorite-count">${note.favorites}</span>
                        </div>
                        <div class="note-stat comment-btn" data-id="${note.id}">
                            <i class="far fa-comment"></i>
                            <span>${getTotalComments(note.comments)}</span>
                        </div>
                    </div>
                    <div class="note-time">${note.time}</div>
                </div>
            `;

            notesContainer.appendChild(noteCard);
        });

        // 绑定笔记卡片的事件
        setupNoteEvents();
    }

    // 获取总评论数（包括回复）
    function getTotalComments(comments) {
        let count = comments.length;
        comments.forEach(comment => {
            count += comment.replies ? comment.replies.length : 0;
        });
        return count;
    }

    // 获取图片数量对应的CSS类
    function getImagesClass(count) {
        if (count === 1) return 'single';
        if (count === 2) return 'double';
        if (count >= 3) return 'triple';
        return '';
    }

    // 渲染问诊记录
    function renderConsultRecords(records) {
        consultRecordsContainer.innerHTML = '';
        
        if (records.length === 0) {
            consultRecordsContainer.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-stethoscope"></i>
                    <p>暂无问诊记录</p>
                </div>
            `;
            return;
        }

        records.forEach(record => {
            const recordCard = document.createElement('div');
            recordCard.className = 'consult-record-card';
            recordCard.dataset.id = record.id;

            recordCard.innerHTML = `
                <div class="record-header">
                    <img src="${record.image}" alt="${record.plantName}" class="record-thumbnail">
                    <div class="record-info">
                        <div class="record-plant-name">${record.plantName}</div>
                        <div class="record-date">${record.date}</div>
                    </div>
                    <div class="record-status ${record.status}">
                        <i class="fas ${getStatusIcon(record.status)}"></i>
                        ${record.statusText}
                    </div>
                </div>
                <div class="record-preview">${record.preview}</div>
            `;

            consultRecordsContainer.appendChild(recordCard);
        });

        // 绑定问诊记录的点击事件
        setupConsultRecordEvents();
    }

    // 获取状态对应的图标
    function getStatusIcon(status) {
        switch (status) {
            case 'healthy': return 'fa-check-circle';
            case 'attention': return 'fa-exclamation-circle';
            case 'sick': return 'fa-times-circle';
            default: return 'fa-question-circle';
        }
    }

    // 渲染提醒列表
    function renderReminders(reminders) {
        remindersList.innerHTML = '';
        
        if (reminders.length === 0) {
            remindersList.innerHTML = `
                <div class="empty-state">
                    <i class="fas fa-bell"></i>
                    <p>暂无浇水施肥提醒</p>
                </div>
            `;
        } else {
            reminders.forEach(reminder => {
                const reminderItem = document.createElement('div');
                reminderItem.className = `reminder-item ${reminder.urgent ? 'urgent' : ''} ${reminder.type === 'fertilizer' ? 'fertilizer' : ''}`;
                reminderItem.dataset.id = reminder.id;

                reminderItem.innerHTML = `
                    <div class="reminder-info">
                        <div class="reminder-plant">${reminder.plantName}</div>
                        <div class="reminder-task">${reminder.task}</div>
                    </div>
                    <div class="reminder-right-section">
                        <div class="reminder-time">${reminder.time}</div>
                        <button class="reminder-edit-btn" data-id="${reminder.id}">
                            <i class="fas fa-pen"></i>
                        </button>
                    </div>
                `;

                remindersList.appendChild(reminderItem);
            });
        }
        
        // 添加提醒按钮
        const addReminderBtn = document.createElement('button');
        addReminderBtn.className = 'add-reminder-btn';
        addReminderBtn.innerHTML = `
            <i class="fas fa-plus"></i>
            <span>添加新提醒</span>
        `;
        addReminderBtn.addEventListener('click', function() {
            openReminderSettingModal();
        });
        remindersList.appendChild(addReminderBtn);
        
        // 绑定提醒编辑事件
        setupReminderEvents();
    }

    // 渲染消息提醒列表
    function renderNotifications() {
        const notificationList = document.getElementById('notification-list');
        notificationList.innerHTML = '';
        
        if (mockNotifications.length === 0) {
            notificationList.innerHTML = `
                <div class="empty-state" style="padding: 40px 20px;">
                    <i class="fas fa-bell-slash"></i>
                    <p>暂无消息提醒</p>
                </div>
            `;
            return;
        }

        mockNotifications.forEach(notification => {
            const notificationItem = document.createElement('div');
            notificationItem.className = `notification-item ${!notification.read ? 'unread' : ''}`;
            notificationItem.dataset.id = notification.id;

            notificationItem.innerHTML = `
                <img src="${notification.user.avatar}" alt="${notification.user.name}" class="notification-avatar">
                <div class="notification-content">
                    <p class="notification-text">
                        <strong>${notification.user.name}</strong> ${notification.text}
                    </p>
                    <p class="notification-time">${notification.time}</p>
                </div>
            `;

            notificationItem.addEventListener('click', function() {
                // 标记为已读
                markNotificationAsRead(notification.id);
                // 打开相关笔记详情
                if (notification.noteId) {
                    openNoteDetailModal(notification.noteId);
                }
                notificationModal.classList.remove('active');
            });

            notificationList.appendChild(notificationItem);
        });
    }

    // 标记消息为已读
    function markNotificationAsRead(notificationId) {
        const notification = mockNotifications.find(n => n.id === notificationId);
        if (notification) {
            notification.read = true;
            updateNotificationBadge();
            renderNotifications();
        }
    }

    // 渲染评论列表（包含回复功能）
    function renderCommentsWithReplies(comments, noteId) {
        const commentsList = document.getElementById('comments-list');
        commentsList.innerHTML = '';
        
        if (comments.length === 0) {
            commentsList.innerHTML = `
                <div class="empty-state" style="padding: 20px;">
                    <p>暂无评论，快来抢沙发吧！</p>
                </div>
            `;
            return;
        }

        comments.forEach(comment => {
            const commentItem = document.createElement('div');
            commentItem.className = 'comment-item';
            commentItem.dataset.commentId = comment.id;

            commentItem.innerHTML = `
                <div class="comment-header">
                    <img src="${comment.avatar}" alt="${comment.user}" class="comment-avatar">
                    <div class="comment-info">
                        <div class="comment-username">${comment.user}</div>
                        <div class="comment-time">${comment.time}</div>
                    </div>
                </div>
                <div class="comment-text">${comment.text}</div>
                <div class="comment-actions">
                    <button class="comment-action-btn reply-btn" data-comment-id="${comment.id}" data-username="${comment.user}">
                        <i class="fas fa-reply"></i>
                        回复
                    </button>
                </div>
                ${comment.replies && comment.replies.length > 0 ? `
                    <div class="replies-list">
                        ${comment.replies.map(reply => `
                            <div class="reply-item">
                                <img src="${reply.avatar}" alt="${reply.user}" class="reply-avatar">
                                <div class="reply-content">
                                    <div class="reply-username">
                                        ${reply.user}
                                        ${reply.replyTo ? `<span class="reply-to">回复 ${reply.replyTo}</span>` : ''}
                                    </div>
                                    <div class="reply-text">${reply.text}</div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                <div class="reply-container" id="reply-container-${comment.id}" style="display: none;">
                    <div class="reply-input-wrapper">
                        <input type="text" class="reply-input" placeholder="回复 @${comment.user}...">
                        <button class="reply-submit-btn" data-comment-id="${comment.id}">发送</button>
                        <button class="reply-cancel-btn">取消</button>
                    </div>
                </div>
            `;

            commentsList.appendChild(commentItem);
        });

        // 绑定回复事件
        setupReplyEvents(noteId);
    }

    // 设置回复事件
    function setupReplyEvents(noteId) {
        // 回复按钮
        document.querySelectorAll('.reply-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const commentId = this.dataset.commentId;
                const username = this.dataset.username;
                
                // 隐藏其他回复输入框
                document.querySelectorAll('.reply-container').forEach(container => {
                    container.style.display = 'none';
                });
                
                // 显示当前回复输入框
                const replyContainer = document.getElementById(`reply-container-${commentId}`);
                replyContainer.style.display = 'block';
                
                // 聚焦输入框
                const input = replyContainer.querySelector('.reply-input');
                input.focus();
                input.placeholder = `回复 @${username}...`;
                
                currentReplyTarget = {
                    commentId: commentId,
                    username: username
                };
            });
        });

        // 取消回复按钮
        document.querySelectorAll('.reply-cancel-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const container = this.closest('.reply-container');
                container.style.display = 'none';
                currentReplyTarget = null;
            });
        });

        // 发送回复按钮
        document.querySelectorAll('.reply-submit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const commentId = parseInt(this.dataset.commentId);
                const container = this.closest('.reply-container');
                const input = container.querySelector('.reply-input');
                const replyText = input.value.trim();
                
                if (replyText && currentReplyTarget) {
                    addReply(noteId, commentId, replyText, currentReplyTarget.username);
                    input.value = '';
                    container.style.display = 'none';
                    currentReplyTarget = null;
                }
            });
        });
    }

    // 添加回复
    function addReply(noteId, commentId, text, replyTo) {
        const note = mockNotes.find(n => n.id === noteId);
        if (note) {
            const comment = note.comments.find(c => c.id === commentId);
            if (comment) {
                if (!comment.replies) {
                    comment.replies = [];
                }
                
                const newReply = {
                    id: comment.replies.length + 1,
                    user: '花友小明',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20boy%20avatar%20with%20plants%2C%20cartoon%20style&image_size=square',
                    text: text,
                    replyTo: replyTo,
                    time: '刚刚'
                };
                
                comment.replies.push(newReply);
                renderCommentsWithReplies(note.comments, noteId);
                
                // 更新笔记卡片上的评论数
                const commentBtn = document.querySelector(`.comment-btn[data-id="${noteId}"]`);
                const countSpan = commentBtn.querySelector('span');
                countSpan.textContent = getTotalComments(note.comments);
            }
        }
    }

    // 设置事件监听器
    function setupEventListeners() {
        // 导航切换
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                const pageId = this.dataset.page;
                switchPage(pageId);
                
                // 更新导航选中状态
                navItems.forEach(nav => nav.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // 搜索功能
        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase().trim();
            filterNotes(searchTerm);
        });

        // 拍照按钮 - 打开选择模态框
        takePhotoBtn.addEventListener('click', function() {
            photoOptionModal.classList.add('active');
        });

        // 拍照选项 - 相机
        optionCameraBtn.addEventListener('click', function() {
            photoOptionModal.classList.remove('active');
            openCamera();
        });

        // 拍照选项 - 相册
        optionGalleryBtn.addEventListener('click', function() {
            photoOptionModal.classList.remove('active');
            photoUploadInput.click();
        });

        // 取消拍照选项
        cancelPhotoOption.addEventListener('click', function() {
            photoOptionModal.classList.remove('active');
        });

        // 拍照输入变化
        photoCaptureInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                handlePhotoUpload(e.target.files[0]);
            }
        });

        // 上传图片变化
        photoUploadInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                handlePhotoUpload(e.target.files[0]);
            }
        });

        // 头像编辑按钮
        avatarEditBtn.addEventListener('click', function() {
            avatarInput.click();
        });

        // 头像输入变化
        avatarInput.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                handleAvatarUpload(e.target.files[0]);
            }
        });

        // 编辑用户名按钮
        editUsernameBtn.addEventListener('click', function() {
            const currentName = document.getElementById('user-name').textContent;
            document.getElementById('new-username-input').value = currentName;
            editUsernameModal.classList.add('active');
        });

        // 保存用户名
        saveUsernameBtn.addEventListener('click', function() {
            const newName = document.getElementById('new-username-input').value.trim();
            if (newName) {
                document.getElementById('user-name').textContent = newName;
                editUsernameModal.classList.remove('active');
            }
        });

        // 取消编辑用户名
        cancelEditUsernameBtn.addEventListener('click', function() {
            editUsernameModal.classList.remove('active');
        });

        // 消息提醒按钮
        notificationBtn.addEventListener('click', function() {
            renderNotifications();
            notificationModal.classList.add('active');
        });
        
        // 我的页面消息提醒按钮
        const profileNotificationBtn = document.getElementById('profile-notification-btn');
        if (profileNotificationBtn) {
            profileNotificationBtn.addEventListener('click', function() {
                renderNotifications();
                notificationModal.classList.add('active');
            });
        }

        // 提醒设置保存
        saveReminderBtn.addEventListener('click', function() {
            saveReminder();
        });

        // 提醒设置取消
        cancelReminderBtn.addEventListener('click', function() {
            reminderSettingModal.classList.remove('active');
            currentEditingReminderId = null;
        });

        // 图片查看器关闭
        closeImageViewer.addEventListener('click', function() {
            imageViewerModal.classList.remove('active');
        });

        // 图片查看器上一张
        prevImageBtn.addEventListener('click', function() {
            navigateImageViewer(-1);
        });

        // 图片查看器下一张
        nextImageBtn.addEventListener('click', function() {
            navigateImageViewer(1);
        });

        // 笔记详情关闭
        closeNoteDetail.addEventListener('click', function() {
            noteDetailModal.classList.remove('active');
        });

        // 关闭模态框
        closeCommentModal.addEventListener('click', function() {
            commentModal.classList.remove('active');
        });

        closeConsultDetailModal.addEventListener('click', function() {
            consultDetailModal.classList.remove('active');
        });

        closePhotoResultModal.addEventListener('click', function() {
            photoResultModal.classList.remove('active');
        });

        closeEditUsernameModal.addEventListener('click', function() {
            editUsernameModal.classList.remove('active');
        });

        closeReminderSetting.addEventListener('click', function() {
            reminderSettingModal.classList.remove('active');
            currentEditingReminderId = null;
        });

        closeNotification.addEventListener('click', function() {
            notificationModal.classList.remove('active');
        });
        
        // 摄像头模态框按钮
        closeCameraBtn.addEventListener('click', function() {
            closeCamera();
        });
        
        capturePhotoBtn.addEventListener('click', function() {
            capturePhoto();
        });
        
        switchCameraBtn.addEventListener('click', function() {
            switchCamera();
        });
        
        cameraGalleryBtn.addEventListener('click', function() {
            closeCamera();
            photoUploadInput.click();
        });

        // 点击模态框外部关闭
        [commentModal, consultDetailModal, photoResultModal, editUsernameModal, 
         imageViewerModal, noteDetailModal, photoOptionModal, reminderSettingModal,
         notificationModal, cameraModal].forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    if (this === cameraModal) {
                        closeCamera();
                    } else {
                        this.classList.remove('active');
                    }
                    if (this === reminderSettingModal) {
                        currentEditingReminderId = null;
                    }
                }
            });
        });

        // 键盘事件 - ESC关闭模态框，左右键切换图片
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                if (cameraModal.classList.contains('active')) {
                    closeCamera();
                }
                document.querySelectorAll('.modal.active').forEach(modal => {
                    modal.classList.remove('active');
                });
                currentEditingReminderId = null;
                currentReplyTarget = null;
            }
            
            if (imageViewerModal.classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    navigateImageViewer(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateImageViewer(1);
                }
            }
        });
    }

    // 设置笔记卡片事件
    function setupNoteEvents() {
        // 收藏按钮
        document.querySelectorAll('.favorite-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const noteId = parseInt(this.dataset.id);
                toggleFavorite(noteId);
            });
        });

        // 评论按钮
        document.querySelectorAll('.comment-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const noteId = parseInt(this.dataset.id);
                openCommentModal(noteId);
            });
        });

        // 图片点击 - 查看大图
        document.querySelectorAll('.note-image').forEach(img => {
            img.addEventListener('click', function(e) {
                e.stopPropagation();
                const noteId = parseInt(this.dataset.noteId);
                const imageIndex = parseInt(this.dataset.imageIndex);
                openImageViewer(noteId, imageIndex);
            });
        });

        // 笔记卡片点击 - 打开详情
        document.querySelectorAll('.note-card').forEach(card => {
            card.addEventListener('click', function(e) {
                // 如果点击的是按钮或图片，不触发详情页
                if (e.target.closest('.favorite-btn') || 
                    e.target.closest('.comment-btn') || 
                    e.target.closest('.note-image')) {
                    return;
                }
                const noteId = parseInt(this.dataset.id);
                openNoteDetailModal(noteId);
            });
        });
    }

    // 设置提醒事件
    function setupReminderEvents() {
        document.querySelectorAll('.reminder-edit-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const reminderId = parseInt(this.dataset.id);
                openReminderSettingModal(reminderId);
            });
        });
    }

    // 设置问诊记录点击事件
    function setupConsultRecordEvents() {
        document.querySelectorAll('.consult-record-card').forEach(card => {
            card.addEventListener('click', function() {
                const recordId = parseInt(this.dataset.id);
                openConsultDetailModal(recordId);
            });
        });
    }

    // 打开图片查看器
    function openImageViewer(noteId, imageIndex) {
        const note = mockNotes.find(n => n.id === noteId);
        if (note && note.images.length > 0) {
            imageViewerState = {
                images: note.images,
                currentIndex: imageIndex
            };
            updateImageViewer();
            imageViewerModal.classList.add('active');
        }
    }

    // 更新图片查看器
    function updateImageViewer() {
        const viewerImage = document.getElementById('viewer-image');
        const imageCounter = document.getElementById('image-counter');
        
        viewerImage.src = imageViewerState.images[imageViewerState.currentIndex];
        imageCounter.textContent = `${imageViewerState.currentIndex + 1}/${imageViewerState.images.length}`;
        
        // 显示/隐藏导航按钮
        prevImageBtn.style.display = imageViewerState.currentIndex > 0 ? 'flex' : 'none';
        nextImageBtn.style.display = imageViewerState.currentIndex < imageViewerState.images.length - 1 ? 'flex' : 'none';
    }

    // 导航图片查看器
    function navigateImageViewer(direction) {
        const newIndex = imageViewerState.currentIndex + direction;
        if (newIndex >= 0 && newIndex < imageViewerState.images.length) {
            imageViewerState.currentIndex = newIndex;
            updateImageViewer();
        }
    }

    // 打开笔记详情模态框
    function openNoteDetailModal(noteId) {
        currentNoteId = noteId;
        const note = mockNotes.find(n => n.id === noteId);
        if (note) {
            const detailBody = document.getElementById('note-detail-body');
            
            // 初始化幻灯片状态
            sliderState = {
                images: note.images,
                currentIndex: 0
            };
            
            detailBody.innerHTML = `
                <div class="detail-note-header">
                    <img src="${note.user.avatar}" alt="${note.user.name}" class="note-avatar">
                    <div class="note-user-info">
                        <div class="note-username">${note.user.name}</div>
                        <div class="note-location">
                            <i class="fas fa-map-marker-alt"></i>
                            ${note.user.location}
                        </div>
                    </div>
                </div>
                
                <div class="detail-note-content">
                    ${note.images.length > 0 ? `
                        <div class="detail-images-slider">
                            <div class="slider-container" id="slider-container">
                                ${note.images.map((img, index) => `
                                    <img src="${img}" alt="笔记图片" class="slider-image" data-index="${index}">
                                `).join('')}
                            </div>
                            ${note.images.length > 1 ? `
                                <div class="slider-nav">
                                    <button class="slider-nav-btn" id="slider-prev-btn">
                                        <i class="fas fa-chevron-left"></i>
                                    </button>
                                    <button class="slider-nav-btn" id="slider-next-btn">
                                        <i class="fas fa-chevron-right"></i>
                                    </button>
                                </div>
                                <div class="slider-dots">
                                    ${note.images.map((_, index) => `
                                        <div class="slider-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
                                    `).join('')}
                                </div>
                            ` : ''}
                            <div class="slider-counter">${sliderState.currentIndex + 1}/${note.images.length}</div>
                        </div>
                    ` : ''}
                    
                    <p class="detail-note-text">${note.content}</p>
                    
                    <div class="detail-note-tags">
                        ${note.tags.map(tag => `
                            <span class="note-tag">${tag}</span>
                        `).join('')}
                    </div>
                </div>
                
                <div class="detail-note-footer">
                    <div class="note-stats">
                        <div class="note-stat favorite-btn ${note.favorited ? 'favorited' : ''}" data-id="${note.id}">
                            <i class="${note.favorited ? 'fas' : 'far'} fa-heart"></i>
                            <span class="favorite-count">${note.favorites}</span>
                        </div>
                        <div class="note-stat comment-btn" data-id="${note.id}">
                            <i class="far fa-comment"></i>
                            <span>${getTotalComments(note.comments)}</span>
                        </div>
                    </div>
                    <div class="note-time">${note.time}</div>
                </div>
                
                <div class="detail-comments-section">
                    <div class="detail-comments-header">
                        评论 (${getTotalComments(note.comments)})
                    </div>
                    <div class="detail-comments-list" id="detail-comments-list">
                        <!-- 评论列表将通过JavaScript动态生成 -->
                    </div>
                </div>
                
                <div class="detail-comment-input-section">
                    <div class="comment-input-container">
                        <input type="text" id="detail-comment-input" placeholder="输入评论...">
                        <button id="submit-detail-comment-btn" class="btn-primary">发送</button>
                    </div>
                </div>
            `;

            // 渲染评论
            renderDetailComments(note.comments, noteId);
            
            // 设置幻灯片事件
            setupSliderEvents();
            
            // 设置详情页按钮事件
            setupDetailPageEvents(noteId);
            
            noteDetailModal.classList.add('active');
        }
    }

    // 设置幻灯片事件
    function setupSliderEvents() {
        const sliderPrevBtn = document.getElementById('slider-prev-btn');
        const sliderNextBtn = document.getElementById('slider-next-btn');
        
        if (sliderPrevBtn) {
            sliderPrevBtn.addEventListener('click', function() {
                navigateSlider(-1);
            });
        }
        
        if (sliderNextBtn) {
            sliderNextBtn.addEventListener('click', function() {
                navigateSlider(1);
            });
        }
        
        // 点击小点切换
        document.querySelectorAll('.slider-dot').forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                sliderState.currentIndex = index;
                updateSlider();
            });
        });
        
        // 点击图片查看大图
        document.querySelectorAll('.slider-image').forEach(img => {
            img.addEventListener('click', function() {
                const index = parseInt(this.dataset.index);
                openImageViewer(currentNoteId, index);
            });
        });
    }

    // 导航幻灯片
    function navigateSlider(direction) {
        const newIndex = sliderState.currentIndex + direction;
        if (newIndex >= 0 && newIndex < sliderState.images.length) {
            sliderState.currentIndex = newIndex;
            updateSlider();
        }
    }

    // 更新幻灯片
    function updateSlider() {
        const container = document.getElementById('slider-container');
        const counter = document.querySelector('.slider-counter');
        const dots = document.querySelectorAll('.slider-dot');
        
        if (container) {
            container.style.transform = `translateX(-${sliderState.currentIndex * 100}%)`;
        }
        
        if (counter) {
            counter.textContent = `${sliderState.currentIndex + 1}/${sliderState.images.length}`;
        }
        
        if (dots) {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === sliderState.currentIndex);
            });
        }
    }

    // 设置详情页事件
    function setupDetailPageEvents(noteId) {
        // 收藏按钮
        const favoriteBtn = document.querySelector('.detail-note-footer .favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', function() {
                toggleFavorite(noteId);
                // 更新详情页UI
                const note = mockNotes.find(n => n.id === noteId);
                if (note) {
                    const icon = this.querySelector('i');
                    const count = this.querySelector('.favorite-count');
                    
                    if (note.favorited) {
                        this.classList.add('favorited');
                        icon.className = 'fas fa-heart';
                    } else {
                        this.classList.remove('favorited');
                        icon.className = 'far fa-heart';
                    }
                    count.textContent = note.favorites;
                }
            });
        }
        
        // 评论按钮
        const commentBtn = document.querySelector('.detail-note-footer .comment-btn');
        if (commentBtn) {
            commentBtn.addEventListener('click', function() {
                // 滚动到评论区域
                const commentsSection = document.querySelector('.detail-comments-section');
                if (commentsSection) {
                    commentsSection.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
        
        // 发送评论按钮
        const submitDetailCommentBtn = document.getElementById('submit-detail-comment-btn');
        if (submitDetailCommentBtn) {
            submitDetailCommentBtn.addEventListener('click', function() {
                const commentInput = document.getElementById('detail-comment-input');
                const commentText = commentInput.value.trim();
                
                if (commentText) {
                    addComment(noteId, commentText);
                    commentInput.value = '';
                    
                    // 重新渲染评论
                    const note = mockNotes.find(n => n.id === noteId);
                    if (note) {
                        renderDetailComments(note.comments, noteId);
                        
                        // 更新评论数
                        const countSpan = document.querySelector('.detail-note-footer .comment-btn span');
                        if (countSpan) {
                            countSpan.textContent = getTotalComments(note.comments);
                        }
                        
                        const headerSpan = document.querySelector('.detail-comments-header');
                        if (headerSpan) {
                            headerSpan.textContent = `评论 (${getTotalComments(note.comments)})`;
                        }
                    }
                }
            });
        }
    }

    // 渲染详情页评论
    function renderDetailComments(comments, noteId) {
        const commentsList = document.getElementById('detail-comments-list');
        if (!commentsList) return;
        
        commentsList.innerHTML = '';
        
        if (comments.length === 0) {
            commentsList.innerHTML = `
                <div class="empty-state" style="padding: 20px;">
                    <p>暂无评论，快来抢沙发吧！</p>
                </div>
            `;
            return;
        }

        comments.forEach(comment => {
            const commentItem = document.createElement('div');
            commentItem.className = 'comment-item';
            commentItem.dataset.commentId = comment.id;

            commentItem.innerHTML = `
                <div class="comment-header">
                    <img src="${comment.avatar}" alt="${comment.user}" class="comment-avatar">
                    <div class="comment-info">
                        <div class="comment-username">${comment.user}</div>
                        <div class="comment-time">${comment.time}</div>
                    </div>
                </div>
                <div class="comment-text">${comment.text}</div>
                <div class="comment-actions">
                    <button class="comment-action-btn reply-btn" data-comment-id="${comment.id}" data-username="${comment.user}" data-reply-type="comment">
                        <i class="fas fa-reply"></i>
                        回复
                    </button>
                </div>
                ${comment.replies && comment.replies.length > 0 ? `
                    <div class="replies-list">
                        ${comment.replies.map(reply => `
                            <div class="reply-item">
                                <img src="${reply.avatar}" alt="${reply.user}" class="reply-avatar">
                                <div class="reply-content">
                                    <div class="reply-username">
                                        ${reply.user}
                                        ${reply.replyTo ? `<span class="reply-to">回复 ${reply.replyTo}</span>` : ''}
                                    </div>
                                    <div class="reply-text">${reply.text}</div>
                                    <div class="comment-actions">
                                        <button class="comment-action-btn reply-btn" data-comment-id="${comment.id}" data-username="${reply.user}" data-reply-type="reply" data-reply-id="${reply.id}">
                                            <i class="fas fa-reply"></i>
                                            回复
                                        </button>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                ` : ''}
                <div class="reply-container" id="detail-reply-container-${comment.id}" style="display: none;">
                    <div class="reply-input-wrapper">
                        <input type="text" class="reply-input" placeholder="回复...">
                        <button class="reply-submit-btn" data-comment-id="${comment.id}">发送</button>
                        <button class="reply-cancel-btn">取消</button>
                    </div>
                </div>
            `;

            commentsList.appendChild(commentItem);
        });

        // 绑定回复事件
        setupDetailReplyEvents(noteId);
    }

    // 设置详情页回复事件
    function setupDetailReplyEvents(noteId) {
        // 回复按钮
        document.querySelectorAll('.detail-comments-list .reply-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const commentId = this.dataset.commentId;
                const username = this.dataset.username;
                
                // 隐藏其他回复输入框
                document.querySelectorAll('.detail-comments-list .reply-container').forEach(container => {
                    container.style.display = 'none';
                });
                
                // 显示当前回复输入框
                const replyContainer = document.getElementById(`detail-reply-container-${commentId}`);
                replyContainer.style.display = 'block';
                
                // 聚焦输入框
                const input = replyContainer.querySelector('.reply-input');
                input.focus();
                input.placeholder = `回复 @${username}...`;
                
                currentReplyTarget = {
                    commentId: commentId,
                    username: username
                };
            });
        });

        // 取消回复按钮
        document.querySelectorAll('.detail-comments-list .reply-cancel-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const container = this.closest('.reply-container');
                container.style.display = 'none';
                currentReplyTarget = null;
            });
        });

        // 发送回复按钮
        document.querySelectorAll('.detail-comments-list .reply-submit-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const commentId = parseInt(this.dataset.commentId);
                const container = this.closest('.reply-container');
                const input = container.querySelector('.reply-input');
                const replyText = input.value.trim();
                
                if (replyText && currentReplyTarget) {
                    addReply(noteId, commentId, replyText, currentReplyTarget.username);
                    input.value = '';
                    container.style.display = 'none';
                    currentReplyTarget = null;
                    
                    // 重新渲染评论
                    const note = mockNotes.find(n => n.id === noteId);
                    if (note) {
                        renderDetailComments(note.comments, noteId);
                        
                        // 更新评论数
                        const countSpan = document.querySelector('.detail-note-footer .comment-btn span');
                        if (countSpan) {
                            countSpan.textContent = getTotalComments(note.comments);
                        }
                        
                        const headerSpan = document.querySelector('.detail-comments-header');
                        if (headerSpan) {
                            headerSpan.textContent = `评论 (${getTotalComments(note.comments)})`;
                        }
                    }
                }
            });
        });
    }

    // 打开摄像头
    async function openCamera() {
        try {
            if (mediaStream) {
                closeCamera();
            }
            
            const constraints = {
                video: {
                    facingMode: facingMode,
                    width: { ideal: 1280 },
                    height: { ideal: 720 }
                },
                audio: false
            };
            
            mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
            cameraVideo.srcObject = mediaStream;
            cameraModal.classList.add('active');
            
        } catch (error) {
            console.error('无法访问摄像头:', error);
            
            if (error.name === 'NotAllowedError') {
                alert('请允许访问摄像头以使用拍照功能');
            } else if (error.name === 'NotFoundError') {
                alert('未检测到摄像头设备');
            } else {
                alert('无法打开摄像头，将使用文件选择方式');
                photoCaptureInput.click();
            }
        }
    }
    
    // 关闭摄像头
    function closeCamera() {
        if (mediaStream) {
            mediaStream.getTracks().forEach(track => track.stop());
            mediaStream = null;
        }
        cameraVideo.srcObject = null;
        cameraModal.classList.remove('active');
    }
    
    // 切换摄像头
    async function switchCamera() {
        facingMode = facingMode === 'environment' ? 'user' : 'environment';
        if (mediaStream) {
            await openCamera();
        }
    }
    
    // 拍照
    function capturePhoto() {
        if (!cameraVideo || !cameraCanvas) return;
        
        const video = cameraVideo;
        const canvas = cameraCanvas;
        
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        
        const ctx = canvas.getContext('2d');
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        
        canvas.toBlob(function(blob) {
            const file = new File([blob], 'captured-photo.jpg', { type: 'image/jpeg' });
            closeCamera();
            handlePhotoUpload(file);
        }, 'image/jpeg', 0.9);
    }

    // 切换页面
    function switchPage(pageId) {
        pages.forEach(page => {
            page.classList.remove('active');
        });
        
        const targetPage = document.getElementById(pageId);
        if (targetPage) {
            targetPage.classList.add('active');
        }
    }

    // 过滤笔记
    function filterNotes(searchTerm) {
        if (!searchTerm) {
            renderNotes(mockNotes);
            return;
        }

        const filteredNotes = mockNotes.filter(note => {
            const searchLower = searchTerm.toLowerCase();
            return (
                note.content.toLowerCase().includes(searchLower) ||
                note.user.name.toLowerCase().includes(searchLower) ||
                note.tags.some(tag => tag.toLowerCase().includes(searchLower))
            );
        });

        renderNotes(filteredNotes);
    }

    // 切换收藏状态
    function toggleFavorite(noteId) {
        const note = mockNotes.find(n => n.id === noteId);
        if (note) {
            note.favorited = !note.favorited;
            note.favorites += note.favorited ? 1 : -1;
            
            // 更新首页UI
            const favoriteBtn = document.querySelector(`.notes-container .favorite-btn[data-id="${noteId}"]`);
            if (favoriteBtn) {
                const icon = favoriteBtn.querySelector('i');
                const count = favoriteBtn.querySelector('.favorite-count');

                if (note.favorited) {
                    favoriteBtn.classList.add('favorited');
                    icon.className = 'fas fa-heart';
                } else {
                    favoriteBtn.classList.remove('favorited');
                    icon.className = 'far fa-heart';
                }
                count.textContent = note.favorites;
            }
        }
    }

    // 打开评论模态框
    function openCommentModal(noteId) {
        currentNoteId = noteId;
        const note = mockNotes.find(n => n.id === noteId);
        if (note) {
            renderCommentsWithReplies(note.comments, noteId);
            commentModal.classList.add('active');
        }
    }

    // 添加评论
    function addComment(noteId, text) {
        const note = mockNotes.find(n => n.id === noteId);
        if (note) {
            const newComment = {
                id: note.comments.length + 1,
                user: '花友小明',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20boy%20avatar%20with%20plants%2C%20cartoon%20style&image_size=square',
                text: text,
                time: '刚刚',
                replies: []
            };
            note.comments.push(newComment);
            
            // 更新首页评论数
            const commentBtn = document.querySelector(`.notes-container .comment-btn[data-id="${noteId}"]`);
            if (commentBtn) {
                const countSpan = commentBtn.querySelector('span');
                countSpan.textContent = getTotalComments(note.comments);
            }
        }
    }

    // 打开问诊详情模态框
    function openConsultDetailModal(recordId) {
        currentConsultId = recordId;
        const record = mockConsultRecords.find(r => r.id === recordId);
        if (record) {
            const detailContent = document.getElementById('consult-detail-content');
            detailContent.innerHTML = `
                <img src="${record.image}" alt="${record.plantName}" class="detail-image">
                <h3 class="detail-plant-name">${record.plantName}</h3>
                <p class="detail-date">问诊日期：${record.date}</p>
                
                <div class="detail-section">
                    <h4 class="detail-section-title">
                        <i class="fas fa-diagnoses"></i>
                        诊断结果
                    </h4>
                    <div class="detail-section-content">${record.detail.diagnosis}</div>
                </div>
                
                <div class="detail-section">
                    <h4 class="detail-section-title">
                        <i class="fas fa-list-ul"></i>
                        症状描述
                    </h4>
                    <div class="detail-section-content">${record.detail.symptoms}</div>
                </div>
                
                <div class="detail-section">
                    <h4 class="detail-section-title">
                        <i class="fas fa-leaf"></i>
                        养护方案
                    </h4>
                    <div class="detail-section-content" style="padding: 0; background: transparent;">
                        ${record.detail.carePlan.map((item, index) => `
                            <div style="display: flex; align-items: flex-start; gap: 8px; padding: 8px 12px; background-color: var(--background-light); border-radius: 8px; margin-bottom: 8px;">
                                <span style="background-color: var(--primary-color); color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 2px;">${index + 1}</span>
                                <span style="font-size: 14px; color: var(--text-secondary); line-height: 1.5;">${item}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;

            consultDetailModal.classList.add('active');
        }
    }

    // 打开提醒设置模态框
    function openReminderSettingModal(reminderId = null) {
        currentEditingReminderId = reminderId;
        
        // 清空表单
        document.getElementById('reminder-plant-name').value = '';
        document.getElementById('reminder-type').value = 'water';
        document.getElementById('reminder-date').value = '';
        document.getElementById('reminder-time').value = '';
        
        // 如果是编辑模式，填充数据
        if (reminderId) {
            const reminder = mockReminders.find(r => r.id === reminderId);
            if (reminder) {
                document.getElementById('reminder-plant-name').value = reminder.plantName;
                document.getElementById('reminder-type').value = reminder.type;
                document.getElementById('reminder-date').value = reminder.date || '';
                document.getElementById('reminder-time').value = reminder.timeValue || '';
            }
        }
        
        reminderSettingModal.classList.add('active');
    }

    // 保存提醒
    function saveReminder() {
        const plantName = document.getElementById('reminder-plant-name').value.trim();
        const type = document.getElementById('reminder-type').value;
        const date = document.getElementById('reminder-date').value;
        const timeValue = document.getElementById('reminder-time').value;
        
        if (!plantName || !date || !timeValue) {
            alert('请填写完整信息');
            return;
        }
        
        // 格式化显示时间
        const displayTime = formatDateTime(date, timeValue);
        const task = type === 'water' ? '浇水' : '施肥';
        
        // 判断是否紧急（今天或更早）
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const reminderDate = new Date(date);
        const urgent = reminderDate <= today;
        
        if (currentEditingReminderId) {
            // 编辑模式
            const reminder = mockReminders.find(r => r.id === currentEditingReminderId);
            if (reminder) {
                reminder.plantName = plantName;
                reminder.type = type;
                reminder.task = task;
                reminder.date = date;
                reminder.timeValue = timeValue;
                reminder.time = displayTime;
                reminder.urgent = urgent;
            }
        } else {
            // 新增模式
            const newReminder = {
                id: mockReminders.length + 1,
                plantName: plantName,
                task: task,
                time: displayTime,
                date: date,
                timeValue: timeValue,
                type: type,
                urgent: urgent
            };
            mockReminders.push(newReminder);
        }
        
        // 重新渲染
        renderReminders(mockReminders);
        reminderSettingModal.classList.remove('active');
        currentEditingReminderId = null;
    }

    // 格式化日期时间显示
    function formatDateTime(dateStr, timeStr) {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const targetDate = new Date(dateStr);
        targetDate.setHours(0, 0, 0, 0);
        
        const diffDays = Math.ceil((targetDate - today) / (1000 * 60 * 60 * 24));
        
        let dateDisplay = '';
        if (diffDays === 0) {
            dateDisplay = '今天';
        } else if (diffDays === 1) {
            dateDisplay = '明天';
        } else if (diffDays === 2) {
            dateDisplay = '后天';
        } else if (diffDays === 3) {
            dateDisplay = '大后天';
        } else {
            // 格式化日期
            const month = targetDate.getMonth() + 1;
            const day = targetDate.getDate();
            dateDisplay = `${month}月${day}日`;
        }
        
        return `${dateDisplay} ${timeStr}`;
    }

    // 处理照片上传（模拟拍照识别）
    function handlePhotoUpload(file) {
        // 显示加载状态
        const resultContent = document.getElementById('photo-result-content');
        resultContent.innerHTML = `
            <div class="loading">
                <div class="loading-spinner"></div>
            </div>
        `;
        photoResultModal.classList.add('active');

        // 模拟识别过程（2秒后显示结果）
        setTimeout(() => {
            // 创建图片预览URL
            const imageUrl = URL.createObjectURL(file);

            // 随机选择一种植物和养护方案
            const plants = [
                {
                    name: '绿萝',
                    confidence: '95%',
                    diagnosis: '健康状态',
                    symptoms: '植株状态良好，叶片翠绿有光泽，生长态势正常',
                    carePlan: [
                        '光照：喜散光，避免阳光直射',
                        '浇水：每周1-2次，保持土壤微湿',
                        '温度：适宜15-25°C',
                        '施肥：每月施一次稀薄液肥',
                        '注意：叶片发黄时减少浇水'
                    ]
                },
                {
                    name: '多肉植物',
                    confidence: '92%',
                    diagnosis: '健康状态',
                    symptoms: '叶片饱满肥厚，颜色鲜艳，无病虫害迹象',
                    carePlan: [
                        '光照：喜充足阳光，夏季适当遮阴',
                        '浇水：干透浇透，宁干勿湿',
                        '温度：适宜10-30°C',
                        '施肥：生长季每月一次稀薄肥',
                        '注意：通风良好，避免闷热'
                    ]
                },
                {
                    name: '发财树',
                    confidence: '88%',
                    diagnosis: '轻微缺水',
                    symptoms: '部分叶片边缘轻微卷曲，土壤表面干燥',
                    carePlan: [
                        '光照：喜明亮散射光',
                        '浇水：待土壤干透后再浇',
                        '温度：适宜20-30°C',
                        '施肥：春秋季每月一次',
                        '注意：避免积水，防止烂根'
                    ]
                }
            ];

            const randomPlant = plants[Math.floor(Math.random() * plants.length)];

            // 显示识别结果 - 与问诊记录一致的格式
            resultContent.innerHTML = `
                <img src="${imageUrl}" alt="识别图片" class="detail-image" style="width: 100%; max-height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 16px;">
                <h3 class="detail-plant-name">${randomPlant.name}</h3>
                <p class="result-confidence" style="font-size: 14px; color: var(--primary-color); font-weight: 500; margin-bottom: 16px;">
                    识别置信度：${randomPlant.confidence}
                </p>
                
                <div class="detail-section">
                    <h4 class="detail-section-title">
                        <i class="fas fa-diagnoses"></i>
                        诊断结果
                    </h4>
                    <div class="detail-section-content">${randomPlant.diagnosis}</div>
                </div>
                
                <div class="detail-section">
                    <h4 class="detail-section-title">
                        <i class="fas fa-list-ul"></i>
                        症状描述
                    </h4>
                    <div class="detail-section-content">${randomPlant.symptoms}</div>
                </div>
                
                <div class="detail-section">
                    <h4 class="detail-section-title">
                        <i class="fas fa-leaf"></i>
                        养护方案
                    </h4>
                    <div class="detail-section-content" style="padding: 0; background: transparent;">
                        ${randomPlant.carePlan.map((item, index) => `
                            <div style="display: flex; align-items: flex-start; gap: 8px; padding: 8px 12px; background-color: var(--background-light); border-radius: 8px; margin-bottom: 8px;">
                                <span style="background-color: var(--primary-color); color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; flex-shrink: 0; margin-top: 2px;">${index + 1}</span>
                                <span style="font-size: 14px; color: var(--text-secondary); line-height: 1.5;">${item}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="result-actions" style="margin-top: 20px;">
                    <button class="btn-secondary" onclick="document.getElementById('photo-result-modal').classList.remove('active')">
                        取消
                    </button>
                    <button class="btn-primary" onclick="saveConsultRecordWithDetail('${imageUrl}', '${randomPlant.name}', '${randomPlant.diagnosis}', '${randomPlant.symptoms}', ${JSON.stringify(randomPlant.carePlan).replace(/"/g, '&quot;')})">
                        保存记录
                    </button>
                </div>
            `;
        }, 2000);
    }

    // 保存问诊记录（带详细信息）
    window.saveConsultRecordWithDetail = function(imageUrl, plantName, diagnosis, symptoms, carePlanJson) {
        const today = new Date();
        const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        
        // 解析养护方案
        let carePlan = [];
        try {
            carePlan = JSON.parse(carePlanJson.replace(/&quot;/g, '"'));
        } catch (e) {
            carePlan = carePlanJson;
        }
        
        const newRecord = {
            id: mockConsultRecords.length + 1,
            plantName: plantName,
            image: imageUrl,
            date: dateStr,
            status: 'healthy',
            statusText: '健康',
            preview: `${diagnosis}，建议继续保持当前养护方式...`,
            detail: {
                diagnosis: diagnosis,
                symptoms: symptoms,
                carePlan: carePlan
            }
        };

        mockConsultRecords.unshift(newRecord);
        renderConsultRecords(mockConsultRecords);
        photoResultModal.classList.remove('active');
    };

    // 原有的保存问诊记录函数（保持兼容性）
    window.saveConsultRecord = function(imageUrl, plantName) {
        const today = new Date();
        const dateStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
        
        const newRecord = {
            id: mockConsultRecords.length + 1,
            plantName: plantName,
            image: imageUrl,
            date: dateStr,
            status: 'healthy',
            statusText: '健康',
            preview: '新的问诊记录，植株状态良好，建议继续保持当前养护方式...',
            detail: {
                diagnosis: '健康状态',
                symptoms: '植株状态良好，生长正常',
                carePlan: [
                    '继续保持当前光照和浇水频率',
                    '定期检查叶片状态',
                    '注意通风和环境湿度'
                ]
            }
        };

        mockConsultRecords.unshift(newRecord);
        renderConsultRecords(mockConsultRecords);
        photoResultModal.classList.remove('active');
    };

    // 处理头像上传
    function handleAvatarUpload(file) {
        const imageUrl = URL.createObjectURL(file);
        document.getElementById('user-avatar').src = imageUrl;
    }

    // 启动应用
    init();
});
