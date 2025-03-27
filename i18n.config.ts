export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      home: {
        title: 'Generate your ideal color palette',
        seoTitle: 'ColorMagic - AI Color Palette Generator',
        seoDescription: 'ColorMagic is a color palette generator with AI. Enter any keyword and generate a matching color palette.',
        exampleLabel: 'Try an example:'
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
          showMore: 'Show more colors'
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
          extractionError: 'Error extracting colors'
        },
        contrastChecker: {
          result: 'Contrast Result',
          foreground: 'Foreground',
          background: 'Background'
        }
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
        shareText: 'I generated a color palette for'
      },
      randomColor: {
        title: 'Random Color Generator',
        seoTitle: 'Random Color Generator - ColorMagic',
        seoDescription: 'Find interesting and random colors instantly with just a click (or space bar hit).',
        generateLabel: 'Generate Random Color'
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
        seoDescription: 'Explore color palettes by tag.',
      },
      imageColorPicker: {
        title: 'Image Color Picker',
        seoTitle: 'Image Color Picker - ColorMagic',
        seoDescription: 'Extract and pick a beatiful color scheme from any image with AI.',
        uploadPlaceholder: 'Upload an Image'
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
        exampleLabel: '例を試してみてください:'
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
          showMore: 'もっと色を表示'
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
          extractionError: '色の抽出エラー'
        },
        contrastChecker: {
          result: 'コントラスト結果',
          foreground: '前景',
          background: '背景'
        }
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
        shareText: '私は〜のためにカラーパレットを生成しました'
      },
      randomColor: {
        title: 'ランダムカラージェネレーター',
        seoTitle: 'ランダムカラージェネレーター - ColorMagic',
        seoDescription: 'クリックまたはスペースバーを押すだけで、面白くてランダムな色を瞬時に見つけましょう。',
        generateLabel: 'ランダムカラーを生成する'
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
        uploadPlaceholder: '画像をアップロードする'
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
        primaryLabel: 'プライマリ（前景/テキスト）',
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
        exampleLabel: 'Prova un esempio:'
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
          showMore: 'Mostra più colori'
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
          extractionError: 'Errore nell\'estrazione dei colori'
        },
        contrastChecker: {
          result: 'Risultato Contrasto',
          foreground: 'Primo Piano',
          background: 'Sfondo'
        }
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
        shareText: 'Ho generato una palette di colori per ~'
      },
      randomColor: {
        title: 'Generatore di Colori Casuali',
        seoTitle: 'Generatore di Colori Casuali - ColorMagic',
        seoDescription: 'Genera colori casuali all\'istante con un semplice clic (o con la barra spaziatrice).',
        generateLabel: 'Genera Colore Casuale'
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
        uploadPlaceholder: 'Carica un\'immagine'
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
    }
  }
}));
