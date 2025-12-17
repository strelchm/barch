function t(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_barch {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BARCH-БАНКИНГ</B></FONT>>,
            likec4_depth=2,
            likec4_id=barch,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_internetbankingsystem {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>БАНКОВСКАЯ СИСТЕМА</B></FONT>>,
                likec4_depth=1,
                likec4_id="barch.internetBankingSystem",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            paymentservices [group="barch.internetBankingSystem",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Платежные сервисы</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Сервисы по работе с кошельками, клиентами,<BR/>платежами и др.</FONT></TD></TR></TABLE>>,
                likec4_id="barch.internetBankingSystem.paymentServices",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            paymentprocessing [group="barch.internetBankingSystem",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Платежный процессинг</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">СБП,Swift,Корона,Visa</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Сервисы по интеграции с платежными системами</FONT></TD></TR></TABLE>>,
                likec4_id="barch.internetBankingSystem.paymentProcessing",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
            legacybanking [group="barch.internetBankingSystem",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Legacy банкинг</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Legacy банкинг системы</FONT></TD></TR></TABLE>>,
                likec4_id="barch.internetBankingSystem.legacyBanking",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        atm [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Банкомат для получения кеша</FONT></TD></TR></TABLE>>,
            likec4_id="barch.atm",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Клиент</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">мобильный/web/ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Клиент банка</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> atm [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Получает кеш</FONT></TD></TR></TABLE>>,
        likec4_id="5bpu8y",
        style=dashed,
        weight=2];
    customer -> paymentservices [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Просмотр информации аккаунтов и<BR/>выполнение платежей</FONT></TD></TR></TABLE>>,
        likec4_id="10hhf94",
        style=dashed];
    atm -> paymentservices [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Использует</FONT></TD></TR></TABLE>>,
        likec4_id=m8zc9c,
        style=dashed,
        weight=2];
    paymentservices -> paymentprocessing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Запрос на обработку платежа</FONT></TD></TR></TABLE>>,
        likec4_id=ghon9r,
        style=dashed];
    paymentservices -> legacybanking [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Использование логики legacy-сервисов</FONT></TD></TR></TABLE>>,
        likec4_id=fjuu31,
        style=dashed,
        weight=3];
    merchant [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Мерчант</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">мобильный/web/ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Юридическое лицо, которому должен поступить<BR/>платеж</FONT></TD></TR></TABLE>>,
        likec4_id=merchant,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    paymentprocessing -> paymentservices [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Получение информации о проведении<BR/>платежа</FONT></TD></TR></TABLE>>,
        likec4_id="1h3yh73",
        style=dashed];
    legacybanking -> merchant [arrowhead=normal,
        likec4_id="1vbnnbg",
        ltail=cluster_internetbankingsystem,
        minlen=1,
        style=dashed,
        weight=2,
        xlabel=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Уведомление о поступлении платежа со<BR/>стороны клиента</FONT></TD></TR></TABLE>>];
}
`;case"customer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=customer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_barch {
        graph [color="#1c3979",
            fillcolor="#1a468d",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>BARCH-БАНКИНГ</B></FONT>>,
            likec4_depth=2,
            likec4_id=barch,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_internetbankingsystem {
            graph [color="#1b3d88",
                fillcolor="#194b9e",
                label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>БАНКОВСКАЯ СИСТЕМА</B></FONT>>,
                likec4_depth=1,
                likec4_id="barch.internetBankingSystem",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            singlepageapplication [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">SPA</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">JavaScript</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Вся функциональность интернет банкинга в<BR/>вебраузере</FONT></TD></TR></TABLE>>,
                likec4_id="barch.internetBankingSystem.paymentServices.singlePageApplication",
                likec4_level=2,
                margin="0.278,0.306",
                width=4.445];
            mobileapp [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Мобильное приложение</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Xamarin</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Ограниченная функциональность интернет<BR/>банкинга в мобильном приложении</FONT></TD></TR></TABLE>>,
                likec4_id="barch.internetBankingSystem.paymentServices.mobileApp",
                likec4_level=2,
                margin="0.278,0.223",
                width=4.445];
            gateway [height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Envoy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">API Gateway</FONT></TD></TR></TABLE>>,
                likec4_id="barch.internetBankingSystem.paymentServices.gateway",
                likec4_level=2,
                margin="0.223,0.223",
                width=4.445];
        }
        atm [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Банкомат для получения кеша</FONT></TD></TR></TABLE>>,
            likec4_id="barch.atm",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
    }
    customer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Клиент</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">мобильный/web/ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Клиент банка</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> singlepageapplication [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Посещает barch.com по HTTPS. Просмотр<BR/>информации об аккаунтах и проведение<BR/>платежей</FONT></TD></TR></TABLE>>,
        likec4_id="1drxvnp",
        minlen=1,
        style=dashed];
    customer -> mobileapp [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Просмотр информации об аккаунтах и<BR/>проведение платежей</FONT></TD></TR></TABLE>>,
        likec4_id="1j7bjzr",
        minlen=1,
        style=dashed];
    customer -> gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">REST</FONT></TD></TR></TABLE>>,
        likec4_id=vbekem,
        minlen=1,
        style=dashed];
    customer -> atm [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Получает кеш</FONT></TD></TR></TABLE>>,
        likec4_id="5bpu8y",
        minlen=1,
        style=dashed,
        weight=3];
}
`;case"internetBankingSystemContainer":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=internetBankingSystemContainer,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    subgraph cluster_paymentservices {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ПЛАТЕЖНЫЕ СЕРВИСЫ</B></FONT>>,
            likec4_depth=1,
            likec4_id="barch.internetBankingSystem.paymentServices",
            likec4_level=0,
            margin=40,
            style=filled
        ];
        gateway [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">API Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Envoy</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">API Gateway</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.gateway",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        callbackservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Callback Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Обработка коллбеков</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.callbackService",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        antifrodservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Anti-Fraud/Scoring Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring + Flink</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Anti-Fraud/Scoring Service</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.antifrodService",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        customerservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Customer Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Customer Service</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.customerService",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        walletservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Wallet Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Wallet Service</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.walletService",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        paymentsservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Payments Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring/Temporal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Payments Service</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.paymentsService",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        callbackdatabase [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">БД коллбеков</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">PostgreSQL</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Информация о коллбеках и мерчантах</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.callbackDatabase",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        antifroddatabase [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">БД</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">PostgreSQL</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Регистрационная информация, журнал логов<BR/>операций</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.antifrodDatabase",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        customerdatabase [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">БД</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">PostgreSQL</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Регистрационная информация, журнал логов<BR/>операций, договоры</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.customerDatabase",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        walletdatabase [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">БД</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">PostgreSQL</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Информация о кошельках</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.walletDatabase",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        coreintegrationservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Core Integration / ACL (обёртка над<BR/>legacy core)</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Core Integration / ACL (обёртка над legacy<BR/>core)</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.coreIntegrationService",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        paymentbroker [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.389,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Брокер</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Kafka</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Брокер платежных сервисов</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.paymentBroker",
            likec4_level=1,
            margin="0.278,0.223",
            width=4.445];
        paymentsdatabase [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">БД</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">PostgreSQL</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Платежи</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.paymentsDatabase",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
        notificationsservice [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Notifications Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Notifications Service</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.notificationsService",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        notificationsdatabase [color="#475569",
            fillcolor="#64748b",
            fontcolor="#f8fafc",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">БД нотификаций</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Cassandra, transactional inbox</FONT></TD></TR></TABLE>>,
            likec4_id="barch.internetBankingSystem.paymentServices.notificationsDatabase",
            likec4_level=1,
            margin="0.223,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    customer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Клиент</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">мобильный/web/ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Клиент банка</FONT></TD></TR></TABLE>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">REST</FONT></TD></TR></TABLE>>,
        likec4_id=vbekem,
        minlen=1,
        style=dashed];
    atm [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">Банкомат для получения кеша</FONT></TD></TR></TABLE>>,
        likec4_id="barch.atm",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    atm -> gateway [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">REST</FONT></TD></TR></TABLE>>,
        likec4_id="1op5gdi",
        minlen=1,
        style=dashed,
        weight=2];
    paymentprocessing [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Платежный процессинг</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">СБП,Swift,Корона,Visa</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Сервисы по интеграции с платежными системами</FONT></TD></TR></TABLE>>,
        likec4_id="barch.internetBankingSystem.paymentProcessing",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    paymentprocessing -> callbackservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gRPC WEBHOOK<BR/>Получение коллбека о платеже</FONT></TD></TR></TABLE>>,
        likec4_id=wlzehh,
        style=dashed];
    gateway -> customerservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">REST<BR/>инфо о клиенте</FONT></TD></TR></TABLE>>,
        likec4_id="5yajgr",
        style=dashed,
        weight=4];
    gateway -> walletservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">REST<BR/>инфо о кошельках</FONT></TD></TR></TABLE>>,
        likec4_id="105lpk8",
        style=dashed,
        weight=4];
    gateway -> paymentsservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">REST<BR/>инфо о платежах<BR/>запрос на проведение платежа</FONT></TD></TR></TABLE>>,
        likec4_id="1myvvae",
        style=dashed,
        weight=4];
    callbackservice -> callbackdatabase [arrowhead=normal,
        likec4_id="1vtmv8y",
        minlen=1,
        style=dashed,
        weight=2];
    callbackservice -> paymentbroker [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>успешный платеж</FONT></TD></TR></TABLE>>,
        likec4_id=v6a0x3,
        style=dashed,
        weight=2];
    antifrodservice -> antifroddatabase [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Персистирование/чтение данных</FONT></TD></TR></TABLE>>,
        likec4_id="115zjm",
        minlen=1,
        style=dashed];
    antifrodservice -> paymentbroker [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>результат скоринг/фрод-проверки</FONT></TD></TR></TABLE>>,
        likec4_id="1dwdqn7",
        style=dashed];
    customerservice -> customerdatabase [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Персистирование/чтение данных</FONT></TD></TR></TABLE>>,
        likec4_id=nivvw2,
        minlen=1,
        style=dashed];
    customerservice -> paymentbroker [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>результат проверки клиента</FONT></TD></TR></TABLE>>,
        likec4_id=wpgx3e,
        style=dashed];
    walletservice -> walletdatabase [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Персистирование/чтение данных</FONT></TD></TR></TABLE>>,
        likec4_id="1jpjpki",
        minlen=1,
        style=dashed];
    walletservice -> paymentbroker [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>результат проверки кошелька</FONT></TD></TR></TABLE>>,
        likec4_id="4nohex",
        style=dashed];
    paymentsservice -> paymentprocessing [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gRPC<BR/>Запрос на обработку платежа</FONT></TD></TR></TABLE>>,
        likec4_id="1cm61sl",
        style=dashed];
    paymentsservice -> coreintegrationservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gRPC<BR/>Взаимодействие с легаси-банкингом</FONT></TD></TR></TABLE>>,
        likec4_id="1iyyidi",
        style=dashed,
        weight=2];
    paymentsservice -> paymentbroker [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>-запрос на проверку клиента<BR/>-запрос на проверку кошелька<BR/>-запрос на скоринг/фрод-проверку</FONT></TD></TR></TABLE>>,
        likec4_id="1j8q7tz",
        style=dashed];
    paymentsservice -> paymentsdatabase [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Персистирование/чтение данных</FONT></TD></TR></TABLE>>,
        likec4_id="12bf41e",
        minlen=1,
        style=dashed,
        weight=2];
    legacybanking [height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Legacy банкинг</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#bfdbfe">Spring</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Legacy банкинг системы</FONT></TD></TR></TABLE>>,
        likec4_id="barch.internetBankingSystem.legacyBanking",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    coreintegrationservice -> legacybanking [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Использование легаси-функциональности</FONT></TD></TR></TABLE>>,
        likec4_id="1l1fbob",
        style=dashed];
    paymentbroker -> antifrodservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>-обработка скоринг/фрод-проверки<BR/>-успешный платеж</FONT></TD></TR></TABLE>>,
        likec4_id="1jsbqg3",
        style=dashed];
    paymentbroker -> customerservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>обработка проверки клиента</FONT></TD></TR></TABLE>>,
        likec4_id="1x3dway",
        style=dashed];
    paymentbroker -> walletservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>-обработка проверки кошелька<BR/>-успешный платеж</FONT></TD></TR></TABLE>>,
        likec4_id="3khlwp",
        style=dashed];
    paymentbroker -> paymentsservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>-результаты всех проверок<BR/>-успешный платеж</FONT></TD></TR></TABLE>>,
        likec4_id=m5k8mf,
        style=dashed];
    paymentbroker -> notificationsservice [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">event<BR/>успешный платеж</FONT></TD></TR></TABLE>>,
        likec4_id="1355lww",
        style=dashed,
        weight=4];
    notificationsservice -> notificationsdatabase [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Персистирование/чтение данных</FONT></TD></TR></TABLE>>,
        likec4_id=u6vitu,
        minlen=1,
        style=dashed,
        weight=4];
    merchant [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Мерчант</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#c2f0c2">мобильный/web/ATM</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c2f0c2">Юридическое лицо, которому должен поступить<BR/>платеж</FONT></TD></TR></TABLE>>,
        likec4_id=merchant,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    notificationsservice -> merchant [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">Event: поступлении платежа со стороны<BR/>клиента</FONT></TD></TR></TABLE>>,
        likec4_id=ssqc7v,
        minlen=1,
        style=dashed];
    notificationsservice -> legacybanking [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">smtp/https<BR/>Отправка пушей</FONT></TD></TR></TABLE>>,
        likec4_id="3jlleo",
        style=dashed,
        weight=3];
    legacybankingdatabase [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">БД</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Oracle</FONT></TD></TR></TABLE>>,
        likec4_id="barch.internetBankingSystem.legacyBankingDatabase",
        likec4_level=0,
        margin="0.223,0",
        penwidth=2,
        shape=cylinder,
        width=4.445];
    legacybanking -> legacybankingdatabase [arrowhead=normal,
        likec4_id=b0q827,
        minlen=0,
        style=dashed,
        weight=2];
}
`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1507pt" height="1543pt"
 viewBox="0.00 0.00 1507.00 1543.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1527.65)">
<g id="clust1" class="cluster">
<title>cluster_barch</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-249 8,-1241.8 1232,-1241.8 1232,-249 8,-249"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1228.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BARCH&#45;БАНКИНГ</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-289 48,-909.8 1192,-909.8 1192,-289 48,-289"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-896.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">БАНКОВСКАЯ СИСТЕМА</text>
</g>
<!-- paymentservices -->
<g id="node1" class="node">
<title>paymentservices</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1063.5,-848.6 702.5,-848.6 702.5,-668.6 1063.5,-668.6 1063.5,-848.6"/>
<text xml:space="preserve" text-anchor="start" x="791.32" y="-772.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Платежные сервисы</text>
<text xml:space="preserve" text-anchor="start" x="722.55" y="-749.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Сервисы по работе с кошельками, клиентами,</text>
<text xml:space="preserve" text-anchor="start" x="826.74" y="-731.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">платежами и др.</text>
</g>
<!-- paymentprocessing -->
<g id="node2" class="node">
<title>paymentprocessing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="544.01,-509 157.99,-509 157.99,-329 544.01,-329 544.01,-509"/>
<text xml:space="preserve" text-anchor="start" x="242.65" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Платежный процессинг</text>
<text xml:space="preserve" text-anchor="start" x="286.35" y="-412.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">СБП,Swift,Корона,Visa</text>
<text xml:space="preserve" text-anchor="start" x="178.05" y="-390.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Сервисы по интеграции с платежными системами</text>
</g>
<!-- legacybanking -->
<g id="node3" class="node">
<title>legacybanking</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1043.02,-509 722.98,-509 722.98,-329 1043.02,-329 1043.02,-509"/>
<text xml:space="preserve" text-anchor="start" x="809.08" y="-433.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Legacy банкинг</text>
<text xml:space="preserve" text-anchor="start" x="864.21" y="-412.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring</text>
<text xml:space="preserve" text-anchor="start" x="796.3" y="-390.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Legacy банкинг системы</text>
</g>
<!-- atm -->
<g id="node4" class="node">
<title>atm</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1043.02,-1180.6 722.98,-1180.6 722.98,-1000.6 1043.02,-1000.6 1043.02,-1180.6"/>
<text xml:space="preserve" text-anchor="start" x="861.89" y="-1095.6" font-family="Arial" font-size="20.00" fill="#f8fafc">ATM</text>
<text xml:space="preserve" text-anchor="start" x="776.73" y="-1072.1" font-family="Arial" font-size="15.00" fill="#cbd5e1">Банкомат для получения кеша</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1043.02,-1512.6 722.98,-1512.6 722.98,-1332.6 1043.02,-1332.6 1043.02,-1512.6"/>
<text xml:space="preserve" text-anchor="start" x="849.66" y="-1437.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Клиент</text>
<text xml:space="preserve" text-anchor="start" x="821.24" y="-1415.7" font-family="Arial" font-size="13.00" fill="#c2f0c2">мобильный/web/ATM</text>
<text xml:space="preserve" text-anchor="start" x="835.07" y="-1394.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">Клиент банка</text>
</g>
<!-- merchant -->
<g id="node6" class="node">
<title>merchant</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1071.84,-180 694.16,-180 694.16,0 1071.84,0 1071.84,-180"/>
<text xml:space="preserve" text-anchor="start" x="844.1" y="-113.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Мерчант</text>
<text xml:space="preserve" text-anchor="start" x="821.24" y="-92.1" font-family="Arial" font-size="13.00" fill="#c2f0c2">мобильный/web/ATM</text>
<text xml:space="preserve" text-anchor="start" x="714.22" y="-70.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">Юридическое лицо, которому должен поступить</text>
<text xml:space="preserve" text-anchor="start" x="858" y="-52.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">платеж</text>
</g>
<!-- paymentservices&#45;&gt;paymentprocessing -->
<g id="edge4" class="edge">
<title>paymentservices&#45;&gt;paymentprocessing</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M702.7,-744.94C515.45,-727.6 240.81,-688.94 175.63,-608.6 150.44,-577.55 164.24,-545.18 192.88,-516.2"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="194.69,-518.1 198.28,-511.01 191.05,-514.31 194.69,-518.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="175.63,-577.4 175.63,-600.2 380,-600.2 380,-577.4 175.63,-577.4"/>
<text xml:space="preserve" text-anchor="start" x="178.63" y="-584.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Запрос на обработку платежа</text>
</g>
<!-- paymentservices&#45;&gt;legacybanking -->
<g id="edge5" class="edge">
<title>paymentservices&#45;&gt;legacybanking</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M883,-668.9C883,-622.94 883,-566.67 883,-519.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="885.63,-519.51 883,-512.01 880.38,-519.51 885.63,-519.51"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="883,-577.4 883,-600.2 1151.95,-600.2 1151.95,-577.4 883,-577.4"/>
<text xml:space="preserve" text-anchor="start" x="886" y="-584.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Использование логики legacy&#45;сервисов</text>
</g>
<!-- paymentprocessing&#45;&gt;paymentservices -->
<g id="edge6" class="edge">
<title>paymentprocessing&#45;&gt;paymentservices</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M463.21,-508.87C506.51,-541.67 557.07,-578.22 604.95,-608.6 634.65,-627.44 666.94,-646.2 698.66,-663.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="697.1,-665.88 704.93,-667.2 699.63,-661.28 697.1,-665.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="604.95,-569 604.95,-608.6 856,-608.6 856,-569 604.95,-569"/>
<text xml:space="preserve" text-anchor="start" x="607.95" y="-593" font-family="Arial" font-size="14.00" fill="#c6c6c6">Получение информации о проведении</text>
<text xml:space="preserve" text-anchor="start" x="607.95" y="-576.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">платежа</text>
</g>
<!-- legacybanking&#45;&gt;merchant -->
<g id="edge7" class="edge">
<title>legacybanking&#45;&gt;merchant</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M883,-289C883,-256.2 883,-221.45 883,-190.38"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="885.63,-190.43 883,-182.93 880.38,-190.43 885.63,-190.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="612.5,-234.36 612.5,-273.96 883,-273.96 883,-234.36 612.5,-234.36"/>
<text xml:space="preserve" text-anchor="start" x="615.5" y="-258.36" font-family="Arial" font-size="14.00" fill="#c6c6c6">Уведомление о поступлении платежа со</text>
<text xml:space="preserve" text-anchor="start" x="615.5" y="-241.56" font-family="Arial" font-size="14.00" fill="#c6c6c6">стороны клиента</text>
</g>
<!-- atm&#45;&gt;paymentservices -->
<g id="edge3" class="edge">
<title>atm&#45;&gt;paymentservices</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M883,-1000.73C883,-956.9 883,-903.88 883,-858.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="885.63,-858.87 883,-851.37 880.38,-858.87 885.63,-858.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="883,-917.8 883,-940.6 966.79,-940.6 966.79,-917.8 883,-917.8"/>
<text xml:space="preserve" text-anchor="start" x="886" y="-925" font-family="Arial" font-size="14.00" fill="#c6c6c6">Использует</text>
</g>
<!-- customer&#45;&gt;paymentservices -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;paymentservices</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1042.79,-1343.36C1083.13,-1316.43 1122.47,-1282.56 1149,-1241.8 1228.63,-1119.44 1280.03,-1041.81 1203,-917.8 1173.14,-869.73 1123.87,-835.82 1072.83,-812.09"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1073.95,-809.72 1066.04,-809.02 1071.79,-814.5 1073.95,-809.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1240.98,-1070.8 1240.98,-1110.4 1476.47,-1110.4 1476.47,-1070.8 1240.98,-1070.8"/>
<text xml:space="preserve" text-anchor="start" x="1243.98" y="-1094.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Просмотр информации аккаунтов и</text>
<text xml:space="preserve" text-anchor="start" x="1243.98" y="-1078" font-family="Arial" font-size="14.00" fill="#c6c6c6">выполнение платежей</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M883,-1332.73C883,-1288.9 883,-1235.88 883,-1190.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="885.63,-1190.87 883,-1183.37 880.38,-1190.87 885.63,-1190.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="883,-1249.8 883,-1272.6 978.46,-1272.6 978.46,-1249.8 883,-1249.8"/>
<text xml:space="preserve" text-anchor="start" x="886" y="-1257" font-family="Arial" font-size="14.00" fill="#c6c6c6">Получает кеш</text>
</g>
</g>
</svg>
`;case"customer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1857pt" height="725pt"
 viewBox="0.00 0.00 1857.00 725.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 709.85)">
<g id="clust1" class="cluster">
<title>cluster_barch</title>
<polygon fill="#1a468d" stroke="#1c3979" points="8,-8 8,-390.4 1819,-390.4 1819,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-377.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">BARCH&#45;БАНКИНГ</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_internetbankingsystem</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="48,-48 48,-329.2 1389,-329.2 1389,-48 48,-48"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-316.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">БАНКОВСКАЯ СИСТЕМА</text>
</g>
<!-- singlepageapplication -->
<g id="node1" class="node">
<title>singlepageapplication</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="452.38,-268 87.62,-268 87.62,-88 452.38,-88 452.38,-268"/>
<text xml:space="preserve" text-anchor="start" x="249.99" y="-201.8" font-family="Arial" font-size="20.00" fill="#eff6ff">SPA</text>
<text xml:space="preserve" text-anchor="start" x="239.66" y="-180.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">JavaScript</text>
<text xml:space="preserve" text-anchor="start" x="111.64" y="-158.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Вся функциональность интернет банкинга в</text>
<text xml:space="preserve" text-anchor="start" x="228.33" y="-140.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">вебраузере</text>
</g>
<!-- mobileapp -->
<g id="node2" class="node">
<title>mobileapp</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="919.21,-268 562.79,-268 562.79,-88 919.21,-88 919.21,-268"/>
<text xml:space="preserve" text-anchor="start" x="632.65" y="-201.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Мобильное приложение</text>
<text xml:space="preserve" text-anchor="start" x="716.8" y="-180.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Xamarin</text>
<text xml:space="preserve" text-anchor="start" x="586.8" y="-158.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Ограниченная функциональность интернет</text>
<text xml:space="preserve" text-anchor="start" x="618.06" y="-140.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">банкинга в мобильном приложении</text>
</g>
<!-- gateway -->
<g id="node3" class="node">
<title>gateway</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1349.02,-268 1028.98,-268 1028.98,-88 1349.02,-88 1349.02,-268"/>
<text xml:space="preserve" text-anchor="start" x="1130.64" y="-192.8" font-family="Arial" font-size="20.00" fill="#eff6ff">API Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1170.93" y="-171.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Envoy</text>
<text xml:space="preserve" text-anchor="start" x="1145.23" y="-149.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">API Gateway</text>
</g>
<!-- atm -->
<g id="node4" class="node">
<title>atm</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1779.02,-268 1458.98,-268 1458.98,-88 1779.02,-88 1779.02,-268"/>
<text xml:space="preserve" text-anchor="start" x="1597.89" y="-183" font-family="Arial" font-size="20.00" fill="#f8fafc">ATM</text>
<text xml:space="preserve" text-anchor="start" x="1512.73" y="-159.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">Банкомат для получения кеша</text>
</g>
<!-- customer -->
<g id="node5" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1564.02,-694.8 1243.98,-694.8 1243.98,-514.8 1564.02,-514.8 1564.02,-694.8"/>
<text xml:space="preserve" text-anchor="start" x="1370.66" y="-619.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Клиент</text>
<text xml:space="preserve" text-anchor="start" x="1342.24" y="-597.9" font-family="Arial" font-size="13.00" fill="#c2f0c2">мобильный/web/ATM</text>
<text xml:space="preserve" text-anchor="start" x="1356.07" y="-576.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Клиент банка</text>
</g>
<!-- customer&#45;&gt;singlepageapplication -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;singlepageapplication</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1244.4,-597.95C1054.64,-584.14 735.13,-538.67 508,-390.4 457.35,-357.34 406.51,-313.91 364.9,-275.02"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="366.71,-273.12 359.45,-269.89 363.11,-276.94 366.71,-273.12"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="616.39,-398.4 616.39,-454.8 893.11,-454.8 893.11,-398.4 616.39,-398.4"/>
<text xml:space="preserve" text-anchor="start" x="619.39" y="-439.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Посещает barch.com по HTTPS. Просмотр</text>
<text xml:space="preserve" text-anchor="start" x="619.39" y="-422.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">информации об аккаунтах и проведение</text>
<text xml:space="preserve" text-anchor="start" x="619.39" y="-405.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">платежей</text>
</g>
<!-- customer&#45;&gt;mobileapp -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;mobileapp</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1244.26,-557.91C1172.74,-533.37 1089.34,-498.99 1021.06,-454.8 945.26,-405.74 873.01,-333.72 820.88,-275.58"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="822.94,-273.95 815.99,-270.1 819.02,-277.44 822.94,-273.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1021.06,-406.8 1021.06,-446.4 1276,-446.4 1276,-406.8 1021.06,-406.8"/>
<text xml:space="preserve" text-anchor="start" x="1024.06" y="-430.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Просмотр информации об аккаунтах и</text>
<text xml:space="preserve" text-anchor="start" x="1024.06" y="-414" font-family="Arial" font-size="14.00" fill="#c6c6c6">проведение платежей</text>
</g>
<!-- customer&#45;&gt;gateway -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1359.06,-515.01C1323.82,-445.38 1274.83,-348.58 1238.47,-276.75"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1240.98,-275.89 1235.25,-270.38 1236.29,-278.26 1240.98,-275.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1328.32,-415.2 1328.32,-438 1371.66,-438 1371.66,-415.2 1328.32,-415.2"/>
<text xml:space="preserve" text-anchor="start" x="1331.32" y="-422.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">REST</text>
</g>
<!-- customer&#45;&gt;atm -->
<g id="edge4" class="edge">
<title>customer&#45;&gt;atm</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1448.94,-515.01C1484.18,-445.38 1533.17,-348.58 1569.53,-276.75"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1571.71,-278.26 1572.75,-270.38 1567.02,-275.89 1571.71,-278.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1505.05,-415.2 1505.05,-438 1600.52,-438 1600.52,-415.2 1505.05,-415.2"/>
<text xml:space="preserve" text-anchor="start" x="1508.05" y="-422.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Получает кеш</text>
</g>
</g>
</svg>
`;case"internetBankingSystemContainer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="3856pt" height="2274pt"
 viewBox="0.00 0.00 3856.00 2274.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 2258.65)">
<g id="clust1" class="cluster">
<title>cluster_paymentservices</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="202.02,-282.8 202.02,-1972.8 2540.02,-1972.8 2540.02,-282.8 202.02,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="210.02" y="-1959.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ПЛАТЕЖНЫЕ СЕРВИСЫ</text>
</g>
<!-- gateway -->
<g id="node1" class="node">
<title>gateway</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="750.04,-1911.6 430,-1911.6 430,-1731.6 750.04,-1731.6 750.04,-1911.6"/>
<text xml:space="preserve" text-anchor="start" x="531.66" y="-1836.4" font-family="Arial" font-size="20.00" fill="#eff6ff">API Gateway</text>
<text xml:space="preserve" text-anchor="start" x="571.95" y="-1814.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Envoy</text>
<text xml:space="preserve" text-anchor="start" x="546.25" y="-1793.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">API Gateway</text>
</g>
<!-- callbackservice -->
<g id="node2" class="node">
<title>callbackservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2264.04,-1911.6 1944,-1911.6 1944,-1731.6 2264.04,-1731.6 2264.04,-1911.6"/>
<text xml:space="preserve" text-anchor="start" x="2029.55" y="-1836.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Callback Service</text>
<text xml:space="preserve" text-anchor="start" x="2085.23" y="-1814.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring</text>
<text xml:space="preserve" text-anchor="start" x="2026.92" y="-1793.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Обработка коллбеков</text>
</g>
<!-- antifrodservice -->
<g id="node3" class="node">
<title>antifrodservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1971.04,-842.4 1651,-842.4 1651,-662.4 1971.04,-662.4 1971.04,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="1691.53" y="-767.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Anti&#45;Fraud/Scoring Service</text>
<text xml:space="preserve" text-anchor="start" x="1771.1" y="-745.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring + Flink</text>
<text xml:space="preserve" text-anchor="start" x="1721.4" y="-724.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Anti&#45;Fraud/Scoring Service</text>
</g>
<!-- customerservice -->
<g id="node4" class="node">
<title>customerservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1021.04,-1572 701,-1572 701,-1392 1021.04,-1392 1021.04,-1572"/>
<text xml:space="preserve" text-anchor="start" x="781.55" y="-1496.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Customer Service</text>
<text xml:space="preserve" text-anchor="start" x="842.23" y="-1475.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring</text>
<text xml:space="preserve" text-anchor="start" x="801.42" y="-1453.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Customer Service</text>
</g>
<!-- walletservice -->
<g id="node5" class="node">
<title>walletservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="562.04,-842.4 242,-842.4 242,-662.4 562.04,-662.4 562.04,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="338.11" y="-767.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Wallet Service</text>
<text xml:space="preserve" text-anchor="start" x="383.23" y="-745.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring</text>
<text xml:space="preserve" text-anchor="start" x="354.09" y="-724.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Wallet Service</text>
</g>
<!-- paymentsservice -->
<g id="node6" class="node">
<title>paymentsservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1034.04,-842.4 714,-842.4 714,-662.4 1034.04,-662.4 1034.04,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="793.43" y="-767.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Payments Service</text>
<text xml:space="preserve" text-anchor="start" x="825.97" y="-745.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring/Temporal</text>
<text xml:space="preserve" text-anchor="start" x="813.58" y="-724.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Payments Service</text>
</g>
<!-- callbackdatabase -->
<g id="node7" class="node">
<title>callbackdatabase</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M2264.04,-1199.24C2264.04,-1208.27 2192.32,-1215.6 2104.02,-1215.6 2015.72,-1215.6 1944,-1208.27 1944,-1199.24 1944,-1199.24 1944,-1051.96 1944,-1051.96 1944,-1042.93 2015.72,-1035.6 2104.02,-1035.6 2192.32,-1035.6 2264.04,-1042.93 2264.04,-1051.96 2264.04,-1051.96 2264.04,-1199.24 2264.04,-1199.24"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M2264.04,-1199.24C2264.04,-1190.21 2192.32,-1182.87 2104.02,-1182.87 2015.72,-1182.87 1944,-1190.21 1944,-1199.24"/>
<text xml:space="preserve" text-anchor="start" x="2040.12" y="-1140.4" font-family="Arial" font-size="20.00" fill="#f8fafc">БД коллбеков</text>
<text xml:space="preserve" text-anchor="start" x="2068.61" y="-1118.7" font-family="Arial" font-size="13.00" fill="#cbd5e1">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="1970.66" y="-1097.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">Информация о коллбеках и мерчантах</text>
</g>
<!-- antifroddatabase -->
<g id="node8" class="node">
<title>antifroddatabase</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M1989.44,-486.44C1989.44,-495.47 1909.47,-502.8 1811.02,-502.8 1712.57,-502.8 1632.6,-495.47 1632.6,-486.44 1632.6,-486.44 1632.6,-339.16 1632.6,-339.16 1632.6,-330.13 1712.57,-322.8 1811.02,-322.8 1909.47,-322.8 1989.44,-330.13 1989.44,-339.16 1989.44,-339.16 1989.44,-486.44 1989.44,-486.44"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M1989.44,-486.44C1989.44,-477.41 1909.47,-470.07 1811.02,-470.07 1712.57,-470.07 1632.6,-477.41 1632.6,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="1799.91" y="-436.6" font-family="Arial" font-size="20.00" fill="#f8fafc">БД</text>
<text xml:space="preserve" text-anchor="start" x="1775.61" y="-414.9" font-family="Arial" font-size="13.00" fill="#cbd5e1">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="1652.66" y="-393.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">Регистрационная информация, журнал логов</text>
<text xml:space="preserve" text-anchor="start" x="1777.68" y="-375.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">операций</text>
</g>
<!-- customerdatabase -->
<g id="node9" class="node">
<title>customerdatabase</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M1095.44,-1199.24C1095.44,-1208.27 1015.47,-1215.6 917.02,-1215.6 818.57,-1215.6 738.6,-1208.27 738.6,-1199.24 738.6,-1199.24 738.6,-1051.96 738.6,-1051.96 738.6,-1042.93 818.57,-1035.6 917.02,-1035.6 1015.47,-1035.6 1095.44,-1042.93 1095.44,-1051.96 1095.44,-1051.96 1095.44,-1199.24 1095.44,-1199.24"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M1095.44,-1199.24C1095.44,-1190.21 1015.47,-1182.87 917.02,-1182.87 818.57,-1182.87 738.6,-1190.21 738.6,-1199.24"/>
<text xml:space="preserve" text-anchor="start" x="905.91" y="-1149.4" font-family="Arial" font-size="20.00" fill="#f8fafc">БД</text>
<text xml:space="preserve" text-anchor="start" x="881.61" y="-1127.7" font-family="Arial" font-size="13.00" fill="#cbd5e1">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="758.66" y="-1106.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">Регистрационная информация, журнал логов</text>
<text xml:space="preserve" text-anchor="start" x="846.17" y="-1088.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">операций, договоры</text>
</g>
<!-- walletdatabase -->
<g id="node10" class="node">
<title>walletdatabase</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M562.04,-486.44C562.04,-495.47 490.32,-502.8 402.02,-502.8 313.72,-502.8 242,-495.47 242,-486.44 242,-486.44 242,-339.16 242,-339.16 242,-330.13 313.72,-322.8 402.02,-322.8 490.32,-322.8 562.04,-330.13 562.04,-339.16 562.04,-339.16 562.04,-486.44 562.04,-486.44"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M562.04,-486.44C562.04,-477.41 490.32,-470.07 402.02,-470.07 313.72,-470.07 242,-477.41 242,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="390.91" y="-427.6" font-family="Arial" font-size="20.00" fill="#f8fafc">БД</text>
<text xml:space="preserve" text-anchor="start" x="366.61" y="-405.9" font-family="Arial" font-size="13.00" fill="#cbd5e1">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="314.5" y="-384.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">Информация о кошельках</text>
</g>
<!-- coreintegrationservice -->
<g id="node11" class="node">
<title>coreintegrationservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1058.03,-502.8 690.01,-502.8 690.01,-322.8 1058.03,-322.8 1058.03,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="710.07" y="-448.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Core Integration / ACL (обёртка над</text>
<text xml:space="preserve" text-anchor="start" x="819.55" y="-424.6" font-family="Arial" font-size="20.00" fill="#eff6ff">legacy core)</text>
<text xml:space="preserve" text-anchor="start" x="855.23" y="-402.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring</text>
<text xml:space="preserve" text-anchor="start" x="727.29" y="-381.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Core Integration / ACL (обёртка над legacy</text>
<text xml:space="preserve" text-anchor="start" x="856.93" y="-363.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">core)</text>
</g>
<!-- paymentbroker -->
<g id="node12" class="node">
<title>paymentbroker</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1834.04,-1211.6 1514,-1211.6 1514,-1039.6 1834.04,-1039.6 1834.04,-1211.6"/>
<text xml:space="preserve" text-anchor="start" x="1640.68" y="-1140.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Брокер</text>
<text xml:space="preserve" text-anchor="start" x="1657.4" y="-1118.7" font-family="Arial" font-size="13.00" fill="#cbd5e1">Kafka</text>
<text xml:space="preserve" text-anchor="start" x="1574" y="-1097.3" font-family="Arial" font-size="15.00" fill="#cbd5e1">Брокер платежных сервисов</text>
</g>
<!-- paymentsdatabase -->
<g id="node13" class="node">
<title>paymentsdatabase</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M1488.04,-486.44C1488.04,-495.47 1416.32,-502.8 1328.02,-502.8 1239.72,-502.8 1168,-495.47 1168,-486.44 1168,-486.44 1168,-339.16 1168,-339.16 1168,-330.13 1239.72,-322.8 1328.02,-322.8 1416.32,-322.8 1488.04,-330.13 1488.04,-339.16 1488.04,-339.16 1488.04,-486.44 1488.04,-486.44"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M1488.04,-486.44C1488.04,-477.41 1416.32,-470.07 1328.02,-470.07 1239.72,-470.07 1168,-477.41 1168,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="1316.91" y="-427.6" font-family="Arial" font-size="20.00" fill="#f8fafc">БД</text>
<text xml:space="preserve" text-anchor="start" x="1292.61" y="-405.9" font-family="Arial" font-size="13.00" fill="#cbd5e1">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="1298.85" y="-384.5" font-family="Arial" font-size="15.00" fill="#cbd5e1">Платежи</text>
</g>
<!-- notificationsservice -->
<g id="node14" class="node">
<title>notificationsservice</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2500.04,-842.4 2180,-842.4 2180,-662.4 2500.04,-662.4 2500.04,-842.4"/>
<text xml:space="preserve" text-anchor="start" x="2249.43" y="-767.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Notifications Service</text>
<text xml:space="preserve" text-anchor="start" x="2321.23" y="-745.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring</text>
<text xml:space="preserve" text-anchor="start" x="2272.08" y="-724.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Notifications Service</text>
</g>
<!-- notificationsdatabase -->
<g id="node15" class="node">
<title>notificationsdatabase</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M2436.04,-486.44C2436.04,-495.47 2364.32,-502.8 2276.02,-502.8 2187.72,-502.8 2116,-495.47 2116,-486.44 2116,-486.44 2116,-339.16 2116,-339.16 2116,-330.13 2187.72,-322.8 2276.02,-322.8 2364.32,-322.8 2436.04,-330.13 2436.04,-339.16 2436.04,-339.16 2436.04,-486.44 2436.04,-486.44"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M2436.04,-486.44C2436.04,-477.41 2364.32,-470.07 2276.02,-470.07 2187.72,-470.07 2116,-477.41 2116,-486.44"/>
<text xml:space="preserve" text-anchor="start" x="2201.01" y="-416.6" font-family="Arial" font-size="20.00" fill="#f8fafc">БД нотификаций</text>
<text xml:space="preserve" text-anchor="start" x="2186.78" y="-394.9" font-family="Arial" font-size="13.00" fill="#cbd5e1">Cassandra, transactional inbox</text>
</g>
<!-- customer -->
<g id="node16" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="320.04,-2243.6 0,-2243.6 0,-2063.6 320.04,-2063.6 320.04,-2243.6"/>
<text xml:space="preserve" text-anchor="start" x="126.68" y="-2168.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Клиент</text>
<text xml:space="preserve" text-anchor="start" x="98.26" y="-2146.7" font-family="Arial" font-size="13.00" fill="#c2f0c2">мобильный/web/ATM</text>
<text xml:space="preserve" text-anchor="start" x="112.09" y="-2125.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">Клиент банка</text>
</g>
<!-- atm -->
<g id="node17" class="node">
<title>atm</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-2243.6 430,-2243.6 430,-2063.6 750.04,-2063.6 750.04,-2243.6"/>
<text xml:space="preserve" text-anchor="start" x="568.91" y="-2158.6" font-family="Arial" font-size="20.00" fill="#f8fafc">ATM</text>
<text xml:space="preserve" text-anchor="start" x="483.75" y="-2135.1" font-family="Arial" font-size="15.00" fill="#cbd5e1">Банкомат для получения кеша</text>
</g>
<!-- paymentprocessing -->
<g id="node18" class="node">
<title>paymentprocessing</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3796.03,-502.8 3410.01,-502.8 3410.01,-322.8 3796.03,-322.8 3796.03,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="3494.67" y="-427.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Платежный процессинг</text>
<text xml:space="preserve" text-anchor="start" x="3538.37" y="-405.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">СБП,Swift,Корона,Visa</text>
<text xml:space="preserve" text-anchor="start" x="3430.07" y="-384.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Сервисы по интеграции с платежными системами</text>
</g>
<!-- legacybanking -->
<g id="node19" class="node">
<title>legacybanking</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="3338.04,-180 3018,-180 3018,0 3338.04,0 3338.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="3104.1" y="-104.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Legacy банкинг</text>
<text xml:space="preserve" text-anchor="start" x="3159.23" y="-83.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Spring</text>
<text xml:space="preserve" text-anchor="start" x="3091.32" y="-61.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Legacy банкинг системы</text>
</g>
<!-- merchant -->
<g id="node20" class="node">
<title>merchant</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="2957.86,-502.8 2580.18,-502.8 2580.18,-322.8 2957.86,-322.8 2957.86,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="2730.12" y="-436.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Мерчант</text>
<text xml:space="preserve" text-anchor="start" x="2707.26" y="-414.9" font-family="Arial" font-size="13.00" fill="#c2f0c2">мобильный/web/ATM</text>
<text xml:space="preserve" text-anchor="start" x="2600.24" y="-393.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Юридическое лицо, которому должен поступить</text>
<text xml:space="preserve" text-anchor="start" x="2744.02" y="-375.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">платеж</text>
</g>
<!-- legacybankingdatabase -->
<g id="node21" class="node">
<title>legacybankingdatabase</title>
<path fill="#64748b" stroke="#475569" stroke-width="2" d="M3768.04,-163.64C3768.04,-172.67 3696.32,-180 3608.02,-180 3519.72,-180 3448,-172.67 3448,-163.64 3448,-163.64 3448,-16.36 3448,-16.36 3448,-7.33 3519.72,0 3608.02,0 3696.32,0 3768.04,-7.33 3768.04,-16.36 3768.04,-16.36 3768.04,-163.64 3768.04,-163.64"/>
<path fill="none" stroke="#475569" stroke-width="2" d="M3768.04,-163.64C3768.04,-154.61 3696.32,-147.27 3608.02,-147.27 3519.72,-147.27 3448,-154.61 3448,-163.64"/>
<text xml:space="preserve" text-anchor="start" x="3596.91" y="-93.8" font-family="Arial" font-size="20.00" fill="#f8fafc">БД</text>
<text xml:space="preserve" text-anchor="start" x="3588.88" y="-72.1" font-family="Arial" font-size="13.00" fill="#cbd5e1">Oracle</text>
</g>
<!-- gateway&#45;&gt;customerservice -->
<g id="edge4" class="edge">
<title>gateway&#45;&gt;customerservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M661.22,-1731.9C698.65,-1685.27 744.61,-1628.02 783,-1580.19"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="785.05,-1581.84 787.69,-1574.35 780.95,-1578.55 785.05,-1581.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="733.65,-1632 733.65,-1671.6 840.78,-1671.6 840.78,-1632 733.65,-1632"/>
<text xml:space="preserve" text-anchor="start" x="736.65" y="-1656" font-family="Arial" font-size="14.00" fill="#c6c6c6">REST</text>
<text xml:space="preserve" text-anchor="start" x="736.65" y="-1639.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">инфо о клиенте</text>
</g>
<!-- gateway&#45;&gt;walletservice -->
<g id="edge5" class="edge">
<title>gateway&#45;&gt;walletservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M528.83,-1731.63C467.25,-1637.1 375.17,-1481.02 330.33,-1332 275.15,-1148.58 237.74,-1084.86 296.02,-902.4 301.64,-884.79 310.19,-867.49 320.04,-851.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="322.26,-852.67 324.03,-844.92 317.81,-849.87 322.26,-852.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="330.33,-1284 330.33,-1323.6 453.02,-1323.6 453.02,-1284 330.33,-1284"/>
<text xml:space="preserve" text-anchor="start" x="333.33" y="-1308" font-family="Arial" font-size="14.00" fill="#c6c6c6">REST</text>
<text xml:space="preserve" text-anchor="start" x="333.33" y="-1291.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">инфо о кошельках</text>
</g>
<!-- gateway&#45;&gt;paymentsservice -->
<g id="edge6" class="edge">
<title>gateway&#45;&gt;paymentsservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M586.31,-1731.98C577.3,-1508.52 556.52,-937.29 578.02,-902.4 606.8,-855.69 655.21,-823.11 704.63,-800.61"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="705.62,-803.04 711.42,-797.61 703.5,-798.24 705.62,-803.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="572.59,-1275.6 572.59,-1332 784.74,-1332 784.74,-1275.6 572.59,-1275.6"/>
<text xml:space="preserve" text-anchor="start" x="575.59" y="-1316.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">REST</text>
<text xml:space="preserve" text-anchor="start" x="575.59" y="-1299.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">инфо о платежах</text>
<text xml:space="preserve" text-anchor="start" x="575.59" y="-1282.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">запрос на проведение платежа</text>
</g>
<!-- callbackservice&#45;&gt;callbackdatabase -->
<g id="edge7" class="edge">
<title>callbackservice&#45;&gt;callbackdatabase</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2104.02,-1731.65C2104.02,-1602.16 2104.02,-1362.46 2104.02,-1226.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2106.65,-1227.02 2104.02,-1219.52 2101.4,-1227.02 2106.65,-1227.02"/>
</g>
<!-- callbackservice&#45;&gt;paymentbroker -->
<g id="edge8" class="edge">
<title>callbackservice&#45;&gt;paymentbroker</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2049.56,-1731.86C2021.34,-1684.88 1986.89,-1625.89 1958.22,-1572 1889.6,-1443.01 1899.04,-1395.83 1816.02,-1275.6 1802.61,-1256.17 1786.66,-1236.85 1770.38,-1218.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1772.44,-1217.24 1765.44,-1213.49 1768.57,-1220.79 1772.44,-1217.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1958.22,-1462.2 1958.22,-1501.8 2077.02,-1501.8 2077.02,-1462.2 1958.22,-1462.2"/>
<text xml:space="preserve" text-anchor="start" x="1961.22" y="-1486.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="1961.22" y="-1469.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">успешный платеж</text>
</g>
<!-- antifrodservice&#45;&gt;antifroddatabase -->
<g id="edge9" class="edge">
<title>antifrodservice&#45;&gt;antifroddatabase</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1811.02,-662.7C1811.02,-617.02 1811.02,-561.14 1811.02,-513.92"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1813.65,-514.19 1811.02,-506.69 1808.4,-514.2 1813.65,-514.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1811.02,-571.2 1811.02,-594 2034.84,-594 2034.84,-571.2 1811.02,-571.2"/>
<text xml:space="preserve" text-anchor="start" x="1814.02" y="-578.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Персистирование/чтение данных</text>
</g>
<!-- antifrodservice&#45;&gt;paymentbroker -->
<g id="edge10" class="edge">
<title>antifrodservice&#45;&gt;paymentbroker</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1893.27,-842.38C1921.19,-883.57 1939.95,-932.76 1916.02,-975.6 1898.64,-1006.7 1871.82,-1032.12 1842.25,-1052.57"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1841.12,-1050.17 1836.36,-1056.52 1844.05,-1054.53 1841.12,-1050.17"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1926.97,-919.2 1926.97,-958.8 2163.23,-958.8 2163.23,-919.2 1926.97,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="1929.97" y="-943.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="1929.97" y="-926.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">результат скоринг/фрод&#45;проверки</text>
</g>
<!-- customerservice&#45;&gt;customerdatabase -->
<g id="edge11" class="edge">
<title>customerservice&#45;&gt;customerdatabase</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M875.08,-1392.03C883.02,-1341.76 892.97,-1278.78 901.19,-1226.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="903.76,-1227.34 902.34,-1219.52 898.57,-1226.52 903.76,-1227.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="892.37,-1292.4 892.37,-1315.2 1116.19,-1315.2 1116.19,-1292.4 892.37,-1292.4"/>
<text xml:space="preserve" text-anchor="start" x="895.37" y="-1299.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">Персистирование/чтение данных</text>
</g>
<!-- customerservice&#45;&gt;paymentbroker -->
<g id="edge12" class="edge">
<title>customerservice&#45;&gt;paymentbroker</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1020.73,-1477.31C1164.57,-1466.99 1376.25,-1433.8 1529.02,-1332 1570.47,-1304.38 1603.78,-1260.57 1627.97,-1220.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1630.21,-1221.86 1631.76,-1214.07 1625.69,-1219.19 1630.21,-1221.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1588.74,-1284 1588.74,-1323.6 1789.22,-1323.6 1789.22,-1284 1588.74,-1284"/>
<text xml:space="preserve" text-anchor="start" x="1591.74" y="-1308" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="1591.74" y="-1291.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">результат проверки клиента</text>
</g>
<!-- walletservice&#45;&gt;walletdatabase -->
<g id="edge13" class="edge">
<title>walletservice&#45;&gt;walletdatabase</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M402.02,-662.7C402.02,-617.02 402.02,-561.14 402.02,-513.92"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="404.65,-514.19 402.02,-506.69 399.4,-514.2 404.65,-514.19"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="402.02,-571.2 402.02,-594 625.84,-594 625.84,-571.2 402.02,-571.2"/>
<text xml:space="preserve" text-anchor="start" x="405.02" y="-578.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Персистирование/чтение данных</text>
</g>
<!-- walletservice&#45;&gt;paymentbroker -->
<g id="edge14" class="edge">
<title>walletservice&#45;&gt;paymentbroker</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M344.03,-842.17C322.48,-887.17 310.45,-939.72 343.76,-975.6 404.88,-1041.44 1060.85,-1024.73 1150.02,-1035.6 1268.81,-1050.08 1401.71,-1072.72 1503.95,-1091.55"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1503.23,-1094.09 1511.08,-1092.87 1504.18,-1088.92 1503.23,-1094.09"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="343.76,-919.2 343.76,-958.8 552.02,-958.8 552.02,-919.2 343.76,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="346.76" y="-943.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="346.76" y="-926.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">результат проверки кошелька</text>
</g>
<!-- paymentsservice&#45;&gt;coreintegrationservice -->
<g id="edge16" class="edge">
<title>paymentsservice&#45;&gt;coreintegrationservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M874.02,-662.7C874.02,-616.74 874.02,-560.47 874.02,-513.07"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="876.65,-513.31 874.02,-505.81 871.4,-513.31 876.65,-513.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="874.02,-562.8 874.02,-602.4 1125.84,-602.4 1125.84,-562.8 874.02,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="877.02" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">gRPC</text>
<text xml:space="preserve" text-anchor="start" x="877.02" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">Взаимодействие с легаси&#45;банкингом</text>
</g>
<!-- paymentsservice&#45;&gt;paymentbroker -->
<g id="edge17" class="edge">
<title>paymentsservice&#45;&gt;paymentbroker</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1033.67,-823.63C1089.01,-848.24 1151.38,-876.27 1208.02,-902.4 1306.77,-947.96 1416.59,-1000.24 1504.8,-1042.65"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1503.46,-1044.92 1511.36,-1045.8 1505.74,-1040.18 1503.46,-1044.92"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1362.31,-902.4 1362.31,-975.6 1599.34,-975.6 1599.34,-902.4 1362.31,-902.4"/>
<text xml:space="preserve" text-anchor="start" x="1365.31" y="-960" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="1365.31" y="-943.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;запрос на проверку клиента</text>
<text xml:space="preserve" text-anchor="start" x="1365.31" y="-926.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;запрос на проверку кошелька</text>
<text xml:space="preserve" text-anchor="start" x="1365.31" y="-909.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;запрос на скоринг/фрод&#45;проверку</text>
</g>
<!-- paymentsservice&#45;&gt;paymentsdatabase -->
<g id="edge18" class="edge">
<title>paymentsservice&#45;&gt;paymentsdatabase</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1033.87,-677.74C1074.4,-655.97 1116.7,-630.39 1153.02,-602.4 1187.41,-575.89 1220.92,-542.32 1249.25,-510.88"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1250.91,-512.96 1253.95,-505.62 1246.99,-509.46 1250.91,-512.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1195.7,-571.2 1195.7,-594 1419.52,-594 1419.52,-571.2 1195.7,-571.2"/>
<text xml:space="preserve" text-anchor="start" x="1198.7" y="-578.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Персистирование/чтение данных</text>
</g>
<!-- paymentsservice&#45;&gt;paymentprocessing -->
<g id="edge15" class="edge">
<title>paymentsservice&#45;&gt;paymentprocessing</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1033.88,-728.11C1179.94,-707.69 1402.06,-678.77 1596.02,-662.4 2177.23,-613.35 2329.64,-685.12 2907.02,-602.4 3076.3,-578.15 3263.09,-526.08 3400.5,-482.79"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3401.07,-485.36 3407.43,-480.6 3399.48,-480.36 3401.07,-485.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3101.23,-562.8 3101.23,-602.4 3305.6,-602.4 3305.6,-562.8 3101.23,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="3104.23" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">gRPC</text>
<text xml:space="preserve" text-anchor="start" x="3104.23" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">Запрос на обработку платежа</text>
</g>
<!-- coreintegrationservice&#45;&gt;legacybanking -->
<g id="edge19" class="edge">
<title>coreintegrationservice&#45;&gt;legacybanking</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1016.58,-322.91C1047.4,-307.14 1080.53,-292.63 1113.02,-282.8 1466.51,-175.86 2579.53,-117.14 3007.78,-98.04"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3007.68,-100.67 3015.06,-97.72 3007.45,-95.43 3007.68,-100.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1278.03,-240 1278.03,-262.8 1564.86,-262.8 1564.86,-240 1278.03,-240"/>
<text xml:space="preserve" text-anchor="start" x="1281.03" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Использование легаси&#45;функциональности</text>
</g>
<!-- paymentbroker&#45;&gt;antifrodservice -->
<g id="edge20" class="edge">
<title>paymentbroker&#45;&gt;antifrodservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1644.06,-1039.74C1633.86,-996.97 1629.23,-945.23 1648.1,-902.4 1656.46,-883.41 1668.58,-865.79 1682.48,-849.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1684.34,-851.66 1687.41,-844.34 1680.44,-848.15 1684.34,-851.66"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1648.1,-910.8 1648.1,-967.2 1889.02,-967.2 1889.02,-910.8 1648.1,-910.8"/>
<text xml:space="preserve" text-anchor="start" x="1651.1" y="-951.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="1651.1" y="-934.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;обработка скоринг/фрод&#45;проверки</text>
<text xml:space="preserve" text-anchor="start" x="1651.1" y="-918" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;успешный платеж</text>
</g>
<!-- paymentbroker&#45;&gt;customerservice -->
<g id="edge21" class="edge">
<title>paymentbroker&#45;&gt;customerservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1514.16,-1188.28C1448.01,-1214.39 1370.73,-1245.66 1301.54,-1275.6 1211.22,-1314.69 1111.76,-1360.79 1030.24,-1399.41"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1029.28,-1396.95 1023.63,-1402.54 1031.53,-1401.7 1029.28,-1396.95"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1301.54,-1284 1301.54,-1323.6 1502.02,-1323.6 1502.02,-1284 1301.54,-1284"/>
<text xml:space="preserve" text-anchor="start" x="1304.54" y="-1308" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="1304.54" y="-1291.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">обработка проверки клиента</text>
</g>
<!-- paymentbroker&#45;&gt;walletservice -->
<g id="edge22" class="edge">
<title>paymentbroker&#45;&gt;walletservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1514.03,-1095.78C1410.39,-1077.52 1272.41,-1053.97 1150.02,-1035.6 946.16,-1005 880.49,-1054.61 690.1,-975.6 651.77,-959.69 576.88,-901.57 513.07,-848.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="515.12,-847.05 507.67,-844.28 511.77,-851.09 515.12,-847.05"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="690.1,-910.8 690.1,-967.2 903.02,-967.2 903.02,-910.8 690.1,-910.8"/>
<text xml:space="preserve" text-anchor="start" x="693.1" y="-951.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="693.1" y="-934.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;обработка проверки кошелька</text>
<text xml:space="preserve" text-anchor="start" x="693.1" y="-918" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;успешный платеж</text>
</g>
<!-- paymentbroker&#45;&gt;paymentsservice -->
<g id="edge23" class="edge">
<title>paymentbroker&#45;&gt;paymentsservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1514.37,-1097.05C1325.96,-1063.41 1032.9,-1007.11 991.43,-975.6 950.9,-944.8 922.92,-895.91 904.48,-851.82"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="906.96,-850.97 901.71,-845.01 902.1,-852.95 906.96,-850.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="991.43,-910.8 991.43,-967.2 1181.02,-967.2 1181.02,-910.8 991.43,-910.8"/>
<text xml:space="preserve" text-anchor="start" x="994.43" y="-951.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="994.43" y="-934.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;результаты всех проверок</text>
<text xml:space="preserve" text-anchor="start" x="994.43" y="-918" font-family="Arial" font-size="14.00" fill="#c6c6c6">&#45;успешный платеж</text>
</g>
<!-- paymentbroker&#45;&gt;notificationsservice -->
<g id="edge24" class="edge">
<title>paymentbroker&#45;&gt;notificationsservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1833.91,-1054.41C1852.31,-1047.53 1870.95,-1041.08 1889.02,-1035.6 2019.55,-995.99 2076.44,-1051.14 2190.02,-975.6 2235.61,-945.28 2270.98,-895.9 2295.89,-851.38"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2298.13,-852.75 2299.44,-844.91 2293.53,-850.23 2298.13,-852.75"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2261.92,-919.2 2261.92,-958.8 2380.72,-958.8 2380.72,-919.2 2261.92,-919.2"/>
<text xml:space="preserve" text-anchor="start" x="2264.92" y="-943.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">event</text>
<text xml:space="preserve" text-anchor="start" x="2264.92" y="-926.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">успешный платеж</text>
</g>
<!-- notificationsservice&#45;&gt;notificationsdatabase -->
<g id="edge25" class="edge">
<title>notificationsservice&#45;&gt;notificationsdatabase</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2323.2,-662.7C2314.54,-617.02 2303.95,-561.14 2295,-513.92"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2297.6,-513.52 2293.62,-506.64 2292.44,-514.5 2297.6,-513.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2309.94,-571.2 2309.94,-594 2533.76,-594 2533.76,-571.2 2309.94,-571.2"/>
<text xml:space="preserve" text-anchor="start" x="2312.94" y="-578.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">Персистирование/чтение данных</text>
</g>
<!-- notificationsservice&#45;&gt;legacybanking -->
<g id="edge27" class="edge">
<title>notificationsservice&#45;&gt;legacybanking</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2499.8,-731.09C2617.97,-711.06 2779.8,-672.83 2907.02,-602.4 3059.43,-518.02 3129.7,-313.37 3159.18,-190.06"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3161.73,-190.7 3160.88,-182.8 3156.62,-189.51 3161.73,-190.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3132.03,-393 3132.03,-432.6 3243.05,-432.6 3243.05,-393 3132.03,-393"/>
<text xml:space="preserve" text-anchor="start" x="3135.03" y="-417" font-family="Arial" font-size="14.00" fill="#c6c6c6">smtp/https</text>
<text xml:space="preserve" text-anchor="start" x="3135.03" y="-400.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">Отправка пушей</text>
</g>
<!-- notificationsservice&#45;&gt;merchant -->
<g id="edge26" class="edge">
<title>notificationsservice&#45;&gt;merchant</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2478.36,-662.58C2506.25,-643.45 2534.98,-622.81 2561.02,-602.4 2597.58,-573.74 2635.74,-540.29 2669.25,-509.58"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2670.79,-511.72 2674.54,-504.71 2667.24,-507.85 2670.79,-511.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2608.55,-562.8 2608.55,-602.4 2879.84,-602.4 2879.84,-562.8 2608.55,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="2611.55" y="-586.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">Event: поступлении платежа со стороны</text>
<text xml:space="preserve" text-anchor="start" x="2611.55" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">клиента</text>
</g>
<!-- customer&#45;&gt;gateway -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M275.82,-2063.73C334.74,-2018.51 406.39,-1963.53 466.38,-1917.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="467.64,-1919.83 471.99,-1913.18 464.44,-1915.67 467.64,-1919.83"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="375.02,-1980.8 375.02,-2003.6 418.36,-2003.6 418.36,-1980.8 375.02,-1980.8"/>
<text xml:space="preserve" text-anchor="start" x="378.02" y="-1988" font-family="Arial" font-size="14.00" fill="#c6c6c6">REST</text>
</g>
<!-- atm&#45;&gt;gateway -->
<g id="edge2" class="edge">
<title>atm&#45;&gt;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M590.02,-2063.73C590.02,-2019.9 590.02,-1966.88 590.02,-1921.74"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="592.65,-1921.87 590.02,-1914.37 587.4,-1921.87 592.65,-1921.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="590.02,-1980.8 590.02,-2003.6 633.36,-2003.6 633.36,-1980.8 590.02,-1980.8"/>
<text xml:space="preserve" text-anchor="start" x="593.02" y="-1988" font-family="Arial" font-size="14.00" fill="#c6c6c6">REST</text>
</g>
<!-- paymentprocessing&#45;&gt;callbackservice -->
<g id="edge3" class="edge">
<title>paymentprocessing&#45;&gt;callbackservice</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3607.49,-502.63C3610.54,-570.69 3614.02,-666.96 3614.02,-751.4 3614.02,-1483 3614.02,-1483 3614.02,-1483 3614.02,-1755.01 2669.05,-1807.93 2274.2,-1818.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2274.29,-1815.54 2266.86,-1818.35 2274.42,-1820.79 2274.29,-1815.54"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3614.02,-1105.8 3614.02,-1145.4 3826.17,-1145.4 3826.17,-1105.8 3614.02,-1105.8"/>
<text xml:space="preserve" text-anchor="start" x="3617.02" y="-1129.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">gRPC WEBHOOK</text>
<text xml:space="preserve" text-anchor="start" x="3617.02" y="-1113" font-family="Arial" font-size="14.00" fill="#c6c6c6">Получение коллбека о платеже</text>
</g>
<!-- legacybanking&#45;&gt;legacybankingdatabase -->
<g id="edge28" class="edge">
<title>legacybanking&#45;&gt;legacybankingdatabase</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3338.01,-90C3370.99,-90 3403.96,-90 3436.94,-90"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3436.65,-92.63 3444.15,-90 3436.65,-87.38 3436.65,-92.63"/>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
