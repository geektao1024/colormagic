export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      home: {
        title: 'Generate your ideal color palette',
        seoTitle: 'ColorMagic - AI Color Palette Generator',
        seoDescription: 'ColorMagic is a color palette generator with AI. Enter any keyword and generate a matching color palette.',
        exampleLabel: 'Try an example:',
        seo: {
          title: "Color Magic Studio: Professional AI Color System Generator",
          description: "Color Magic transforms design workflows with AI-powered professional color systems. Beyond basic generators, ColorMagic offers context-aware palettes with real-time design previews.",
          ogTitle: "Color Magic Studio: Professional AI Color System Generator | ColorMagic",
          ogDescription: "Create professional color systems with AI technology that understands color theory principles and design contexts."
        },
        hero: {
          professional: "Professional AI",
          studio: " Palette Studio",
          description: "Advanced color theory based AI for designers. Create harmonious color palettes with professional-grade tools and real-time application previews.",
          createButton: "Create Palette",
          exploreButton: "Explore Palettes"
        },
        features: {
          title: "Designer-grade ",
          titleHighlight: "Color Tools",
          feature1: {
            title: "AI Color Harmonization",
            description: "Professional color theory applied with AI algorithms to generate harmonious, balanced palettes that meet professional design standards."
          },
          feature2: {
            title: "Context-aware Palettes",
            description: "Generate palettes tailored for specific design applications (web, print, UI, branding) ensuring optimal color performance in context."
          },
          feature3: {
            title: "Real-time Design Preview",
            description: "Instantly see how your palette performs in actual design layouts to evaluate color harmonies and usability."
          },
          feature4: {
            title: "Accessibility Optimization",
            description: "Analyze color contrast and get WCAG compliance suggestions to ensure designs are both beautiful and accessible."
          },
          feature5: {
            title: "Multiple Export Formats",
            description: "Export your palettes in various formats including CSS variables, PNG images, and PDF documents for seamless workflow integration."
          },
          feature6: {
            title: "Complete Color Management",
            description: "Organize, tag, and share professional palettes with detailed notes and project associations to enhance team collaboration."
          }
        },
        tools: {
          title: "Professional ",
          titleHighlight: "Color Toolkit",
          startButton: "Get Started",
          tool1: {
            title: "AI Palette Generator",
            description: "Enter keywords or descriptions and let AI analyze and generate professional design-standard color palettes."
          },
          tool2: {
            title: "Image Color Extractor",
            description: "Upload images and extract key colors to create professional palettes that match visual styles."
          },
          tool3: {
            title: "Contrast Checker",
            description: "Analyze color combinations for WCAG accessibility compliance and get optimization recommendations."
          },
          tool4: {
            title: "Random Color Generator",
            description: "Generate harmonious random color combinations for fresh creative inspiration and design breakthroughs."
          }
        },
        useCases: {
          titleHighlight: "Perfect for",
          title: " Design Professionals",
          case1: {
            title: "Brand Designers",
            description: "Develop comprehensive brand identity systems with consistent color hierarchies ensuring unified brand recognition."
          },
          case2: {
            title: "UI/UX Professionals",
            description: "Create accessible design systems with complete component color states that meet usability standards."
          },
          case3: {
            title: "Art Directors",
            description: "Establish project color guidelines with contextual application examples to maintain team output consistency."
          },
          case4: {
            title: "Digital Product Teams",
            description: "Build shared color resources with development-ready implementation to streamline design-to-development handoff."
          },
          case5: {
            title: "Design Educators",
            description: "Demonstrate professional color theory principles through interactive examples to help students understand design perception."
          },
          case6: {
            title: "Independent Creatives",
            description: "Access professional-grade color schemes without extensive color theory training to elevate client projects."
          }
        },
        cta: {
          title: "Start Using Color Magic Today",
          description: "Join thousands of professional designers saving time and improving design quality with advanced AI color tools.",
          tryButton: "Try For Free",
          exploreButton: "Explore Examples"
        },
        faq: {
          title: "Frequently Asked Questions",
          question1: "How is ColorMagic different from other palette generators?",
          answer1: "Unlike basic generators using fixed rules, ColorMagic applies advanced AI and color theory principles, considers design context, and offers professional-grade palettes with real-time preview capabilities.",
          question2: "Do I need a professional design background to use ColorMagic?",
          answer2: "No. While ColorMagic offers advanced features for professionals, its intuitive interface and AI assistance allow anyone to create professional-grade palettes without extensive color theory knowledge.",
          question3: "Can I use ColorMagic palettes for commercial projects?",
          answer3: "Yes, all palettes generated through ColorMagic can be used for both personal and commercial projects without attribution or additional licensing.",
          question4: "How does ColorMagic ensure accessibility compliance?",
          answer4: "Our system automatically analyzes color contrast and provides recommendations based on WCAG guidelines to ensure designs are both beautiful and accessibility-compliant.",
          question5: "Can I integrate ColorMagic with other design tools?",
          answer5: "Yes, ColorMagic supports multiple export formats (CSS, PNG, PDF) that seamlessly integrate with mainstream design tools and development workflows."
        },
        banner: {
          palette: {
            title: 'Create Perfect',
            titleHtml: 'Create Perfect<span class="bg-gradient-to-r from-[#FF5F6D] to-[#FFC371] bg-clip-text text-transparent">Color Schemes</span>',
            description: 'Enter keywords or upload images and AI will generate professional-grade harmonious color schemes for all your design needs.',
            buttonText: 'Create Palette'
          },
          random: {
            title: 'Random Colors',
            titleHtml: 'Discover Perfect<span class="bg-gradient-to-r from-[#2196F3] to-[#03A9F4] bg-clip-text text-transparent">Random Colors</span>',
            description: 'Generate random color combinations with a single click to break creative blocks and find inspiration effortlessly.',
            buttonText: 'Explore Random Colors'
          },
          image: {
            title: 'Image Extraction',
            titleHtml: 'Extract Colors<span class="bg-gradient-to-r from-[#4CAF50] to-[#8BC34A] bg-clip-text text-transparent">From Images</span>',
            description: 'Upload any image and AI will automatically analyze and extract key colors to create the perfect color scheme.',
            buttonText: 'Upload Image'
          },
          contrast: {
            title: 'Contrast Check',
            titleHtml: 'Ensure Color<span class="bg-gradient-to-r from-[#9C27B0] to-[#673AB7] bg-clip-text text-transparent">Accessibility</span>',
            description: 'Check if your color combinations comply with WCAG accessibility standards to ensure designs that are both beautiful and practical.',
            buttonText: 'Check Contrast'
          }
        },
        aiColorTools: 'AI Color Tools',
        viewAll: 'View All',
        featuredPalettes: 'Featured Palettes',
        viewMore: 'View More',
        startCreating: 'Start Creating',
        startExtracting: 'Extract Colors',
        startChecking: 'Check Contrast',
        colorCopied: 'Color Copied',
        paletteCopied: 'Palette Copied',
        addedToFavorites: 'Added to Favorites',
        removedFromFavorites: 'Removed from Favorites',
        recentActivity: 'Recent Activity',
        createdAt: 'Created at',
        createMorePalettes: 'Create More Palettes',
        noPalettes: {
          title: 'No Palettes Created Yet',
          description: 'Start using our AI tools to create and manage your color palettes, and they will appear here.'
        },
        createFirstPalette: 'Create Your First Palette',
        palettes: {
          sunset: 'Sunset Gradient',
          ocean: 'Ocean Fresh',
          violet: 'Violet Dream'
        },
        tryNow: 'Try Now'
      },
      recent: {
        seoTitle: 'Recent - ColorMagic - AI Color Palette Generator',
        topLabel: 'Recents:',
        noneFound: 'No recents.'
      },
      generate: {
        placeholder: 'Enter keywords for image or mood of color',
        label: 'Create Palette'
      },
      bannerLabel: 'Donate to keep ColorMagic free >>',
      nav: {
        home: 'Home',
        recent: 'Recent',
        liked: 'Liked',
        randomColor: 'Random Color Generator',
        colorPaletteGenrator: 'Color Palette Generator',
        contact: 'Contact',
        terms: 'Terms',
        privacy: 'Privacy',
        suggestIdea: 'Suggest an Idea',
        free: 'ColorMagic is now 100% free',
        explore: 'Explore',
        exploreTags: 'Explore Tags',
        imageColorPicker: 'Image Color Picker',
        tools: 'Tools',
        website: 'Website',
        freeColorTools: 'Free Color Tools',
        more: 'More',
        news: 'News',
        api: 'Colors API',
        contrastChecker: 'Contrast Checker',
        logout: 'Logout',
        login: 'Login',
        workspace: 'Enter Workspace'
      },
      app: {
        workspace: {
          title: 'Welcome to ColorMagic Workspace',
          description: 'Access all your color tools in one place with an optimized workflow.',
          seoTitle: 'Workspace - ColorMagic',
          seoDescription: 'Access all your color tools in one place with an optimized workflow.',
          popularTools: 'Popular Tools',
          recentPalettes: 'Recently Created Palettes',
          launch: 'Launch',
          viewMore: 'View More',
          createPalette: 'Create a Palette',
          noPalettes: {
            title: 'No Recent Palettes',
            description: 'You haven\'t created any palettes yet. Get started by generating a new color palette.'
          },
          contrastChecker: {
            result: 'Contrast Result',
            foreground: 'Foreground',
            background: 'Background'
          }
        },
        palette: {
          result: 'Generated Palette',
          generating: 'Generating your color palette...',
          emptyState: 'Your generated palette will appear here',
          paletteName: 'Palette Name',
          clickToCopy: 'Click to copy',
          colorCopied: 'Color copied to clipboard!',
          paletteSaved: 'Palette saved successfully!',
          successGenerated: 'Successfully generated palette:',
          palettesGenerated: 'color palettes generated since yesterday'
        },
        randomColor: {
          adjust: 'Adjust Color',
          colorCode: 'Color Code',
          spacebarTip: 'Press spacebar to generate a random color',
          showMore: 'Show more colors',
          marketing: {
            heroTitle: 'Discover Perfect Colors at Random',
            heroSubtitle: 'Every click, every spacebar press is an exploration of color inspiration',
            feature1Title: 'Random Color Exploration',
            feature1Desc: 'Press spacebar or click button to instantly generate new colors. Unlock unlimited creative possibilities and break design blocks.',
            feature1Tip: 'Hit the spacebar repeatedly to quickly browse through multiple colors until you find the one you love.',
            feature2Title: 'Precise Color Control',
            feature2Desc: 'Fine-tune your random colors through brightness, saturation, and warmth dimensions to perfectly match your design needs.',
            feature2Tip: 'Find a color that\'s close, then fine-tune it to get the perfect match. Faster and more precise than manual color mixing.',
            feature3Title: 'Smart History Record',
            feature3Desc: 'Automatically save generated colors and easily find your favorites. Never miss any flash of inspiration.',
            feature3Tip: 'Don\'t worry about missing great colors while exploring - all generated colors are automatically saved for future reference.',
            useCasesTitle: 'The Power of Single Colors in Design',
            useCase1Title: 'Brand Colors',
            useCase1Desc: 'Discover primary colors that represent your brand personality and establish strong brand recognition.',
            useCase2Title: 'Emotional Design',
            useCase2Desc: 'Utilize color psychology to choose hues that evoke specific emotional responses.',
            useCase3Title: 'Accent Elements',
            useCase3Desc: 'Use distinctive colors to highlight key elements and guide user attention.',
            useCase4Title: 'Gradient Base',
            useCase4Desc: 'Find perfect foundation colors to create eye-catching gradient effects.',
            designGuideTitle: 'Single Color Design Guide',
            designTip1: 'Choose a primary hue that represents your core message as the emotional center of your design.',
            designTip2: 'Create different brightness variants of the same hue to establish visual hierarchy.',
            designTip3: 'Consider cultural and psychological implications of colors to ensure they resonate with your target audience.',
            designTip4: 'Test your colors in different backgrounds and lighting conditions to ensure they perform well.',
            designTip5: 'Ensure your colors meet accessibility standards by providing sufficient contrast.',
            callToActionTitle: 'Start Your Color Exploration Journey',
            callToActionDesc: 'Whether you\'re looking for brand colors, design inspiration, or the perfect UI element, the Random Color Generator can help. Press the spacebar and discover the perfect color in an instant.',
            startExploringButton: 'Start Exploring',
            keyboardShortcut: 'Keyboard shortcut: Spacebar = Generate new color'
          }
        },
        imageColorPicker: {
          result: 'Extracted Colors',
          extracting: 'Extracting colors from your image...',
          emptyState: 'Upload an image to extract colors',
          colorsExtracted: 'Colors extracted successfully!',
          paletteCreated: 'Color palette created from image!',
          savePalette: 'Save as Palette',
          copyAll: 'Copy All Colors',
          colorsCopied: 'All colors copied to clipboard!',
          imageLoadError: 'Error loading image',
          extractionError: 'Error extracting colors',
          useImage: 'Use This Image',
          hoverToExtract: 'Hover to extract colors',
          description: 'Extract colors from this image',
          imageNames: {
            image1: 'Autumn Forest',
            image2: 'Mountain Lake',
            image3: 'Sunny Field',
            image4: 'Beach Sunset',
            image5: 'Vibrant Buildings',
            image6: 'Desert Landscape'
          }
        },
        contrastChecker: {
          result: 'Contrast Result',
          foreground: 'Foreground',
          background: 'Background'
        },
        copied: 'Color Copied',
        copyError: 'Failed to copy'
      },
      palette: {
        seoTitle: 'ColorMagic - AI Color Palette Generator',
        seoDescription: 'ColorMagic is a color palette generator with AI. Enter any keyword and generate a matching color palette.',
        brightness: 'Brightness',
        saturation: 'Saturation',
        warmth: 'Warmth',
        saveLabel: 'Save Palette',
        createPlaceholder: 'Enter name for new palette',
        createLabel: 'Create Palette',
        resetLabel: 'Reset',
        shareLabel: 'Share this palette to:',
        shareText: 'I generated a color palette for',
        adjustSettings: 'Adjust Settings',
        marketing: {
          mainTitle: 'Create Perfect Color Combinations with AI',
          mainDescription: 'ColorMagic palette generator uses advanced AI technology to create professional-grade color combinations with just a keyword or mood description. Whether for brand design, web development, or artistic creation, easily obtain harmonious color schemes.',
          keywordToColorTitle: 'Keywords to Colors',
          keywordToColorDesc: 'Simply enter any descriptive word, emotion, or theme, and AI will analyze and generate matching professional palettes. From "Ocean" to "Elegant", from "Forest" to "Vibrant", any concept can be transformed into beautiful color combinations.',
          colorAdjustmentTitle: 'Precise Color Adjustment',
          colorAdjustmentDesc: 'Through intuitive slider controls, easily adjust the brightness, saturation, and warmth of your palette to perfectly match your design needs and brand standards.',
          whyChooseTitle: 'Why Choose ColorMagic Palette Generator?',
          whyChooseItem1: 'AI algorithms based on professional color theory',
          whyChooseItem2: 'Instantly generate color schemes that match keywords',
          whyChooseItem3: 'Easily adjust color properties to meet design requirements',
          whyChooseItem4: 'One-click copy and save generated palettes',
          designToolTitle: 'Efficient Color Tools for Designers',
          brandDesignTitle: 'Brand Design',
          brandDesignDesc: 'Create consistent and unique brand color schemes, establishing a strong visual identity system. Adjust color properties to ensure brand colors remain consistent across various media.',
          webDesignTitle: 'Web Design',
          webDesignDesc: 'Generate attractive and accessible color schemes for websites and applications, improving user experience and engagement. Ensure color combinations meet WCAG accessibility standards.',
          illustrationTitle: 'Illustration & Art',
          illustrationDesc: 'Discover new color combinations that inspire creativity, break conventional thinking, and inject freshness and uniqueness into artwork. Explore color schemes for different emotions and themes.',
          conclusionText: 'Whether you\'re a professional designer or a creative enthusiast, ColorMagic palette generator helps you overcome color selection challenges, improve design efficiency, and create more professional, harmonious visual works.',
          tryItNowButton: 'Try It Now',
          keywords: 'AI color palette generator, color combination tool, designer color schemes, AI coloring, palette creation, color matching tool, professional palette generator, brand color system, web design colors, creative color combinations'
        }
      },
      randomColor: {
        title: 'Random Color Generator',
        seoTitle: 'Random Color Generator - ColorMagic',
        seoDescription: 'Find interesting and random colors instantly with just a click (or space bar hit).',
        generateLabel: 'Generate Random Color',
        marketing: {
          heroTitle: 'Discover Perfect Colors at Random',
          heroSubtitle: 'Every click, every spacebar press is an exploration of color inspiration',
          feature1Title: 'Random Color Exploration',
          feature1Desc: 'Press spacebar or click button to instantly generate new colors. Unlock unlimited creative possibilities and break design blocks.',
          feature1Tip: 'Hit the spacebar repeatedly to quickly browse through multiple colors until you find the one you love.',
          feature2Title: 'Precise Color Control',
          feature2Desc: 'Fine-tune your random colors through brightness, saturation, and warmth dimensions to perfectly match your design needs.',
          feature2Tip: 'Find a color that\'s close, then fine-tune it to get the perfect match. Faster and more precise than manual color mixing.',
          feature3Title: 'Smart History Record',
          feature3Desc: 'Automatically save generated colors and easily find your favorites. Never miss any flash of inspiration.',
          feature3Tip: 'Don\'t worry about missing great colors while exploring - all generated colors are automatically saved for future reference.',
          useCasesTitle: 'The Power of Single Colors in Design',
          useCase1Title: 'Brand Colors',
          useCase1Desc: 'Discover primary colors that represent your brand personality and establish strong brand recognition.',
          useCase2Title: 'Emotional Design',
          useCase2Desc: 'Utilize color psychology to choose hues that evoke specific emotional responses.',
          useCase3Title: 'Accent Elements',
          useCase3Desc: 'Use distinctive colors to highlight key elements and guide user attention.',
          useCase4Title: 'Gradient Base',
          useCase4Desc: 'Find perfect foundation colors to create eye-catching gradient effects.',
          designGuideTitle: 'Single Color Design Guide',
          designTip1: 'Choose a primary hue that represents your core message as the emotional center of your design.',
          designTip2: 'Create different brightness variants of the same hue to establish visual hierarchy.',
          designTip3: 'Consider cultural and psychological implications of colors to ensure they resonate with your target audience.',
          designTip4: 'Test your colors in different backgrounds and lighting conditions to ensure they perform well.',
          designTip5: 'Ensure your colors meet accessibility standards by providing sufficient contrast.',
          callToActionTitle: 'Start Your Color Exploration Journey',
          callToActionDesc: 'Whether you\'re looking for brand colors, design inspiration, or the perfect UI element, the Random Color Generator can help. Press the spacebar and discover the perfect color in an instant.',
          startExploringButton: 'Start Exploring',
          keyboardShortcut: 'Keyboard shortcut: Spacebar = Generate new color'
        }
      },
      explore: {
        title: 'Explore Color Palettes',
        seoTitle: 'Explore Color Palettes - ColorMagic',
        seoDescription: 'Explore all of the latest generated color palettes.',
        colorPalettes: 'Color Palettes',
        color: 'Color',
        style: 'Style',
        tone: 'Tone',
        season: 'Season',
        byTag: 'Explore palettes by tag',
        loadMore: 'Load more...',
        noMoreResults: 'No more results'
      },
      exploreTags: {
        title: 'Explore Tags',
        seoTitle: 'Explore Tags - ColorMagic',
        seoDescription: 'Explore color palettes by tag.'
      },
      imageColorPicker: {
        title: 'Image Color Picker',
        seoTitle: 'Image Color Picker - ColorMagic',
        seoDescription: 'Extract and pick a beatiful color scheme from any image with AI.',
        uploadPlaceholder: 'Upload an Image',
        sampleTitle: 'Sample Image {number}',
        description: 'Extract colors from this image',
        imageNames: {
          image1: 'Autumn Forest',
          image2: 'Mountain Lake',
          image3: 'Sunny Field',
          image4: 'Beach Sunset',
          image5: 'Vibrant Buildings',
          image6: 'Desert Landscape'
        }
      },
      api: {
        title: 'Color API',
        seoTitle: 'Color API - ColorMagic',
        seoDescription: 'A free and simple API you can use to integrate with our color palettes.',
        disclaimer: 'This API may be removed or changed at anytime, without warning. Use at your own risk.'
      },
      contrastChecker: {
        title: 'Contrast Checker',
        seoTitle: 'Contrast Checker - ColorMagic',
        seoDescription: 'Check the contrast between primary and secondary colors to ensure legibility and accessibility.',
        legibilityDescription: 'ColorMagic\'s contrast checker follows the web content accesibility guidelines (WCAG) as to ensure legibility:',
        primaryLabel: 'Primary (foreground/text)',
        secondaryLabel: 'Secondary (background)',
        contrastRatio: 'Contrast Ratio',
        normalText: 'Normal Text',
        largeText: 'Large Text',
        uiComponents: 'UI Components',
        exampleText: 'Example Primary text',
        failText: 'Fail'
      },
      liked: {
        title: 'Liked Palettes',
        seoTitle: 'Liked Palettes - ColorMagic',
        seoDescription: 'See the palettes you\'ve liked in one place.',
        comingSoon: 'Coming soon...'
      },
      login: {
        title: 'Login',
        seoTitle: 'Login - ColorMagic',
        seoDescription: 'Get access to likes, favourites and more upcoming features by logging in to ColorMagic.',
        google: 'Login with Google'
      }
    },
    ja: {
      home: {
        title: 'あなたの思い描く色をかんたんに',
        seoTitle: 'あなたの思い描く色をかんたんに',
        seoDescription: 'ColorMagicは、AIでオリジナルのカラーパレットをつくれるサービスです。\n雰囲気やイメージのキーワードから、今すぐ使える配色を簡単に生成できます',
        exampleLabel: '例を試してみてください:',
        tryNow: '今すぐ試す'
      },
      recent: {
        seoTitle: '最近 あなたの思い描く色をかんたんに',
        topLabel: '最近:',
        noneFound: '最近のものはありません'
      },
      generate: {
        placeholder: '色の雰囲気やイメージを入力してください',
        label: '生成する'
      },
      bannerLabel: 'ColorMagic を無料で維持するために寄付してください',
      nav: {
        home: 'ホーム',
        recent: '最近',
        liked: '気に入った',
        contact: 'お問い合わせ',
        terms: '利用規約',
        privacy: 'プライバシー',
        randomColor: 'ランダムカラージェネレーター',
        colorPaletteGenrator: 'カラーパレットジェネレーター',
        suggestIdea: 'アイデアを提案',
        free: 'ColorMagicが今なら完全無料です！詳しくはこちら',
        explore: '探検する',
        exploreTags: 'タグを調べる',
        imageColorPicker: '画像カラーピッカー',
        tools: 'ツール',
        website: 'Webサイト',
        freeColorTools: '無料のカラーツール',
        more: 'もっと',
        news: 'ニュース',
        api: 'カラーAPI',
        contrastChecker: 'コントラストチェッカー',
        logout: 'ログアウト',
        login: 'ログイン',
        workspace: 'ワークスペースに入る'
      },
      app: {
        workspace: {
          title: 'ColorMagicワークスペースへようこそ',
          description: '最適化されたワークフローですべてのカラーツールに一箇所からアクセスできます。',
          seoTitle: 'ワークスペース - ColorMagic',
          seoDescription: '最適化されたワークフローですべてのカラーツールに一箇所からアクセスできます。',
          popularTools: '人気ツール',
          recentPalettes: '最近作成されたパレット',
          launch: '起動',
          viewMore: 'もっと見る',
          createPalette: 'パレットを作成',
          noPalettes: {
            title: '最近のパレットはありません',
            description: 'まだパレットを作成していません。新しいカラーパレットを生成して始めましょう。'
          },
          contrastChecker: {
            result: 'コントラスト結果',
            foreground: '前景',
            background: '背景'
          }
        },
        palette: {
          result: '生成されたパレット',
          generating: 'カラーパレットを生成中...',
          emptyState: '生成されたパレットがここに表示されます',
          paletteName: 'パレット名',
          clickToCopy: 'クリックしてコピー',
          colorCopied: 'カラーをクリップボードにコピーしました！',
          paletteSaved: 'パレットが正常に保存されました！',
          successGenerated: 'パレットの生成に成功しました:',
          palettesGenerated: '昨日からの色パレット生成数'
        },
        randomColor: {
          adjust: '色の調整',
          colorCode: 'カラーコード',
          spacebarTip: 'スペースキーを押してランダムな色を生成',
          showMore: 'もっと色を表示',
          marketing: {
            heroTitle: 'ランダムで完璧な色を発見',
            heroSubtitle: 'クリックやスペースバーを押すたびに、色彩のインスピレーションを探求できます',
            feature1Title: 'ランダムな色の探索',
            feature1Desc: 'スペースバーを押すかボタンをクリックするだけで、新しい色を即座に生成。無限のクリエイティブな可能性を解き放ち、デザインのブロックを打破します。',
            feature1Tip: 'お気に入りの色を見つけるまで、スペースバーを連続して押して複数の色をすばやく閲覧できます。',
            feature2Title: '精密な色彩調整',
            feature2Desc: '明るさ、彩度、色温度の3次元でランダムな色を微調整し、デザインニーズに完璧に合わせることができます。',
            feature2Tip: '近い色を見つけてから微調整して、完璧なマッチングを得ましょう。手動での色の混合よりも速く正確です。',
            feature3Title: 'スマート履歴記録',
            feature3Desc: '生成された色を自動的に保存し、お気に入りを簡単に見つけることができます。インスピレーションの閃きを見逃しません。',
            feature3Tip: '探索中に素晴らしい色を見逃す心配はありません - 生成されたすべての色は将来の参考のために自動的に保存されます。',
            useCasesTitle: 'デザインにおける単色の力',
            useCase1Title: 'ブランドカラー',
            useCase1Desc: 'ブランドの個性を表現し、強力なブランド認知度を確立するプライマリカラーを発見します。',
            useCase2Title: '感情デザイン',
            useCase2Desc: '色彩心理学を活用して、特定の感情反応を引き起こす色調を選択します。',
            useCase3Title: 'アクセント要素',
            useCase3Desc: '独特の色を使用して重要な要素を強調し、ユーザーの注目を導きます。',
            useCase4Title: 'グラデーションベース',
            useCase4Desc: '目を引くグラデーション効果を作成するための完璧な基礎色を見つけます。',
            designGuideTitle: '単色デザインガイド',
            designTip1: 'デザインの感情的中心として、コアメッセージを表す主要な色相を選びましょう。',
            designTip2: '同じ色相の異なる明るさのバリエーションを作成して、視覚的階層を確立します。',
            designTip3: '色の文化的・心理的な意味を考慮して、ターゲットオーディエンスに共感を呼び起こすようにしましょう。',
            designTip4: '異なる背景や照明条件で色をテストして、うまく機能することを確認します。',
            designTip5: '十分なコントラストを提供することで、色がアクセシビリティ基準を満たすようにします。',
            callToActionTitle: '色彩探索の旅を始めましょう',
            callToActionDesc: 'ブランドカラー、デザインのインスピレーション、または完璧なUI要素を探しているかどうかにかかわらず、ランダムカラージェネレーターがお手伝いします。スペースバーを押すだけで、一瞬で完璧な色を発見できます。',
            startExploringButton: '探索を開始',
            keyboardShortcut: 'キーボードショートカット: スペースバー = 新しい色を生成'
          }
        },
        imageColorPicker: {
          result: '抽出された色',
          extracting: '画像から色を抽出中...',
          emptyState: '画像をアップロードして色を抽出',
          colorsExtracted: '色の抽出に成功しました！',
          paletteCreated: '画像からカラーパレットを作成しました！',
          savePalette: 'パレットとして保存',
          copyAll: 'すべての色をコピー',
          colorsCopied: 'すべての色をクリップボードにコピーしました！',
          imageLoadError: '画像の読み込みエラー',
          extractionError: '色の抽出エラー',
          useImage: 'この画像を使用',
          hoverToExtract: 'ホバーして色を抽出',
          description: 'この画像から色を抽出する',
          imageNames: {
            image1: '秋の森',
            image2: '山の湖',
            image3: '晴れた畑',
            image4: '海辺の夕日',
            image5: '鮮やかな建物',
            image6: '砂漠の風景'
          }
        },
        contrastChecker: {
          result: 'コントラスト結果',
          foreground: '前景',
          background: '背景'
        },
        copied: '色をコピーしました',
        copyError: 'コピーに失敗しました'
      },
      palette: {
        seoTitle: 'あなたの思い描く色をかんたんに',
        seoDescription: 'ColorMagicは、AIでオリジナルのカラーパレットをつくれるサービスです。\n雰囲気やイメージのキーワードから、今すぐ使える配色を簡単に生成できます',
        brightness: '明るさ',
        saturation: '彩度',
        warmth: '暖かさ',
        saveLabel: 'パレットの保存',
        createPlaceholder: '新しいパレットの名前を入力してください',
        createLabel: 'パレットを作成',
        resetLabel: 'リセット',
        shareLabel: 'このパレットを共有する先：',
        shareText: '私は〜のためにカラーパレットを生成しました',
        adjustSettings: '設定を調整する',
        marketing: {
          mainTitle: 'AIで完璧な色の組み合わせを生成',
          mainDescription: 'ColorMagicパレットジェネレーターは、高度なAI技術を使用して、キーワードや雰囲気の説明だけでプロフェッショナルレベルの色の組み合わせを作成します。ブランドデザイン、Web開発、芸術創作など、どのような場合でも調和のとれた配色を簡単に取得できます。',
          keywordToColorTitle: 'キーワードから色へ',
          keywordToColorDesc: '説明的な単語、感情、テーマを入力するだけで、AIが分析して専門的なパレットを生成します。「海」から「エレガント」まで、「森」から「活気」まで、あらゆる概念を美しい色の組み合わせに変換できます。',
          colorAdjustmentTitle: '正確な色調整',
          colorAdjustmentDesc: '直感的なスライダーコントロールを使用して、パレットの明るさ、彩度、暖かさを簡単に調整し、デザインニーズやブランド基準に完全に合わせることができます。',
          whyChooseTitle: 'なぜColorMagicパレットジェネレーターを選ぶのか？',
          whyChooseItem1: 'プロフェッショナルな色彩理論に基づくAIアルゴリズム',
          whyChooseItem2: 'キーワードに合った色彩スキームを即座に生成',
          whyChooseItem3: 'デザイン要件を満たすための色のプロパティを簡単に調整',
          whyChooseItem4: 'ワンクリックで生成されたパレットをコピーして保存',
          designToolTitle: 'デザイナーのための効率的なカラーツール',
          brandDesignTitle: 'ブランドデザイン',
          brandDesignDesc: '一貫性のある独自のブランドカラースキームを作成し、強力な視覚的アイデンティティシステムを確立します。色のプロパティを調整して、ブランドカラーがさまざまなメディアで一貫して表示されるようにします。',
          webDesignTitle: 'Webデザイン',
          webDesignDesc: 'ウェブサイトやアプリケーション向けの魅力的でアクセシブルな配色を生成し、ユーザーエクスペリエンスと関与を向上させます。色の組み合わせがWCAGアクセシビリティ基準を満たすことを確認します。',
          illustrationTitle: 'イラストとアート',
          illustrationDesc: '創造性を刺激する新しい色の組み合わせを発見し、従来の考え方を打ち破り、アートワークに新鮮さとユニークさをもたらします。さまざまな感情やテーマの配色を探索します。',
          conclusionText: 'プロのデザイナーでも創造的な愛好家でも、ColorMagicパレットジェネレーターは色の選択の課題を克服し、デザイン効率を向上させ、よりプロフェッショナルで調和のとれた視覚作品を作成するのに役立ちます。',
          tryItNowButton: '今すぐ試す',
          keywords: 'AIカラーパレットジェネレーター、色の組み合わせツール、デザイナーカラースキーム、AI着色、パレット作成、色合わせツール、プロフェッショナルパレットジェネレーター、ブランドカラーシステム、ウェブデザインカラー、創造的な色の組み合わせ'
        }
      },
      randomColor: {
        title: 'ランダムカラージェネレーター',
        seoTitle: 'ランダムカラージェネレーター - ColorMagic',
        seoDescription: 'クリックまたはスペースバーを押すだけで、面白くてランダムな色を瞬時に見つけましょう。',
        generateLabel: 'ランダムカラーを生成する',
        marketing: {
          heroTitle: 'ランダムで完璧な色を発見',
          heroSubtitle: 'クリックやスペースバーを押すたびに、色彩のインスピレーションを探求できます',
          feature1Title: 'ランダムな色の探索',
          feature1Desc: 'スペースバーを押すかボタンをクリックするだけで、新しい色を即座に生成。無限のクリエイティブな可能性を解き放ち、デザインのブロックを打破します。',
          feature1Tip: 'お気に入りの色を見つけるまで、スペースバーを連続して押して複数の色をすばやく閲覧できます。',
          feature2Title: '精密な色彩調整',
          feature2Desc: '明るさ、彩度、色温度の3次元でランダムな色を微調整し、デザインニーズに完璧に合わせることができます。',
          feature2Tip: '近い色を見つけてから微調整して、完璧なマッチングを得ましょう。手動での色の混合よりも速く正確です。',
          feature3Title: 'スマート履歴記録',
          feature3Desc: '生成された色を自動的に保存し、お気に入りを簡単に見つけることができます。インスピレーションの閃きを見逃しません。',
          feature3Tip: '探索中に素晴らしい色を見逃す心配はありません - 生成されたすべての色は将来の参考のために自動的に保存されます。',
          useCasesTitle: 'デザインにおける単色の力',
          useCase1Title: 'ブランドカラー',
          useCase1Desc: 'ブランドの個性を表現し、強力なブランド認知度を確立するプライマリカラーを発見します。',
          useCase2Title: '感情デザイン',
          useCase2Desc: '色彩心理学を活用して、特定の感情反応を引き起こす色調を選択します。',
          useCase3Title: 'アクセント要素',
          useCase3Desc: '独特の色を使用して重要な要素を強調し、ユーザーの注目を導きます。',
          useCase4Title: 'グラデーションベース',
          useCase4Desc: '目を引くグラデーション効果を作成するための完璧な基礎色を見つけます。',
          designGuideTitle: '単色デザインガイド',
          designTip1: 'デザインの感情的中心として、コアメッセージを表す主要な色相を選びましょう。',
          designTip2: '同じ色相の異なる明るさのバリエーションを作成して、視覚的階層を確立します。',
          designTip3: '色の文化的・心理的な意味を考慮して、ターゲットオーディエンスに共感を呼び起こすようにしましょう。',
          designTip4: '異なる背景や照明条件で色をテストして、うまく機能することを確認します。',
          designTip5: '十分なコントラストを提供することで、色がアクセシビリティ基準を満たすようにします。',
          callToActionTitle: '色彩探索の旅を始めましょう',
          callToActionDesc: 'ブランドカラー、デザインのインスピレーション、または完璧なUI要素を探しているかどうかにかかわらず、ランダムカラージェネレーターがお手伝いします。スペースバーを押すだけで、一瞬で完璧な色を発見できます。',
          startExploringButton: '探索を開始',
          keyboardShortcut: 'キーボードショートカット: スペースバー = 新しい色を生成'
        }
      },
      explore: {
        title: 'カラーパレットを探索する',
        seoTitle: 'カラーパレットを探索する - ColorMagic',
        seoDescription: '最新に生成されたすべてのカラー パレットを探索する.',
        colorPalettes: 'カラーパレット',
        color: '色',
        style: 'スタイル',
        tone: 'トーン',
        season: '季節',
        byTag: 'タグ別にパレットを探索する',
        loadMore: 'もっと読み込む...',
        noMoreResults: '結果はこれ以上ありません'
      },
      exploreTags: {
        title: 'タグを探索',
        seoTitle: 'タグを探索 - ColorMagic',
        seoDescription: 'タグ別にカラーパレットを探索します。'
      },
      imageColorPicker: {
        title: '画像カラーピッカー',
        seoTitle: '画像カラーピッカー - ColorMagic',
        seoDescription: 'AI を使用して、あらゆる画像から美しい配色を抽出して選択します。',
        uploadPlaceholder: '画像をアップロードする',
        sampleTitle: 'サンプル画像 {number}',
        description: 'Extract colors from this image',
        imageNames: {
          image1: '秋の森',
          image2: '山の湖',
          image3: '晴れた畑',
          image4: '海辺の夕日',
          image5: '鮮やかな建物',
          image6: '砂漠の風景'
        }
      },
      api: {
        title: 'カラーAPI',
        seoTitle: 'カラーAPI - ColorMagic',
        seoDescription: 'カラーパレットと統合するために使用できる無料のシンプルな API。',
        disclaimer: 'この API は、予告なくいつでも削除または変更される場合があります。ご自身の責任でご使用ください。'
      },
      contrastChecker: {
        title: 'コントラストチェッカー',
        seoTitle: 'コントラストチェッカー - ColorMagic',
        seoDescription: 'プライマリカラーとセカンダリカラーのコントラストを確認し、可読性を確保します。',
        legibilityDescription: 'ColorMagicのコントラストチェッカーは、可読性を確保するためにWebコンテンツアクセシビリティガイドライン（WCAG）に準拠しています:',
        primaryLabel: 'プライマリ（前景/テキスト)',
        secondaryLabel: 'セカンダリ（背景）',
        contrastRatio: 'コントラスト比',
        normalText: '通常のテキスト',
        largeText: '大きなテキスト',
        uiComponents: 'UIコンポーネント',
        exampleText: 'プライマリテキストの例',
        failText: '不合格'
      },
      liked: {
        title: '気に入ったパレット',
        seoTitle: '気に入ったパレット - ColorMagic',
        seoDescription: '気に入ったパレットを 1 か所で確認できます。',
        comingSoon: '近日公開...'
      },
      login: {
        title: 'ログイン',
        seoTitle: 'ログイン - ColorMagic',
        seoDescription: 'ColorMagicにログインして、いいね、お気に入り、その他の新機能にアクセスしましょう。',
        google: 'Googleでログイン'
      }
    },
    it: {
      home: {
        title: 'Genera la tua palette di colori ideale',
        seoTitle: 'Genera la tua palette di colori ideale',
        seoDescription: 'ColorMagic è un generatore di palette di colori con IA. Inserisci qualsiasi parola chiave e genera una palette corrispondente.',
        exampleLabel: 'Prova un esempio:',
        tryNow: 'Prova ora'
      },
      recent: {
        seoTitle: 'Recenti - ColorMagic - AI Color Palette Generator',
        topLabel: 'Recenti:',
        noneFound: 'Nessun elemento recente trovato'
      },
      generate: {
        placeholder: 'Inserisci l\'atmosfera o l\'immagine del colore',
        label: 'Genera'
      },
      bannerLabel: 'Fai una donazione per mantenere ColorMagic gratuito',
      nav: {
        home: 'Home',
        recent: 'Recenti',
        liked: 'Mi è piaciuto',
        contact: 'Contatti',
        terms: 'Termini di utilizzo',
        privacy: 'Privacy',
        randomColor: 'Generatore di Colori Casuali',
        colorPaletteGenrator: 'Generatore di Palette di Colori',
        suggestIdea: 'Suggerisci un\'idea',
        free: 'ColorMagic è ora completamente gratuito! Leggi di più qui',
        explore: 'Esplorare',
        exploreTags: 'Esplora i tag',
        imageColorPicker: 'Selettore colore immagine',
        tools: 'Utensili',
        website: 'Sito web',
        freeColorTools: 'Strumenti di colore gratuiti',
        more: 'Di più',
        news: 'Notizia',
        api: 'API dei colori',
        contrastChecker: 'Controllo Contrasto',
        logout: 'Esci',
        login: 'Login',
        workspace: 'Entra nell\'area di lavoro'
      },
      app: {
        workspace: {
          title: 'Benvenuto nell\'area di lavoro ColorMagic',
          description: 'Accedi a tutti i tuoi strumenti di colore in un unico posto con un flusso di lavoro ottimizzato.',
          seoTitle: 'Area di lavoro - ColorMagic',
          seoDescription: 'Accedi a tutti i tuoi strumenti di colore in un unico posto con un flusso di lavoro ottimizzato.',
          popularTools: 'Strumenti popolari',
          recentPalettes: 'Palette create di recente',
          launch: 'Avvia',
          viewMore: 'Vedi altro',
          createPalette: 'Crea una palette',
          noPalettes: {
            title: 'Nessuna palette recente',
            description: 'Non hai ancora creato palette. Inizia generando una nuova palette di colori.'
          },
          contrastChecker: {
            result: 'Risultato Contrasto',
            foreground: 'Primo Piano',
            background: 'Sfondo'
          }
        },
        palette: {
          result: 'Palette generata',
          generating: 'Generazione della tua palette di colori...',
          emptyState: 'La tua palette generata apparirà qui',
          paletteName: 'Nome Palette',
          clickToCopy: 'Clicca per copiare',
          colorCopied: 'Colore copiato negli appunti!',
          paletteSaved: 'Palette salvata con successo!',
          successGenerated: 'Palette generata con successo:',
          palettesGenerated: 'palette di colori generate da ieri'
        },
        randomColor: {
          adjust: 'Regola Colore',
          colorCode: 'Codice Colore',
          spacebarTip: 'Premi la barra spaziatrice per generare un colore casuale',
          showMore: 'Mostra più colori',
          marketing: {
            heroTitle: 'Scopri Colori Perfetti Casualmente',
            heroSubtitle: 'Ogni clic, ogni pressione della barra spaziatrice è un\'esplorazione di ispirazione cromatica',
            feature1Title: 'Esplorazione di Colori Casuali',
            feature1Desc: 'Premi la barra spaziatrice o clicca il pulsante per generare istantaneamente nuovi colori. Sblocca infinite possibilità creative e supera i blocchi di design.',
            feature1Tip: 'Premi ripetutamente la barra spaziatrice per sfogliare rapidamente più colori fino a trovare quello che ami.',
            feature2Title: 'Controllo Preciso del Colore',
            feature2Desc: 'Regola con precisione i tuoi colori casuali attraverso le dimensioni di luminosità, saturazione e calore per adattarsi perfettamente alle tue esigenze di design.',
            feature2Tip: 'Trova un colore vicino a quello che cerchi, poi regolalo per ottenere la corrispondenza perfetta. Più veloce e preciso della miscelazione manuale dei colori.',
            feature3Title: 'Registro Cronologico Intelligente',
            feature3Desc: 'Salva automaticamente i colori generati e trova facilmente i tuoi preferiti. Non perdere mai alcun lampo di ispirazione.',
            feature3Tip: 'Non preoccuparti di perdere colori eccezionali durante l\'esplorazione - tutti i colori generati vengono salvati automaticamente per riferimenti futuri.',
            useCasesTitle: 'Il Potere dei Colori Singoli nel Design',
            useCase1Title: 'Colori del Brand',
            useCase1Desc: 'Scopri colori primari che rappresentano la personalità del tuo brand e stabiliscono un forte riconoscimento del marchio.',
            useCase2Title: 'Design Emozionale',
            useCase2Desc: 'Utilizza la psicologia del colore per scegliere tonalità che evocano specifiche risposte emotive.',
            useCase3Title: 'Elementi di Accento',
            useCase3Desc: 'Usa colori distintivi per evidenziare elementi chiave e guidare l\'attenzione dell\'utente.',
            useCase4Title: 'Base per Gradienti',
            useCase4Desc: 'Trova colori di base perfetti per creare effetti di gradiente accattivanti.',
            designGuideTitle: 'Guida al Design con un Solo Colore',
            designTip1: 'Scegli una tonalità primaria che rappresenti il tuo messaggio principale come centro emotivo del tuo design.',
            designTip2: 'Crea varianti di luminosità diverse della stessa tonalità per stabilire una gerarchia visiva.',
            designTip3: 'Considera le implicazioni culturali e psicologiche dei colori per assicurarti che risuonino con il tuo pubblico target.',
            designTip4: 'Testa i tuoi colori in sfondi e condizioni di illuminazione diverse per assicurarti che funzionino bene.',
            designTip5: 'Assicurati che i tuoi colori soddisfino gli standard di accessibilità fornendo un contrasto sufficiente.',
            callToActionTitle: 'Inizia il Tuo Viaggio di Esplorazione dei Colori',
            callToActionDesc: 'Che tu stia cercando colori per il tuo brand, ispirazione per il design o l\'elemento UI perfetto, il Generatore di Colori Casuali può aiutarti. Premi la barra spaziatrice e scopri il colore perfetto in un istante.',
            startExploringButton: 'Inizia a Esplorare',
            keyboardShortcut: 'Scorciatoia da tastiera: Barra spaziatrice = Genera nuovo colore'
          }
        },
        imageColorPicker: {
          result: 'Colori Estratti',
          extracting: 'Estrazione dei colori dalla tua immagine...',
          emptyState: 'Carica un\'immagine per estrarre i colori',
          colorsExtracted: 'Colori estratti con successo!',
          paletteCreated: 'Palette di colori creata dall\'immagine!',
          savePalette: 'Salva come Palette',
          copyAll: 'Copia Tutti i Colori',
          colorsCopied: 'Tutti i colori copiati negli appunti!',
          imageLoadError: 'Errore nel caricamento dell\'immagine',
          extractionError: 'Errore nell\'estrazione dei colori',
          useImage: 'Usa questa immagine',
          hoverToExtract: 'Passa il mouse per estrarre i colori',
          description: 'Estrai i colori da questa immagine',
          imageNames: {
            image1: 'Foresta Autunnale',
            image2: 'Lago di Montagna',
            image3: 'Campo Soleggiato',
            image4: 'Tramonto sulla Spiaggia',
            image5: 'Edifici Vibranti',
            image6: 'Paesaggio Desertico'
          }
        },
        contrastChecker: {
          result: 'Risultato Contrasto',
          foreground: 'Primo Piano',
          background: 'Sfondo'
        },
        copied: 'Colore Copiato',
        copyError: 'Errore durante la copia'
      },
      palette: {
        seoTitle: 'Genera la tua palette di colori ideale',
        seoDescription: 'ColorMagic è un generatore di palette di colori con IA. Inserisci qualsiasi parola chiave e genera una palette corrispondente.',
        brightness: 'Luminosità',
        saturation: 'Saturazione',
        warmth: 'Calore',
        saveLabel: 'Salva tavolozza',
        createPlaceholder: 'Inserisci il nome per la nuova palette',
        createLabel: 'Crea Palette',
        resetLabel: 'Reimposta',
        shareLabel: 'Condividi questa palette a:',
        shareText: 'Ho generato una palette di colori per ~',
        adjustSettings: 'Regola Impostazioni',
        marketing: {
          mainTitle: 'Crea combinazioni di colori perfette con l\'IA',
          mainDescription: 'Il generatore di palette ColorMagic utilizza tecnologia AI avanzata per creare combinazioni di colori di livello professionale con solo una parola chiave o una descrizione dell\'umore. Che sia per design del marchio, sviluppo web o creazione artistica, ottieni facilmente schemi di colori armoniosi.',
          keywordToColorTitle: 'Parole chiave in colori',
          keywordToColorDesc: 'Inserisci semplicemente qualsiasi parola descrittiva, emozione o tema, e l\'AI analizzerà e genererà palette professionali corrispondenti. Da "Oceano" a "Elegante", da "Foresta" a "Vibrante", qualsiasi concetto può essere trasformato in bellissime combinazioni di colori.',
          colorAdjustmentTitle: 'Regolazione precisa del colore',
          colorAdjustmentDesc: 'Attraverso controlli a cursore intuitivi, regola facilmente la luminosità, la saturazione e il calore della tua palette per soddisfare perfettamente le tue esigenze di design e gli standard del marchio.',
          whyChooseTitle: 'Perché scegliere il generatore di palette ColorMagic?',
          whyChooseItem1: 'Algoritmi AI basati sulla teoria professionale del colore',
          whyChooseItem2: 'Genera istantaneamente schemi di colori che corrispondono alle parole chiave',
          whyChooseItem3: 'Regola facilmente le proprietà del colore per soddisfare i requisiti di design',
          whyChooseItem4: 'Copia e salva con un clic le palette generate',
          designToolTitle: 'Strumenti di colore efficienti per designer',
          brandDesignTitle: 'Design del marchio',
          brandDesignDesc: 'Crea schemi di colori di marca coerenti e unici, stabilendo un forte sistema di identità visiva. Regola le proprietà del colore per garantire che i colori del marchio rimangano coerenti su vari media.',
          webDesignTitle: 'Web Design',
          webDesignDesc: 'Genera schemi di colori attraenti e accessibili per siti web e applicazioni, migliorando l\'esperienza utente e il coinvolgimento. Assicurati che le combinazioni di colori soddisfino gli standard di accessibilità WCAG.',
          illustrationTitle: 'Illustrazione e Arte',
          illustrationDesc: 'Scopri nuove combinazioni di colori che ispirano creatività, rompono il pensiero convenzionale e iniettano freschezza e unicità nelle opere d\'arte. Esplora schemi di colori per diverse emozioni e temi.',
          conclusionText: 'Che tu sia un designer professionista o un appassionato creativo, il generatore di palette ColorMagic ti aiuta a superare le sfide di selezione del colore, migliorare l\'efficienza del design e creare opere visive più professionali e armoniose.',
          tryItNowButton: 'Provalo ora',
          keywords: 'Generatore di palette di colori AI, strumento di combinazione di colori, schemi di colori per designer, colorazione AI, creazione di palette, strumento di abbinamento colori, generatore di palette professionale, sistema di colori del marchio, colori per web design, combinazioni di colori creative'
        }
      },
      randomColor: {
        title: 'Generatore di Colori Casuali',
        seoTitle: 'Generatore di Colori Casuali - ColorMagic',
        seoDescription: 'Genera colori casuali all\'istante con un semplice clic (o con la barra spaziatrice).',
        generateLabel: 'Genera Colore Casuale',
        marketing: {
          heroTitle: 'Scopri Colori Perfetti Casualmente',
          heroSubtitle: 'Ogni clic, ogni pressione della barra spaziatrice è un\'esplorazione di ispirazione cromatica',
          feature1Title: 'Esplorazione di Colori Casuali',
          feature1Desc: 'Premi la barra spaziatrice o clicca il pulsante per generare istantaneamente nuovi colori. Sblocca infinite possibilità creative e supera i blocchi di design.',
          feature1Tip: 'Premi ripetutamente la barra spaziatrice per sfogliare rapidamente più colori fino a trovare quello che ami.',
          feature2Title: 'Controllo Preciso del Colore',
          feature2Desc: 'Regola con precisione i tuoi colori casuali attraverso le dimensioni di luminosità, saturazione e calore per adattarsi perfettamente alle tue esigenze di design.',
          feature2Tip: 'Trova un colore vicino a quello che cerchi, poi regolalo per ottenere la corrispondenza perfetta. Più veloce e preciso della miscelazione manuale dei colori.',
          feature3Title: 'Registro Cronologico Intelligente',
          feature3Desc: 'Salva automaticamente i colori generati e trova facilmente i tuoi preferiti. Non perdere mai alcun lampo di ispirazione.',
          feature3Tip: 'Non preoccuparti di perdere colori eccezionali durante l\'esplorazione - tutti i colori generati vengono salvati automaticamente per riferimenti futuri.',
          useCasesTitle: 'Il Potere dei Colori Singoli nel Design',
          useCase1Title: 'Colori del Brand',
          useCase1Desc: 'Scopri colori primari che rappresentano la personalità del tuo brand e stabiliscono un forte riconoscimento del marchio.',
          useCase2Title: 'Design Emozionale',
          useCase2Desc: 'Utilizza la psicologia del colore per scegliere tonalità che evocano specifiche risposte emotive.',
          useCase3Title: 'Elementi di Accento',
          useCase3Desc: 'Usa colori distintivi per evidenziare elementi chiave e guidare l\'attenzione dell\'utente.',
          useCase4Title: 'Base per Gradienti',
          useCase4Desc: 'Trova colori di base perfetti per creare effetti di gradiente accattivanti.',
          designGuideTitle: 'Guida al Design con un Solo Colore',
          designTip1: 'Scegli una tonalità primaria che rappresenti il tuo messaggio principale come centro emotivo del tuo design.',
          designTip2: 'Crea varianti di luminosità diverse della stessa tonalità per stabilire una gerarchia visiva.',
          designTip3: 'Considera le implicazioni culturali e psicologiche dei colori per assicurarti che risuonino con il tuo pubblico target.',
          designTip4: 'Testa i tuoi colori in sfondi e condizioni di illuminazione diverse per assicurarti che funzionino bene.',
          designTip5: 'Assicurati che i tuoi colori soddisfino gli standard di accessibilità fornendo un contrasto sufficiente.',
          callToActionTitle: 'Inizia il Tuo Viaggio di Esplorazione dei Colori',
          callToActionDesc: 'Che tu stia cercando colori per il tuo brand, ispirazione per il design o l\'elemento UI perfetto, il Generatore di Colori Casuali può aiutarti. Premi la barra spaziatrice e scopri il colore perfetto in un istante.',
          startExploringButton: 'Inizia a Esplorare',
          keyboardShortcut: 'Scorciatoia da tastiera: Barra spaziatrice = Genera nuovo colore'
        }
      },
      explore: {
        title: 'Esplora le tavolozze dei colori',
        seoTitle: 'Esplora le tavolozze dei colori - ColorMagic',
        seoDescription: 'Esplora tutte le tavolozze di colori generate più recenti.',
        colorPalettes: 'Tavolozze di colori',
        color: 'Colore',
        style: 'Stile',
        tone: 'Tono',
        season: 'Stagione',
        byTag: 'Esplora le tavolozze per tag',
        loadMore: 'Carica altro...',
        noMoreResults: 'Nessun altro risultato'
      },
      exploreTags: {
        title: 'Esplora Tag',
        seoTitle: 'Esplora Tag - ColorMagic',
        seoDescription: 'Esplora palette di colori per tag.'
      },
      imageColorPicker: {
        title: 'Selettore colore immagine',
        seoTitle: 'Selettore colore immagine - ColorMagic',
        seoDescription: 'Estrai e scegli una bellissima combinazione di colori da qualsiasi immagine con l\'intelligenza artificiale.',
        uploadPlaceholder: 'Carica un\'immagine',
        sampleTitle: 'Immagine di esempio {number}',
        description: 'Estrai i colori da questa immagine',
        imageNames: {
          image1: 'Foresta Autunnale',
          image2: 'Lago di Montagna',
          image3: 'Campo Soleggiato',
          image4: 'Tramonto sulla Spiaggia',
          image5: 'Edifici Vibranti',
          image6: 'Paesaggio Desertico'
        }
      },
      api: {
        title: 'API dei colori',
        seoTitle: 'API dei colori - ColorMagic',
        seoDescription: 'Un\'API semplice e gratuita che puoi utilizzare per l\'integrazione con le nostre tavolozze di colori.',
        disclaimer: 'Questa API può essere rimossa o modificata in qualsiasi momento, senza preavviso. Utilizzare a proprio rischio.'
      },
      contrastChecker: {
        title: 'Controllo Contrasto',
        seoTitle: 'Controllo Contrasto - ColorMagic',
        seoDescription: 'Controlla il contrasto tra un colore primario e secondario per garantire la leggibilità.',
        legibilityDescription: 'Il controllo del contrasto di ColorMagic segue le linee guida per l\'accessibilità dei contenuti web (WCAG) per garantire la leggibilità:',
        primaryLabel: 'Primario (testo in primo piano)',
        secondaryLabel: 'Secondario (sfondo)',
        contrastRatio: 'Rapporto di Contrasto',
        normalText: 'Testo normale',
        largeText: 'Testo grande',
        uiComponents: 'Componenti UI',
        exampleText: 'Esempio di testo primario',
        failText: 'Non riuscito'
      },
      liked: {
        title: 'Tavolozze piaciute',
        seoTitle: 'Tavolozze piaciute - ColorMagic',
        seoDescription: 'Guarda le tavolozze che ti sono piaciute in un unico posto.',
        comingSoon: 'Prossimamente...'
      },
      login: {
        title: 'Accedi',
        seoTitle: 'Accedi - ColorMagic',
        seoDescription: 'Accedi a like, preferiti e altre funzionalità in arrivo effettuando il login su ColorMagic.',
        google: 'Accedi con Google'
      }
    },
    
  }
}));
