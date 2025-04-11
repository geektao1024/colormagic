<template>
  <div class="min-h-screen bg-gradient-to-b from-[#111827] to-[#1F2937] text-white font-sans">
    <!-- Header -->
    <header class="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#111827]/70 border-b border-white/5">
      <div class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-12">
            <a href="#" class="flex items-center">
              <div class="relative">
                <span class="text-2xl font-extrabold">
                  <span class="text-white">Color</span>
                  <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Magic</span>
                </span>
                <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
              </div>
            </a>
            <nav class="hidden lg:flex space-x-8">
              <a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group">
                Home
                <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group">
                Explore
                <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group">
                Learn
                <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#" class="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group">
                Tools
                <span class="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] group-hover:w-full transition-all duration-300"></span>
              </a>
            </nav>
          </div>
          <div class="flex items-center gap-4">
            <button class="px-5 py-2 text-sm text-white/80 hover:text-white border border-white/10 rounded-full hover:border-white/30 transition-all duration-300 backdrop-blur-sm bg-white/5">
              Sign Up
            </button>
            <button class="px-5 py-2 text-sm text-[#111827] font-medium bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:translate-y-[-2px]">
              Login
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="pt-32 pb-20 px-6 relative overflow-hidden">
      <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#FF5F6D]/20 to-[#FFC371]/5 rounded-full blur-[120px] -z-10"></div>
      <div class="container mx-auto max-w-6xl relative">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <div class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-2">
              AI-Powered Color Solutions
            </div>
            <h1 class="text-5xl md:text-6xl font-bold leading-tight">
              <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Professional AI</span> 
              <br>Palette Studio
            </h1>
            <p class="text-white/70 text-lg max-w-lg leading-relaxed">
              Advanced color theory based AI for designers. Create harmonious color palettes with professional-grade tools and real-time application previews.
            </p>
            <div class="flex flex-wrap gap-5 pt-4">
              <button class="group relative px-8 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full text-white font-medium overflow-hidden">
                <span class="relative z-10">Create Palette</span>
                <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
              <button class="px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300">
                Explore Palettes
              </button>
            </div>
          </div>
          <div class="relative">
            <div class="absolute -top-20 -right-20 w-64 h-64 bg-[#FF5F6D]/20 rounded-full blur-[80px]"></div>
            <div class="absolute -bottom-10 -left-10 w-48 h-48 bg-[#FFC371]/20 rounded-full blur-[60px]"></div>
            
            <div class="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 shadow-2xl shadow-orange-500/5 transform hover:scale-[1.02] transition-all duration-500">
              <div class="grid grid-cols-5 gap-3 mb-6">
                <div class="h-20 rounded-lg bg-[#FF5F6D] shadow-lg shadow-[#FF5F6D]/20 transform hover:scale-105 transition-transform duration-300"></div>
                <div class="h-20 rounded-lg bg-[#FF8C61] shadow-lg shadow-[#FF8C61]/20 transform hover:scale-105 transition-transform duration-300"></div>
                <div class="h-20 rounded-lg bg-[#FFA75F] shadow-lg shadow-[#FFA75F]/20 transform hover:scale-105 transition-transform duration-300"></div>
                <div class="h-20 rounded-lg bg-[#FFC371] shadow-lg shadow-[#FFC371]/20 transform hover:scale-105 transition-transform duration-300"></div>
                <div class="h-20 rounded-lg bg-[#FFE17D] shadow-lg shadow-[#FFE17D]/20 transform hover:scale-105 transition-transform duration-300"></div>
              </div>
              <div class="h-10 w-full bg-white/5 backdrop-blur-sm rounded-lg mb-6 border border-white/10"></div>
              <div class="flex items-center justify-between">
                <div class="flex space-x-3">
                  <div class="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <div class="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/10 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16" />
                    </svg>
                  </div>
                </div>
                <button class="px-5 py-2 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-lg text-xs font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 transform hover:translate-y-[-2px]">
                  EXPORT
                </button>
              </div>
              
              <!-- Floating elements -->
              <div class="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-[#FF5F6D] to-[#FF8C61] rounded-xl rotate-12 shadow-lg animate-float-slow"></div>
              <div class="absolute -bottom-8 -left-4 w-16 h-16 bg-gradient-to-br from-[#FFA75F] to-[#FFC371] rounded-xl -rotate-12 shadow-lg animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Designer-grade Tools Section -->
    <section class="py-20 px-6 relative">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-[#FF5F6D]/10 to-[#FFC371]/10 rounded-full blur-[100px] -z-10"></div>
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
            Powerful Features
          </span>
          <h2 class="text-4xl font-bold">
            Designer-grade <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Color Tools</span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Tool Card 1 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF5F6D]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF5F6D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF5F6D]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#FF5F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FF5F6D] transition-colors duration-300">AI Color Harmonization</h3>
              <p class="text-white/60 leading-relaxed">
                Professional color theory paired with AI to generate balanced, accessible, and visually pleasing palettes that meet professional design standards.
              </p>
            </div>
          </div>

          <!-- Tool Card 2 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF8C61]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF8C61]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-[#FF8C61]/20 to-[#FF8C61]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF8C61]/20 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#FF8C61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FF8C61] transition-colors duration-300">Context-aware Palettes</h3>
              <p class="text-white/60 leading-relaxed">
                Generate palettes tailored for specific industries, emotions, and brand goals, ensuring optimal color performance in context.
              </p>
            </div>
          </div>

          <!-- Tool Card 3 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFA75F]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFA75F]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-[#FFA75F]/20 to-[#FFA75F]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FFA75F]/20 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#FFA75F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FFA75F] transition-colors duration-300">Real-time Design Preview</h3>
              <p class="text-white/60 leading-relaxed">
                Instantly see how your palette performs in various UI components to ensure visual harmony and usability.
              </p>
            </div>
          </div>

          <!-- Tool Card 4 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFC371]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFC371]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-[#FFC371]/20 to-[#FFC371]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FFC371]/20 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#FFC371]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FFC371] transition-colors duration-300">Accessibility Optimization</h3>
              <p class="text-white/60 leading-relaxed">
                Compliance with WCAG standards is built-in. Generate color combinations that are both beautiful and accessible.
              </p>
            </div>
          </div>

          <!-- Tool Card 5 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFE17D]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFE17D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-[#FFE17D]/20 to-[#FFE17D]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FFE17D]/20 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#FFE17D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FFE17D] transition-colors duration-300">Multiple Export Formats</h3>
              <p class="text-white/60 leading-relaxed">
                Export your palettes in various formats including CSS variables, PNG images, and PDF documents for seamless workflow integration.
              </p>
            </div>
          </div>

          <!-- Tool Card 6 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF5F6D]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF5F6D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative">
              <div class="w-14 h-14 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF5F6D]/30 rounded-2xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7 text-[#FF5F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FF5F6D] transition-colors duration-300">Complete Color Management</h3>
              <p class="text-white/60 leading-relaxed">
                Organize, tag, and share professional palettes with detailed notes and project associations to enhance team collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Color Toolkit Section -->
    <section class="py-20 px-6 relative">
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
            Advanced Solutions
          </span>
          <h2 class="text-4xl font-bold">
            Professional <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Color Toolkit</span>
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <!-- Tool 1 -->
          <div class="group relative">
            <div class="h-[280px] bg-gradient-to-br from-[#FF5F6D] to-[#FF8C61] rounded-2xl mb-6 overflow-hidden relative transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#FF5F6D]/20 group-hover:scale-[1.02]">
              <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-20250328-201237-Fdz2Rrga1mTZIt3mwQoE8MYqulDDWg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-[#FF5F6D]/80 to-[#FF8C61]/90"></div>
              <div class="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">AI Palette Generator</h3>
                <p class="text-white/80 text-center max-w-md">
                  Create professional color schemes from text descriptions using advanced AI
                </p>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full"></div>
              <div class="absolute bottom-10 -left-10 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full"></div>
            </div>
            <p class="text-white/70 mb-5 px-2">
              Enter keywords or descriptions and let AI analyze and generate professional design-standard color palettes.
            </p>
            <button class="ml-2 px-6 py-3 bg-gradient-to-r from-[#FF5F6D] to-[#FF8C61] rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#FF5F6D]/20 transition-all duration-300 transform hover:translate-y-[-2px]">
              Get Started
            </button>
          </div>

          <!-- Tool 2 -->
          <div class="group relative">
            <div class="h-[280px] bg-gradient-to-br from-[#FFA75F] to-[#FFC371] rounded-2xl mb-6 overflow-hidden relative transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#FFC371]/20 group-hover:scale-[1.02]">
              <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-20250328-201237-Fdz2Rrga1mTZIt3mwQoE8MYqulDDWg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-[#FFA75F]/80 to-[#FFC371]/90"></div>
              <div class="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Image Color Extractor</h3>
                <p class="text-white/80 text-center max-w-md">
                  Extract perfect color palettes from any image with AI precision
                </p>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-6 -left-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full"></div>
              <div class="absolute bottom-10 -right-10 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full"></div>
            </div>
            <p class="text-white/70 mb-5 px-2">
              Upload images and extract key colors to create professional palettes that match visual styles.
            </p>
            <button class="ml-2 px-6 py-3 bg-gradient-to-r from-[#FFA75F] to-[#FFC371] rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#FFC371]/20 transition-all duration-300 transform hover:translate-y-[-2px]">
              Get Started
            </button>
          </div>

          <!-- Tool 3 -->
          <div class="group relative">
            <div class="h-[280px] bg-gradient-to-br from-[#4CAF50] to-[#8BC34A] rounded-2xl mb-6 overflow-hidden relative transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#4CAF50]/20 group-hover:scale-[1.02]">
              <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-20250328-201237-Fdz2Rrga1mTZIt3mwQoE8MYqulDDWg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/80 to-[#8BC34A]/90"></div>
              <div class="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Contrast Checker</h3>
                <p class="text-white/80 text-center max-w-md">
                  Ensure your designs meet accessibility standards with precision
                </p>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-6 -right-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full"></div>
              <div class="absolute bottom-10 -left-10 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full"></div>
            </div>
            <p class="text-white/70 mb-5 px-2">
              Analyze color combinations for WCAG accessibility compliance and get optimization recommendations.
            </p>
            <button class="ml-2 px-6 py-3 bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#4CAF50]/20 transition-all duration-300 transform hover:translate-y-[-2px]">
              Get Started
            </button>
          </div>

          <!-- Tool 4 -->
          <div class="group relative">
            <div class="h-[280px] bg-gradient-to-br from-[#2196F3] to-[#03A9F4] rounded-2xl mb-6 overflow-hidden relative transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#2196F3]/20 group-hover:scale-[1.02]">
              <div class="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screenshot-20250328-201237-Fdz2Rrga1mTZIt3mwQoE8MYqulDDWg.png')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
              <div class="absolute inset-0 bg-gradient-to-br from-[#2196F3]/80 to-[#03A9F4]/90"></div>
              <div class="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div class="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mb-4 border border-white/20">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-white mb-2">Random Color Generator</h3>
                <p class="text-white/80 text-center max-w-md">
                  Discover unexpected color combinations for creative inspiration
                </p>
              </div>
              
              <!-- Decorative elements -->
              <div class="absolute -top-6 -left-6 w-24 h-24 bg-white/10 backdrop-blur-md rounded-full"></div>
              <div class="absolute bottom-10 -right-10 w-32 h-32 bg-white/5 backdrop-blur-md rounded-full"></div>
            </div>
            <p class="text-white/70 mb-5 px-2">
              Generate harmonious random color combinations for fresh creative inspiration and design breakthroughs.
            </p>
            <button class="ml-2 px-6 py-3 bg-gradient-to-r from-[#2196F3] to-[#03A9F4] rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-[#2196F3]/20 transition-all duration-300 transform hover:translate-y-[-2px]">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Perfect for Design Professionals Section -->
    <section class="py-20 px-6 relative bg-gradient-to-b from-[#111827]/0 to-[#111827]/80">
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-[#FF5F6D]/5 to-[#FFC371]/5 rounded-full blur-[100px] -z-10"></div>
      
      <div class="container mx-auto max-w-6xl">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
            Tailored Solutions
          </span>
          <h2 class="text-4xl font-bold">
            <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Perfect for</span> Design Professionals
          </h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Persona 1 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF5F6D]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF5F6D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-12 h-12 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF5F6D]/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#FF5F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FF5F6D] transition-colors duration-300">Brand Designers</h3>
            <p class="text-white/60 leading-relaxed">
              Develop comprehensive brand identity systems with consistent color languages, ensuring cohesive visual experiences.
            </p>
          </div>

          <!-- Persona 2 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF8C61]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF8C61]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-12 h-12 bg-gradient-to-br from-[#FF8C61]/20 to-[#FF8C61]/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF8C61]/20 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#FF8C61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FF8C61] transition-colors duration-300">UI/UX Professionals</h3>
            <p class="text-white/60 leading-relaxed">
              Create accessible design systems with complete component color palettes that maintain consistency across platforms.
            </p>
          </div>

          <!-- Persona 3 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFA75F]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFA75F]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-12 h-12 bg-gradient-to-br from-[#FFA75F]/20 to-[#FFA75F]/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FFA75F]/20 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#FFA75F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FFA75F] transition-colors duration-300">Art Directors</h3>
            <p class="text-white/60 leading-relaxed">
              Establish project color guidelines with intentional psychological direction to enhance visual storytelling.
            </p>
          </div>

          <!-- Persona 4 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFC371]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFC371]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-12 h-12 bg-gradient-to-br from-[#FFC371]/20 to-[#FFC371]/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FFC371]/20 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#FFC371]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FFC371] transition-colors duration-300">Digital Product Teams</h3>
            <p class="text-white/60 leading-relaxed">
              Get shared color resources with development-ready implementation to streamline design to development handoff.
            </p>
          </div>

          <!-- Persona 5 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFE17D]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FFE17D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-12 h-12 bg-gradient-to-br from-[#FFE17D]/20 to-[#FFE17D]/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FFE17D]/20 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#FFE17D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FFE17D] transition-colors duration-300">Design Educators</h3>
            <p class="text-white/60 leading-relaxed">
              Demonstrate professional color theory principles through interactive examples to enhance classroom learning.
            </p>
          </div>

          <!-- Persona 6 -->
          <div class="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF5F6D]/50 transition-all duration-500 overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#FF5F6D]/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="w-12 h-12 bg-gradient-to-br from-[#FF5F6D]/20 to-[#FF5F6D]/30 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-[#FF5F6D]/20 transition-all duration-500">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#FF5F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3 group-hover:text-[#FF5F6D] transition-colors duration-300">Independent Creatives</h3>
            <p class="text-white/60 leading-relaxed">
              Access professional-grade color schemes without extensive color theory training to elevate client projects.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 px-6 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-[#FF5F6D]/20 to-[#FFC371]/20 blur-3xl opacity-50"></div>
      <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      <div class="container mx-auto max-w-4xl relative">
        <div class="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10 shadow-2xl shadow-orange-500/5 text-center">
          <h2 class="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
            Start Using Color Magic Today
          </h2>
          <p class="text-xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of professional designers saving time and improving design quality with advanced AI color tools.
          </p>
          <div class="flex flex-wrap justify-center gap-6">
            <button class="group relative px-8 py-4 bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full text-white font-medium overflow-hidden shadow-lg shadow-orange-500/20 transform hover:translate-y-[-2px] transition-all duration-300">
              <span class="relative z-10">Try For Free</span>
              <span class="absolute inset-0 bg-gradient-to-r from-[#FFC371] to-[#FF5F6D] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
            <button class="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-white/10 transition-all duration-300 transform hover:translate-y-[-2px]">
              Explore Examples
            </button>
          </div>
          
          <!-- Decorative elements -->
          <div class="absolute -top-10 -right-10 w-40 h-40 bg-[#FFC371]/20 rounded-full blur-[60px]"></div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-[#FF5F6D]/20 rounded-full blur-[60px]"></div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 px-6">
      <div class="container mx-auto max-w-4xl">
        <div class="text-center mb-16">
          <span class="inline-block px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 text-sm text-white/70 mb-4">
            Common Questions
          </span>
          <h2 class="text-4xl font-bold">
            Frequently Asked <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Questions</span>
          </h2>
        </div>
        
        <div class="space-y-6">
          <!-- FAQ Item 1 -->
          <div class="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF5F6D]/50 transition-all duration-500 overflow-hidden">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-semibold group-hover:text-[#FF5F6D] transition-colors duration-300">How is ColorMagic different from other palette generators?</h3>
              <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#FF5F6D]/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-[#FF5F6D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p class="text-white/60 mt-4 leading-relaxed">
              Unlike basic generators using fixed rules, ColorMagic leverages AI and color theory principles to create palettes with professional-grade preview capabilities.
            </p>
          </div>

          <!-- FAQ Item 2 -->
          <div class="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FF8C61]/50 transition-all duration-500 overflow-hidden">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-semibold group-hover:text-[#FF8C61] transition-colors duration-300">Do I need a professional design background to use ColorMagic?</h3>
              <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#FF8C61]/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-[#FF8C61]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p class="text-white/60 mt-4 leading-relaxed">
              No, while ColorMagic offers advanced features for professionals, its intuitive interface and AI assistance allow anyone to create professional-grade palettes without extensive color theory knowledge.
            </p>
          </div>

          <!-- FAQ Item 3 -->
          <div class="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFA75F]/50 transition-all duration-500 overflow-hidden">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-semibold group-hover:text-[#FFA75F] transition-colors duration-300">Can I use ColorMagic palettes for commercial projects?</h3>
              <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#FFA75F]/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-[#FFA75F]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p class="text-white/60 mt-4 leading-relaxed">
              Yes, all palettes generated through ColorMagic can be used for both personal and commercial projects without attribution or licensing issues.
            </p>
          </div>

          <!-- FAQ Item 4 -->
          <div class="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFC371]/50 transition-all duration-500 overflow-hidden">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-semibold group-hover:text-[#FFC371] transition-colors duration-300">How does ColorMagic ensure accessibility compliance?</h3>
              <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#FFC371]/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-[#FFC371]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p class="text-white/60 mt-4 leading-relaxed">
              Our system automatically analyzes color contrast and provides recommendations based on WCAG guidelines to ensure designs are both beautiful and accessibility compliant.
            </p>
          </div>

          <!-- FAQ Item 5 -->
          <div class="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10 hover:border-[#FFE17D]/50 transition-all duration-500 overflow-hidden">
            <div class="flex justify-between items-start">
              <h3 class="text-xl font-semibold group-hover:text-[#FFE17D] transition-colors duration-300">Can I integrate ColorMagic with other design tools?</h3>
              <div class="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#FFE17D]/20 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70 group-hover:text-[#FFE17D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
            <p class="text-white/60 mt-4 leading-relaxed">
              Yes, ColorMagic supports integration with many popular design tools and can seamlessly integrate with your existing design tools and development workflows.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-16 px-6 bg-gradient-to-b from-[#111827] to-[#1F2937] border-t border-white/5">
      <div class="container mx-auto max-w-6xl">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div class="col-span-1 md:col-span-1">
            <a href="#" class="inline-block mb-6">
              <div class="relative">
                <span class="text-2xl font-extrabold">
                  <span class="text-white">Color</span>
                  <span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Magic</span>
                </span>
                <div class="absolute -bottom-1 left-0 w-full h-[2px] bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] rounded-full"></div>
              </div>
            </a>
            <p class="text-white/60 mb-6">Professional AI color tools for designers</p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="#" class="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-white/70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 class="text-sm font-semibold uppercase text-white/70 mb-6">Product</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Examples</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Testimonials</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-semibold uppercase text-white/70 mb-6">Resources</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Tutorials</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Support</a></li>
            </ul>
          </div>
          
          <div>
            <h4 class="text-sm font-semibold uppercase text-white/70 mb-6">Company</h4>
            <ul class="space-y-4">
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Contact</a></li>
              <li><a href="#" class="text-white/60 hover:text-white transition-colors duration-300">Privacy</a></li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p class="text-white/40 text-sm">© 2025 ColorMagic. All rights reserved.</p>
          <div class="flex space-x-6 mt-6 md:mt-0">
            <a href="#" class="text-white/40 hover:text-white/70 text-sm transition-colors duration-300">Terms</a>
            <a href="#" class="text-white/40 hover:text-white/70 text-sm transition-colors duration-300">Privacy</a>
            <a href="#" class="text-white/40 hover:text-white/70 text-sm transition-colors duration-300">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// You can add any necessary Vue logic here
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  // Any initialization code can go here
  console.log('ColorMagic landing page mounted')
})
</script>

<style>
/* Additional custom styles can be added here */
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

/* Custom animations */
@keyframes float {
  0% { transform: translateY(0px) rotate(-12deg); }
  50% { transform: translateY(-10px) rotate(-8deg); }
  100% { transform: translateY(0px) rotate(-12deg); }
}

@keyframes float-slow {
  0% { transform: translateY(0px) rotate(12deg); }
  50% { transform: translateY(-15px) rotate(15deg); }
  100% { transform: translateY(0px) rotate(12deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 8s ease-in-out infinite;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 95, 109, 0.5);
}

/* Font smoothing */
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>