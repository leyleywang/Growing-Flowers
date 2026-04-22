document.addEventListener('DOMContentLoaded', function() {
    // 模拟数据
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
                    user: '花友小明',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20boy%20avatar%20with%20plants%2C%20cartoon%20style&image_size=square',
                    text: '养得真好！我的绿萝总是黄叶'
                },
                {
                    user: '花友花花',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20girl%20avatar%20with%20succulents%2C%20cartoon%20style&image_size=square',
                    text: '学习了！回去试试'
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
                    user: '多肉达人',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20cactus%2C%20cartoon%20style&image_size=square',
                    text: '第一盆是桃蛋，确实是贵货！赚了'
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
                    user: '绿植达人',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20gardening%20tools%2C%20cartoon%20style&image_size=square',
                    text: '可能是烂根了，建议脱盆检查根系'
                },
                {
                    user: '花友小李',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20indoor%20plants%2C%20cartoon%20style&image_size=square',
                    text: '我之前也遇到过，通风不好也会这样'
                },
                {
                    user: '园艺爱好者',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20garden%20flowers%2C%20cartoon%20style&image_size=square',
                    text: '少浇水，多晒太阳试试'
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
                    user: '兰花爱好者',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20orchids%2C%20cartoon%20style&image_size=square',
                    text: '收藏了！我的蝴蝶兰总是养不好'
                },
                {
                    user: '新手花友',
                    avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20avatar%20with%20first%20plant%2C%20cartoon%20style&image_size=square',
                    text: '太详细了，谢谢分享！'
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
            type: 'water',
            urgent: true
        },
        {
            id: 2,
            plantName: '多肉植物',
            task: '浇水',
            time: '明天 10:00',
            type: 'water',
            urgent: false
        },
        {
            id: 3,
            plantName: '发财树',
            task: '施肥',
            time: '后天 15:00',
            type: 'fertilizer',
            urgent: false
        },
        {
            id: 4,
            plantName: '蝴蝶兰',
            task: '浇水',
            time: '大后天 09:00',
            type: 'water',
            urgent: false
        }
    ];

    // 当前选中的笔记ID，用于评论功能
    let currentNoteId = null;
    let currentConsultId = null;

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

    // 按钮元素
    const takePhotoBtn = document.getElementById('take-photo-btn');
    const photoInput = document.getElementById('photo-input');
    const avatarEditBtn = document.getElementById('avatar-edit-btn');
    const avatarInput = document.getElementById('avatar-input');
    const editUsernameBtn = document.getElementById('edit-username-btn');
    const submitCommentBtn = document.getElementById('submit-comment-btn');
    const saveUsernameBtn = document.getElementById('save-username-btn');
    const cancelEditUsernameBtn = document.getElementById('cancel-edit-username-btn');

    // 关闭模态框按钮
    const closeCommentModal = document.getElementById('close-comment-modal');
    const closeConsultDetailModal = document.getElementById('close-consult-detail-modal');
    const closePhotoResultModal = document.getElementById('close-photo-result-modal');
    const closeEditUsernameModal = document.getElementById('close-edit-username-modal');

    // 初始化
    function init() {
        renderNotes(mockNotes);
        renderConsultRecords(mockConsultRecords);
        renderReminders(mockReminders);
        setupEventListeners();
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
                            ${note.images.map(img => `
                                <img src="${img}" alt="笔记图片" class="note-image">
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
                            <span>${note.comments.length}</span>
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
            return;
        }

        reminders.forEach(reminder => {
            const reminderItem = document.createElement('div');
            reminderItem.className = `reminder-item ${reminder.urgent ? 'urgent' : ''} ${reminder.type === 'fertilizer' ? 'fertilizer' : ''}`;

            reminderItem.innerHTML = `
                <div class="reminder-info">
                    <div class="reminder-plant">${reminder.plantName}</div>
                    <div class="reminder-task">${reminder.task}</div>
                </div>
                <div class="reminder-time">${reminder.time}</div>
            `;

            remindersList.appendChild(reminderItem);
        });
    }

    // 渲染评论列表
    function renderComments(comments) {
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

            commentItem.innerHTML = `
                <img src="${comment.avatar}" alt="${comment.user}" class="comment-avatar">
                <div class="comment-content">
                    <div class="comment-username">${comment.user}</div>
                    <div class="comment-text">${comment.text}</div>
                </div>
            `;

            commentsList.appendChild(commentItem);
        });
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

        // 拍照按钮
        takePhotoBtn.addEventListener('click', function() {
            photoInput.click();
        });

        // 拍照输入变化
        photoInput.addEventListener('change', function(e) {
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

        // 提交评论
        submitCommentBtn.addEventListener('click', function() {
            const commentText = document.getElementById('comment-input').value.trim();
            if (commentText && currentNoteId) {
                addComment(currentNoteId, commentText);
                document.getElementById('comment-input').value = '';
            }
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

        // 点击模态框外部关闭
        [commentModal, consultDetailModal, photoResultModal, editUsernameModal].forEach(modal => {
            modal.addEventListener('click', function(e) {
                if (e.target === this) {
                    this.classList.remove('active');
                }
            });
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
            
            // 更新UI
            const favoriteBtn = document.querySelector(`.favorite-btn[data-id="${noteId}"]`);
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

    // 打开评论模态框
    function openCommentModal(noteId) {
        currentNoteId = noteId;
        const note = mockNotes.find(n => n.id === noteId);
        if (note) {
            renderComments(note.comments);
            commentModal.classList.add('active');
        }
    }

    // 添加评论
    function addComment(noteId, text) {
        const note = mockNotes.find(n => n.id === noteId);
        if (note) {
            const newComment = {
                user: '花友小明',
                avatar: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=cute%20boy%20avatar%20with%20plants%2C%20cartoon%20style&image_size=square',
                text: text
            };
            note.comments.push(newComment);
            renderComments(note.comments);

            // 更新笔记卡片上的评论数
            const commentBtn = document.querySelector(`.comment-btn[data-id="${noteId}"]`);
            const countSpan = commentBtn.querySelector('span');
            countSpan.textContent = note.comments.length;
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

            // 显示识别结果
            resultContent.innerHTML = `
                <img src="${imageUrl}" alt="识别图片" class="result-image">
                <div class="result-info">
                    <h3 class="result-plant-name">${randomPlant.name}</h3>
                    <p class="result-confidence">识别置信度：${randomPlant.confidence}</p>
                </div>
                <div class="result-care-plan">
                    <h4 class="care-plan-title">
                        <i class="fas fa-leaf"></i>
                        养护方案
                    </h4>
                    ${randomPlant.carePlan.map(item => `
                        <div class="care-plan-item">
                            <i class="fas fa-check-circle"></i>
                            <span class="care-plan-item-text">${item}</span>
                        </div>
                    `).join('')}
                </div>
                <div class="result-actions">
                    <button class="btn-secondary" onclick="document.getElementById('photo-result-modal').classList.remove('active')">
                        取消
                    </button>
                    <button class="btn-primary" onclick="saveConsultRecord('${imageUrl}', '${randomPlant.name}')">
                        保存记录
                    </button>
                </div>
            `;
        }, 2000);
    }

    // 保存问诊记录到列表
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
