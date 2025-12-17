function n(e){switch(e){case"index":return`---\r
title: "Платежная платформа банка, SystemContext"\r
---\r
graph TB\r
  Customer[fa:fa-user Клиент]\r
  subgraph Barch["barch-банкинг"]\r
    Barch.Atm[ATM]\r
    subgraph Barch.InternetBankingSystem["Банковская система"]\r
      Barch.InternetBankingSystem.PaymentServices[Платежные сервисы]\r
      Barch.InternetBankingSystem.PaymentProcessing[Платежный процессинг]\r
      Barch.InternetBankingSystem.LegacyBanking[Legacy банкинг]\r
    end\r
  end\r
  Merchant[fa:fa-user Мерчант]\r
  Barch.InternetBankingSystem.PaymentServices -. "Запрос на обработку платежа" .-> Barch.InternetBankingSystem.PaymentProcessing\r
  Barch.InternetBankingSystem.PaymentServices -. "Использование логики legacy-сервисов" .-> Barch.InternetBankingSystem.LegacyBanking\r
  Barch.InternetBankingSystem.PaymentProcessing -. "Получение информации о проведении платежа" .-> Barch.InternetBankingSystem.PaymentServices\r
  Customer -. "Просмотр информации аккаунтов и выполнение платежей" .-> Barch.InternetBankingSystem.PaymentServices\r
  Customer -. "Получает кеш" .-> Barch.Atm\r
  Barch.Atm -. "Использует" .-> Barch.InternetBankingSystem.PaymentServices\r
  Barch.InternetBankingSystem -. "Уведомление о поступлении платежа со стороны клиента" .-> Merchant\r
`;case"customer":return`---\r
title: "Клиенты API"\r
---\r
graph TB\r
  Customer[fa:fa-user Клиент]\r
  subgraph Barch["barch-банкинг"]\r
    subgraph Barch.InternetBankingSystem["Банковская система"]\r
      Barch.InternetBankingSystem.PaymentServicesSinglePageApplication[SPA]\r
      Barch.InternetBankingSystem.PaymentServicesMobileApp[Мобильное приложение]\r
      Barch.InternetBankingSystem.PaymentServicesGateway[API Gateway]\r
    end\r
    Barch.Atm[ATM]\r
  end\r
  Customer -. "Посещает barch.com по HTTPS. Просмотр информации об аккаунтах и проведение платежей" .-> Barch.InternetBankingSystem.PaymentServicesSinglePageApplication\r
  Customer -. "Просмотр информации об аккаунтах и проведение платежей" .-> Barch.InternetBankingSystem.PaymentServicesMobileApp\r
  Customer -. "REST" .-> Barch.InternetBankingSystem.PaymentServicesGateway\r
  Customer -. "Получает кеш" .-> Barch.Atm\r
`;case"internetBankingSystemContainer":return`---\r
title: "Платежные сервисы - Containers"\r
---\r
graph TB\r
  Customer[fa:fa-user Клиент]\r
  BarchAtm[ATM]\r
  BarchInternetBankingSystemPaymentProcessing[Платежный процессинг]\r
  subgraph BarchInternetBankingSystemPaymentServices["Платежные сервисы"]\r
    BarchInternetBankingSystemPaymentServices.Gateway[API Gateway]\r
    BarchInternetBankingSystemPaymentServices.CallbackService[Callback Service]\r
    BarchInternetBankingSystemPaymentServices.AntifrodService[Anti-Fraud/Scoring Service]\r
    BarchInternetBankingSystemPaymentServices.CustomerService[Customer Service]\r
    BarchInternetBankingSystemPaymentServices.WalletService[Wallet Service]\r
    BarchInternetBankingSystemPaymentServices.PaymentsService[Payments Service]\r
    BarchInternetBankingSystemPaymentServices.CallbackDatabase([БД коллбеков])\r
    BarchInternetBankingSystemPaymentServices.AntifrodDatabase([БД])\r
    BarchInternetBankingSystemPaymentServices.CustomerDatabase([БД])\r
    BarchInternetBankingSystemPaymentServices.WalletDatabase([БД])\r
    BarchInternetBankingSystemPaymentServices.CoreIntegrationService[Core Integration / ACL (обёртка над legacy core)]\r
    BarchInternetBankingSystemPaymentServices.PaymentBroker[(Брокер)]\r
    BarchInternetBankingSystemPaymentServices.PaymentsDatabase([БД])\r
    BarchInternetBankingSystemPaymentServices.NotificationsService[Notifications Service]\r
    BarchInternetBankingSystemPaymentServices.NotificationsDatabase([БД нотификаций])\r
  end\r
  Merchant[fa:fa-user Мерчант]\r
  BarchInternetBankingSystemLegacyBanking[Legacy банкинг]\r
  BarchInternetBankingSystemLegacyBankingDatabase([БД])\r
  Customer -. "REST" .-> BarchInternetBankingSystemPaymentServices.Gateway\r
  BarchAtm -. "REST" .-> BarchInternetBankingSystemPaymentServices.Gateway\r
  BarchInternetBankingSystemPaymentProcessing -. "gRPC WEBHOOK\\nПолучение коллбека о платеже" .-> BarchInternetBankingSystemPaymentServices.CallbackService\r
  BarchInternetBankingSystemPaymentServices.Gateway -. "REST\\nинфо о клиенте" .-> BarchInternetBankingSystemPaymentServices.CustomerService\r
  BarchInternetBankingSystemPaymentServices.Gateway -. "REST\\nинфо о кошельках" .-> BarchInternetBankingSystemPaymentServices.WalletService\r
  BarchInternetBankingSystemPaymentServices.Gateway -. "REST\\nинфо о платежах\\nзапрос на проведение платежа" .-> BarchInternetBankingSystemPaymentServices.PaymentsService\r
  BarchInternetBankingSystemPaymentServices.CustomerService -. "event\\nрезультат проверки клиента" .-> BarchInternetBankingSystemPaymentServices.PaymentBroker\r
  BarchInternetBankingSystemPaymentServices.CustomerService -. "Персистирование/чтение данных" .-> BarchInternetBankingSystemPaymentServices.CustomerDatabase\r
  BarchInternetBankingSystemPaymentServices.PaymentBroker -. "event\\nобработка проверки клиента" .-> BarchInternetBankingSystemPaymentServices.CustomerService\r
  BarchInternetBankingSystemPaymentServices.WalletService -. "event\\nрезультат проверки кошелька" .-> BarchInternetBankingSystemPaymentServices.PaymentBroker\r
  BarchInternetBankingSystemPaymentServices.WalletService -. "Персистирование/чтение данных" .-> BarchInternetBankingSystemPaymentServices.WalletDatabase\r
  BarchInternetBankingSystemPaymentServices.PaymentBroker -. "event\\n-обработка проверки кошелька\\n-успешный платеж" .-> BarchInternetBankingSystemPaymentServices.WalletService\r
  BarchInternetBankingSystemPaymentServices.PaymentsService -. "gRPC\\nВзаимодействие с легаси-банкингом" .-> BarchInternetBankingSystemPaymentServices.CoreIntegrationService\r
  BarchInternetBankingSystemPaymentServices.PaymentsService -. "event\\n-запрос на проверку клиента\\n-запрос на проверку кошелька\\n-запрос на скоринг/фрод-проверку" .-> BarchInternetBankingSystemPaymentServices.PaymentBroker\r
  BarchInternetBankingSystemPaymentServices.PaymentsService -. "Персистирование/чтение данных" .-> BarchInternetBankingSystemPaymentServices.PaymentsDatabase\r
  BarchInternetBankingSystemPaymentServices.PaymentBroker -. "event\\n-результаты всех проверок\\n-успешный платеж" .-> BarchInternetBankingSystemPaymentServices.PaymentsService\r
  BarchInternetBankingSystemPaymentServices.AntifrodService -. "event\\nрезультат скоринг/фрод-проверки" .-> BarchInternetBankingSystemPaymentServices.PaymentBroker\r
  BarchInternetBankingSystemPaymentServices.AntifrodService -. "Персистирование/чтение данных" .-> BarchInternetBankingSystemPaymentServices.AntifrodDatabase\r
  BarchInternetBankingSystemPaymentServices.PaymentBroker -. "event\\n-обработка скоринг/фрод-проверки\\n-успешный платеж" .-> BarchInternetBankingSystemPaymentServices.AntifrodService\r
  BarchInternetBankingSystemPaymentServices.CallbackService -. "event\\nуспешный платеж" .-> BarchInternetBankingSystemPaymentServices.PaymentBroker\r
  BarchInternetBankingSystemPaymentServices.CallbackService -.-> BarchInternetBankingSystemPaymentServices.CallbackDatabase\r
  BarchInternetBankingSystemPaymentServices.NotificationsService -. "Персистирование/чтение данных" .-> BarchInternetBankingSystemPaymentServices.NotificationsDatabase\r
  BarchInternetBankingSystemPaymentServices.PaymentBroker -. "event\\nуспешный платеж" .-> BarchInternetBankingSystemPaymentServices.NotificationsService\r
  BarchInternetBankingSystemPaymentServices.PaymentsService -. "gRPC\\nЗапрос на обработку платежа" .-> BarchInternetBankingSystemPaymentProcessing\r
  BarchInternetBankingSystemPaymentServices.NotificationsService -. "Event: поступлении платежа со стороны клиента" .-> Merchant\r
  BarchInternetBankingSystemPaymentServices.NotificationsService -. "smtp/https\\nОтправка пушей" .-> BarchInternetBankingSystemLegacyBanking\r
  BarchInternetBankingSystemPaymentServices.CoreIntegrationService -. "Использование легаси-функциональности" .-> BarchInternetBankingSystemLegacyBanking\r
  BarchInternetBankingSystemLegacyBanking -.-> BarchInternetBankingSystemLegacyBankingDatabase\r
`;default:throw new Error("Unknown viewId: "+e)}}export{n as mmdSource};
