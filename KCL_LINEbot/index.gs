function doPost(e) {
  let useProperties = PropertiesService.getScriptProperties();
  let token = useProperties.getProperty("token");
  let eventData = JSON.parse(e.postData.contents).events[0];
  let replyToken = eventData.replyToken;
  // let json = JSON.parse(e.postData.contents);
  // let events = json.events;
  let userMessage = eventData.message.text;
  let replyMessage = "";
  let url = "https://api.line.me/v2/bot/message/reply"


  if(userMessage == "1") {
    // 1→KCLについて
    replyMessage = aboutKcl();  
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "2") {
    // 2→パートナー企業について
    replyMessage = partenerCompany();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "3"){
    
    // 3→KCLのコンテンツについて
    replyMessage = contents();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
    "type": "template",
    "altText": "This is a buttons template",
    "template": {
      "type": "buttons",
      "title": "input項目",
      "text": "何について知りたいですか？",
      "actions": [
        {
          "type": "message",
          "label": "コードを学ぶ",
          "text": "コードを学ぶ"
        },
        {
          "type": "message",
          "label": "エンジニアセミナー",
          "text": "エンジニアセミナー"
        },
        {
          "type": "message",
          "label": "ミートアップ",
          "text": "ミートアップ"
        }
      ]
    }
  },
  {
    "type": "template",
    "altText": "This is a buttons template",
    "template": {
      "type": "buttons",
      "title": "output項目",
      "text": "何について知りたいですか？",
      "actions": [
        {
          "type": "message",
          "label": "プロダクトを作る",
          "text": "プロダクトを作る"
        },
        {
          "type": "message",
          "label": "LTイベント",
          "text": "LTイベント"
        },
        {
          "type": "message",
          "label": "ピッチコンテスト",
          "text": "ピッチコンテスト"
        }
      ]
    }
  }
  ];
    
  } else if(userMessage == "4"){
    // 4→OB/OGエンジニアセミナーについて
    replyMessage = seminar();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
        "type": "template",
        "altText": "This is a buttons template",
        "template": {
          "type": "buttons",
          "title": "エンジニアセミナー",
          "text": "どのカリキュラムを知りたいですか？",
          "actions": [
            {
              "type": "message",
              "label": "基礎スキル講座",
              "text": "基礎スキル講座"
            },
            {
              "type": "message",
              "label": "専門スキル講座",
              "text": "専門スキル講座"
            },
            {
              "type": "message",
              "label": "実践スキル講座",
              "text": "実践スキル講座"
            }
          ]
        }
      }
      ];
    
  } else if(userMessage == "5"){
    // 5→KCLに所属するには？
    replyMessage = affiliationMethod();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];
   
  } else if(userMessage == "コードを学ぶ") {
    replyMessage = cona();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "エンジニアセミナー"){
    replyMessage = conb();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "ミートアップ"){
    replyMessage = conc();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "プロダクトを作る") {
    replyMessage = cond();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "LTイベント"){
    replyMessage = cone();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "ピッチコンテスト"){
    replyMessage = conf();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];
    
  } else if(userMessage == "基礎スキル講座") {
    replyMessage = conx();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "専門スキル講座"){
    replyMessage = cony();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];

  } else if(userMessage == "実践スキル講座"){
    replyMessage = conz();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      },
      {
       'type': 'text',
       'text': "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？"
      }
      ];
    
  } else {
    replyMessage = reply();
    replyInfo = [
      {
       'type': 'text',
       'text': replyMessage
      }
      ];
    
  }


// 返信オプション
  let payload = {
   'replyToken': replyToken,
   'messages': replyInfo
    };
    
  let options = {
    'payload' : JSON.stringify(payload),
    'myamethod'  : 'POST',
    'headers' : {"Authorization" : "Bearer " + token},
    'contentType' : 'application/json'
  };
  UrlFetchApp.fetch(url, options);
  
}

// 1
function aboutKcl(){
  const content = "KCL（Kyutech Code LAB）は、「世の中の課題をITで解決できるエンジニア」の育成を目的とした産学連携プロジェクトです。九州工業大学が、OB/OGを中心としたエンジニアやパートナー企業と連携してカリキュラム・学習環境をつくり、全学科・全専攻・全学年の九工大生を対象とした講座を開講しました。コードを学ぶだけではなく、実際にプロダクトを創り、世の中の課題を解決するところまで、実践的に学習できる講座となっています。";
  
    return content;
  
  
}
// 2
function partenerCompany(){
  const content ="パートナー企業紹介"+
    "\n\n・NTTデータ九州"+
    "\n・オイシックス・ラ・大地"+
    "\n・オービック"+
    "\n・Qtnet"+
    "\n・京セラ"+
    "\n・SUMCO"+
    "\n・GMOインターネットグループ"+
    "\n・トヨタ自動車九州"+
    "\n・日鉄ソリューションズ"+
    "\n・パイプドHD"+
    "\n・ファイバーゲート"+
    "\n・村田製作所"+
    "\n・ラック"+
    "\n・Relic"+
    "\n　等";
    
    return content;
}

// 3
function contents(){
  const content = "KCLの6つのコンテンツ"+
    "\nKCLでは、インプット（グループでのプログラミング学習・エンジニアセミナー・ミートアップ）と、アウトプット（プロダクト開発を通した社会の課題解決・開発したプロダクトや日頃の学習を発表するLTイベントとピッチコンテスト）の２つの視点で体系的な実践学習を行い、世の中の課題をITで解決できるエンジニアに必要なスキルを習得していく講座を予定しています。"
  
    return content;
}

// 3-a
function cona(){
  const content = "コードを学ぶ(input)"+
    "\n\nプログラミング学習サービスを活用して、グループでプログラミング学習を進めていきます。また、OB/OGがサポートを行うため、学年や所属する専攻に関係なく安心して進めることができます。";
    return content;
}

// 3-b
function conb(){
  const content = "エンジニアセミナー(input)"+
    "\n\nOB/OGを中心とした現役エンジニアが毎月3,4回のセミナー講座を実施します。「基礎」「実践」「専門」の３分野でITスキルを身につけるカリキュラムを準備しており、アーカイブ動画で過去のセミナーを閲覧することも可能です。";
    return content;
}

// 3-c
function conc(){
  const content = "ミートアップ(input)"+
    "\n\nパートナー企業との交流によって、業界・企業の業務やエンジニアのキャリアを知ることで、在学中に何に力を入れるとよいか、どんなことを学ぶと卒業後にエンジニアとして活躍できるのかを考えるきっかけになるイベントです。";
    return content;
}

// 3-d
function cond(){
  const content = "プロダクトを作る(output)"+
    "\n\nコードを学びながら、セミナーやミートアップでエンジニアからのアドバイスを元に、興味のある分野のプロダクト開発にチャレンジします。開発手順や、世の中の課題への向き合い方について、OB/OGからアドバイスもあります。";
    return content;
}

// 3-e
function cone(){
  const content = "LTイベント(output)"+
    "\n\n日頃の学習や、開発に関する活動を学生がフランクに発表するイベントです。毎月5,6人の学生が登壇し、お互いの学びを共有、OB/OGなどからフィードバックをもらうことで、発表の練習や今後の活動に繋げていきます。";
    return content;
}

// 3-f
function conf(){
  const content = "ピッチコンテスト(output)"+
    "\n\n半年に一回、大規模なピッチコンテストを対面とオンラインのハイブリッド形式で開催します。企業、OB/OG、大学の教職員等が審査員として参加します。優秀者を表彰し、記念品が授与されます。";
    return content;
}

// 4
function seminar(){
  const content = "OB/OG Seminar"+
    "\nKCLでは、開発の基礎を体系的に理解するための「基礎スキル講座」、開発の専門分野を学ぶきっかけを作る「専門スキル講座」、開発の実践で使うITスキルを学ぶ「実践スキル講座」の３種類の講座を、OB/OGを中心としたエンジニアが対面またはオンラインで登壇し、セミナー形式で行います。ITスキルを身につけたい！、さらにレベルアップしたい！学生を対象にしています。";
    
    return content;
}

// 4-x
function conx(){
  return content = "基礎スキル講座"+
    "\n\n・DOM(HTML,CSS)\n・JavaScript\n・SQL\n・Linux\n・MVC\n・バージョン\n・HTTP\n・リーダブル\n・要件定義";
}

// 4-y
function cony(){
  return content = "専門スキル講座"+
    "\n\n・データ分析\n・IoT\n・ブロックチェーン\n・セキュリティ\n・EC\n・XR\n　その他多数";
}

// 4-z
function conz(){
  return content = "実践スキル講座"+
    "\n\nインフラ"+
    "\n　・クラウド\n　・XaaS\n　・コンテナ\n　・サーバレス"+
    "\n開発手法"+
    "\n　・アジャイル（プロジェクト）\n　・アジャイル（TDD）\n　・CI/CD\n　・IaC\n　・テスト（品質管理）"+
    "\nフロントエンド"+
    "\n　・フロントエンドコード\n　・フレームワーク\n　・UI/UX\n　・モバイル"+
    "\nアプリケーション"+
    "\n　・アプリケーションコード\n　・フレームワーク\n　・UI/UX\n　・モバイル";
}

// 5
function affiliationMethod(){
  const content = "KCL（Kyutech Code LAB）に参加してみませんか。「プログラミングに興味がある」「実践力を身に付けたい」「コードを書くのが好き」「一緒に学ぶ仲間やコミュニティが欲しい」「就職やキャリアのことが気になる」「現役エンジニアやOB/OGと繋がりたい」「何か新しいことにチャレンジしたい！」など、どんな理由でも大丈夫です。積極的な参加をお待ちしています。\n\n"+
"主催　　：九州工業大学\n"+
"参加対象：九州工大学の在学生（全学年・全学部・全大学院の学生が参加可能）\n\n"+
"受講料　：無料\n"+
"※ 本講座は授業ではないので、単位は修得できませんのでご留意ください。\n\n"+
"以下のリンクよりキャリタスUCのお知らせから申込フォーム送信すると、KCLの参加案内をお送りします。\n"+
"キャリタスUC内の「お知らせ一覧を見る」から入っていってください。\n"+
"https://uc-student.jp/kyutech/";
  return content;
}

function reply(){
  const content = "KCLについて何が知りたいですか？"+"\n(半角で番号で答えてください）"+"\n1: KCLとは？"+"\n2: パートナー企業について"+"\n3: KCLのコンテンツについて"+"\n4: OB/OGエンジニアセミナーについて"+"\n5: KCLに所属するには？";
  
  return content;
}