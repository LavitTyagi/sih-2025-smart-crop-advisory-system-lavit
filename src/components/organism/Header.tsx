export const Header = () => {
    return (
        <>
            <!DOCTYPE html>

            <html class="light" lang="en"><head>
                <meta charset="utf-8"/>
                <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
                <title>Krishi Mitra - Language Selection</title>
                <!-- Google Fonts -->
                <link href="https://fonts.googleapis.com" rel="preconnect"/>
                <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
                <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;500;700&amp;family=Public+Sans:wght@400;500;700;800&amp;display=swap" rel="stylesheet"/>
                <!-- Material Symbols -->
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
                <!-- Tailwind CSS -->
                <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
                <!-- Tailwind Config -->
                <script id="tailwind-config">
                    tailwind.config = {
                    darkMode: "class",
                    theme: {
                    extend: {
                    colors: {
                    "primary": "#36e27e",
                    "background-light": "#f6f8f7",
                    "background-dark": "#112118",
                    "surface-light": "#ffffff",
                    "surface-dark": "#1c3024",
                },
                    fontFamily: {
                    "display": ["Public Sans", "Noto Sans", "sans-serif"],
                    "body": ["Noto Sans", "Public Sans", "sans-serif"],
                },
                    borderRadius: {"DEFAULT": "0.5rem", "lg": "1rem", "xl": "1.5rem", "2xl": "2rem", "full": "9999px"},
                },
                },
                }
                </script>
                <style>
                    body {
                    font-family: "Public Sans", "Noto Sans", sans-serif;
                }
                    .material-symbols-outlined {
                    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                    .icon-filled {
                    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
                }
                </style>
            </head>
            <body class="bg-background-light dark:bg-background-dark min-h-screen flex flex-col text-[#0e1b13] dark:text-[#e8f3ec]">
            <!-- TopNavBar -->
            <div class="w-full bg-surface-light dark:bg-surface-dark border-b border-[#e8f3ec] dark:border-[#2a4034]">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <header class="flex items-center justify-between h-16">
                        <!-- Logo & Brand -->
                        <div class="flex items-center gap-3">
                            <div class="size-8 text-primary flex items-center justify-center bg-primary/10 rounded-lg p-1">
                                <svg class="w-full h-full text-primary" fill="none" viewbox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_6_543)">
                                        <path d="M42.1739 20.1739L27.8261 5.82609C29.1366 7.13663 28.3989 10.1876 26.2002 13.7654C24.8538 15.9564 22.9595 18.3449 20.6522 20.6522C18.3449 22.9595 15.9564 24.8538 13.7654 26.2002C10.1876 28.3989 7.13663 29.1366 5.82609 27.8261L20.1739 42.1739C21.4845 43.4845 24.5355 42.7467 28.1133 40.548C30.3042 39.2016 32.6927 37.3073 35 35C37.3073 32.6927 39.2016 30.3042 40.548 28.1133C42.7467 24.5355 43.4845 21.4845 42.1739 20.1739Z" fill="currentColor"></path>
                                        <path clip-rule="evenodd" d="M7.24189 26.4066C7.31369 26.4411 7.64204 26.5637 8.52504 26.3738C9.59462 26.1438 11.0343 25.5311 12.7183 24.4963C14.7583 23.2426 17.0256 21.4503 19.238 19.238C21.4503 17.0256 23.2426 14.7583 24.4963 12.7183C25.5311 11.0343 26.1438 9.59463 26.3738 8.52504C26.5637 7.64204 26.4411 7.31369 26.4066 7.24189C26.345 7.21246 26.143 7.14535 25.6664 7.1918C24.9745 7.25925 23.9954 7.5498 22.7699 8.14278C20.3369 9.32007 17.3369 11.4915 14.4142 14.4142C11.4915 17.3369 9.32007 20.3369 8.14278 22.7699C7.5498 23.9954 7.25925 24.9745 7.1918 25.6664C7.14534 26.143 7.21246 26.345 7.24189 26.4066ZM29.9001 10.7285C29.4519 12.0322 28.7617 13.4172 27.9042 14.8126C26.465 17.1544 24.4686 19.6641 22.0664 22.0664C19.6641 24.4686 17.1544 26.465 14.8126 27.9042C13.4172 28.7617 12.0322 29.4519 10.7285 29.9001L21.5754 40.747C21.6001 40.7606 21.8995 40.931 22.8729 40.7217C23.9424 40.4916 25.3821 39.879 27.0661 38.8441C29.1062 37.5904 31.3734 35.7982 33.5858 33.5858C35.7982 31.3734 37.5904 29.1062 38.8441 27.0661C39.879 25.3821 40.4916 23.9425 40.7216 22.8729C40.931 21.8995 40.7606 21.6001 40.747 21.5754L29.9001 10.7285ZM29.2403 4.41187L43.5881 18.7597C44.9757 20.1473 44.9743 22.1235 44.6322 23.7139C44.2714 25.3919 43.4158 27.2666 42.252 29.1604C40.8128 31.5022 38.8165 34.012 36.4142 36.4142C34.012 38.8165 31.5022 40.8128 29.1604 42.252C27.2666 43.4158 25.3919 44.2714 23.7139 44.6322C22.1235 44.9743 20.1473 44.9757 18.7597 43.5881L4.41187 29.2403C3.29027 28.1187 3.08209 26.5973 3.21067 25.2783C3.34099 23.9415 3.8369 22.4852 4.54214 21.0277C5.96129 18.0948 8.43335 14.7382 11.5858 11.5858C14.7382 8.43335 18.0948 5.9613 21.0277 4.54214C22.4852 3.8369 23.9415 3.34099 25.2783 3.21067C26.5973 3.08209 28.1187 3.29028 29.2403 4.41187Z" fill="currentColor" fill-rule="evenodd"></path>
                                    </g>
                                    <defs>
                                        <clippath id="clip0_6_543"><rect fill="white" height="48" width="48"></rect></clippath>
                                    </defs>
                                </svg>
                            </div>
                            <h2 class="text-[#0e1b13] dark:text-white text-xl font-bold tracking-tight">Krishi Mitra</h2>
                        </div>
                        <!-- Help Button -->
                        <button class="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/20 text-[#0e1b13] dark:text-white hover:bg-primary/30 transition-colors font-semibold text-sm">
                            <span class="material-symbols-outlined icon-filled text-[20px]">help</span>
                            <span>Help</span>
                        </button>
                    </header>
                </div>
            </div>
            <!-- Main Content -->
            <main class="flex-grow flex flex-col items-center justify-start py-8 px-4 sm:px-6">
                <!-- Hero / Instructions -->
                <div class="max-w-3xl w-full text-center mb-10 mt-6 relative z-10">
                    <!-- Decorative background element -->
                    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-primary/5 dark:bg-primary/10 blur-3xl rounded-full -z-10 pointer-events-none"></div>
                    <h1 class="text-[#0e1b13] dark:text-white text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                        Welcome to Krishi Mitra
                    </h1>
                    <div class="inline-flex items-center gap-3 bg-white dark:bg-surface-dark px-5 py-3 rounded-full shadow-sm border border-[#e8f3ec] dark:border-[#2a4034] cursor-pointer hover:border-primary/50 transition-all group">
                        <span class="material-symbols-outlined text-primary text-2xl group-hover:scale-110 transition-transform">volume_up</span>
                        <p class="text-base md:text-lg text-[#0e1b13] dark:text-gray-200 font-medium">
                            Select your language to continue
                        </p>
                    </div>
                </div>
                <!-- Language Grid -->
                <div class="max-w-4xl w-full grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-12">
                    <!-- Card 1: English -->
                    <button class="relative group bg-surface-light dark:bg-surface-dark border-2 border-[#e8f3ec] dark:border-[#2a4034] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-40">
                        <span class="text-3xl font-bold text-[#0e1b13] dark:text-white group-hover:text-primary transition-colors">English</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">English</span>
                        <div class="absolute top-4 right-4 size-8 rounded-full bg-gray-100 dark:bg-background-dark flex items-center justify-center text-gray-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                            <span class="material-symbols-outlined text-[20px]">volume_up</span>
                        </div>
                    </button>
                    <!-- Card 2: Hindi (Selected State Example) -->
                    <button class="relative group bg-primary/10 dark:bg-primary/5 border-2 border-primary rounded-2xl p-6 flex flex-col items-center justify-center gap-3 shadow-md h-40 ring-2 ring-primary/20 dark:ring-primary/10">
                        <span class="text-4xl font-bold text-[#0e1b13] dark:text-white">हिंदी</span>
                        <span class="text-sm text-gray-600 dark:text-gray-300 font-medium">Hindi</span>
                        <!-- Checkmark indicating selection -->
                        <div class="absolute top-4 left-4 size-6 rounded-full bg-primary flex items-center justify-center text-[#0e1b13]">
                            <span class="material-symbols-outlined text-[16px] font-bold">check</span>
                        </div>
                        <div class="absolute top-4 right-4 size-8 rounded-full bg-primary/20 flex items-center justify-center text-primary-dark">
                            <span class="material-symbols-outlined text-[20px] icon-filled">volume_up</span>
                        </div>
                    </button>
                    <!-- Card 3: Punjabi -->
                    <button class="relative group bg-surface-light dark:bg-surface-dark border-2 border-[#e8f3ec] dark:border-[#2a4034] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-40">
                        <span class="text-4xl font-bold text-[#0e1b13] dark:text-white group-hover:text-primary transition-colors">ਪੰਜਾਬੀ</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">Punjabi</span>
                        <div class="absolute top-4 right-4 size-8 rounded-full bg-gray-100 dark:bg-background-dark flex items-center justify-center text-gray-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                            <span class="material-symbols-outlined text-[20px]">volume_up</span>
                        </div>
                    </button>
                    <!-- Card 4: Tamil -->
                    <button class="relative group bg-surface-light dark:bg-surface-dark border-2 border-[#e8f3ec] dark:border-[#2a4034] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-40">
                        <span class="text-4xl font-bold text-[#0e1b13] dark:text-white group-hover:text-primary transition-colors">தமிழ்</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">Tamil</span>
                        <div class="absolute top-4 right-4 size-8 rounded-full bg-gray-100 dark:bg-background-dark flex items-center justify-center text-gray-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                            <span class="material-symbols-outlined text-[20px]">volume_up</span>
                        </div>
                    </button>
                    <!-- Card 5: Telugu -->
                    <button class="relative group bg-surface-light dark:bg-surface-dark border-2 border-[#e8f3ec] dark:border-[#2a4034] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-40">
                        <span class="text-4xl font-bold text-[#0e1b13] dark:text-white group-hover:text-primary transition-colors">తెలుగు</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">Telugu</span>
                        <div class="absolute top-4 right-4 size-8 rounded-full bg-gray-100 dark:bg-background-dark flex items-center justify-center text-gray-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                            <span class="material-symbols-outlined text-[20px]">volume_up</span>
                        </div>
                    </button>
                    <!-- Card 6: Marathi -->
                    <button class="relative group bg-surface-light dark:bg-surface-dark border-2 border-[#e8f3ec] dark:border-[#2a4034] rounded-2xl p-6 flex flex-col items-center justify-center gap-3 hover:border-primary hover:shadow-lg hover:-translate-y-1 transition-all duration-200 h-40">
                        <span class="text-4xl font-bold text-[#0e1b13] dark:text-white group-hover:text-primary transition-colors">मराठी</span>
                        <span class="text-sm text-gray-500 dark:text-gray-400 font-medium">Marathi</span>
                        <div class="absolute top-4 right-4 size-8 rounded-full bg-gray-100 dark:bg-background-dark flex items-center justify-center text-gray-400 group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                            <span class="material-symbols-outlined text-[20px]">volume_up</span>
                        </div>
                    </button>
                </div>
                <!-- Action Button -->
                <div class="w-full max-w-sm px-4 pb-20 md:pb-8">
                    <button class="w-full h-14 bg-primary hover:bg-[#2fd172] text-[#0e1b13] text-lg font-bold rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                        <span>Continue in Hindi</span>
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </button>
                    <p class="text-center mt-4 text-sm text-gray-500 dark:text-gray-400">
                        You can change this later in settings
                    </p>
                </div>
            </main>
            <!-- Floating Action Button (Voice Assistant) -->
            <div class="fixed bottom-6 right-6 z-50">
                <button class="size-16 bg-[#112118] dark:bg-primary rounded-full shadow-xl flex items-center justify-center text-white dark:text-[#0e1b13] hover:scale-105 transition-transform group relative">
                    <span class="material-symbols-outlined text-3xl">mic</span>
                    <!-- Tooltip / Label for FAB -->
                    <span class="absolute right-full mr-4 bg-white dark:bg-surface-dark text-[#0e1b13] dark:text-white px-3 py-1.5 rounded-lg text-sm font-semibold shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Voice Assistant
            </span>
                    <!-- Pulse animation ring -->
                    <span class="absolute inline-flex h-full w-full rounded-full bg-current opacity-20 animate-ping"></span>
                </button>
            </div>
            </body></html>
        </>
    );
};
