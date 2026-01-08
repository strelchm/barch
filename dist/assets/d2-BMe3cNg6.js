function n(e){switch(e){case"index":return`direction: down\r
\r
Customer: {\r
  label: "Клиент"\r
  shape: person\r
}\r
Barch: {\r
  label: "barch-банкинг"\r
\r
  Atm: {\r
    label: "ATM"\r
  }\r
  InternetBankingSystem: {\r
    label: "Банковская система"\r
\r
    PaymentServices: {\r
      label: "Платежные сервисы"\r
    }\r
    PaymentProcessing: {\r
      label: "Платежный процессинг"\r
    }\r
    LegacyBanking: {\r
      label: "Legacy банкинг"\r
    }\r
  }\r
}\r
Merchant: {\r
  label: "Мерчант"\r
  shape: person\r
}\r
\r
Barch.InternetBankingSystem.PaymentServices -> Barch.InternetBankingSystem.PaymentProcessing: "Запрос на обработку платежа"\r
Barch.InternetBankingSystem.PaymentServices -> Barch.InternetBankingSystem.LegacyBanking: "Использование логики legacy-сервисов"\r
Barch.InternetBankingSystem.PaymentProcessing -> Barch.InternetBankingSystem.PaymentServices: "Получение информации о проведении платежа"\r
Customer -> Barch.InternetBankingSystem.PaymentServices: "Просмотр информации аккаунтов и выполнение платежей"\r
Customer -> Barch.Atm: "Получает кеш"\r
Barch.Atm -> Barch.InternetBankingSystem.PaymentServices: "Использует"\r
Barch.InternetBankingSystem -> Merchant: "Уведомление о поступлении платежа со стороны клиента"\r
`;case"customer":return`direction: down\r
\r
Customer: {\r
  label: "Клиент"\r
  shape: person\r
}\r
Barch: {\r
  label: "barch-банкинг"\r
\r
  InternetBankingSystem: {\r
    label: "Банковская система"\r
\r
    PaymentServicesSinglePageApplication: {\r
      label: "SPA"\r
    }\r
    PaymentServicesMobileApp: {\r
      label: "Мобильное приложение"\r
    }\r
    PaymentServicesGateway: {\r
      label: "API Gateway"\r
    }\r
  }\r
  Atm: {\r
    label: "ATM"\r
  }\r
}\r
\r
Customer -> Barch.InternetBankingSystem.PaymentServicesSinglePageApplication: "Посещает barch.com по HTTPS. Просмотр информации об аккаунтах и проведение платежей"\r
Customer -> Barch.InternetBankingSystem.PaymentServicesMobileApp: "Просмотр информации об аккаунтах и проведение платежей"\r
Customer -> Barch.InternetBankingSystem.PaymentServicesGateway: "REST"\r
Customer -> Barch.Atm: "Получает кеш"\r
`;case"internetBankingSystemContainer":return`direction: down\r
\r
Customer: {\r
  label: "Клиент"\r
  shape: person\r
}\r
BarchAtm: {\r
  label: "ATM"\r
}\r
BarchInternetBankingSystemPaymentProcessing: {\r
  label: "Платежный процессинг"\r
}\r
BarchInternetBankingSystemPaymentServices: {\r
  label: "Платежные сервисы"\r
\r
  Gateway: {\r
    label: "API Gateway"\r
  }\r
  CallbackService: {\r
    label: "Callback Service"\r
  }\r
  AntifrodService: {\r
    label: "Anti-Fraud/Scoring Service"\r
  }\r
  CustomerService: {\r
    label: "Customer Service"\r
  }\r
  WalletService: {\r
    label: "Wallet Service"\r
  }\r
  PaymentsService: {\r
    label: "Payments Service"\r
  }\r
  CallbackDatabase: {\r
    label: "БД коллбеков"\r
    shape: stored_data\r
  }\r
  AntifrodDatabase: {\r
    label: "БД"\r
    shape: stored_data\r
  }\r
  CustomerDatabase: {\r
    label: "БД"\r
    shape: stored_data\r
  }\r
  WalletDatabase: {\r
    label: "БД"\r
    shape: stored_data\r
  }\r
  CoreIntegrationService: {\r
    label: "Core Integration / ACL (обёртка над legacy core)"\r
  }\r
  PaymentBroker: {\r
    label: "Брокер"\r
    shape: queue\r
  }\r
  PaymentsDatabase: {\r
    label: "БД"\r
    shape: stored_data\r
  }\r
  NotificationsService: {\r
    label: "Notifications Service"\r
  }\r
  NotificationsDatabase: {\r
    label: "БД нотификаций"\r
    shape: stored_data\r
  }\r
}\r
Merchant: {\r
  label: "Мерчант"\r
  shape: person\r
}\r
BarchInternetBankingSystemLegacyBanking: {\r
  label: "Legacy банкинг"\r
}\r
BarchInternetBankingSystemLegacyBankingDatabase: {\r
  label: "БД"\r
  shape: stored_data\r
}\r
\r
Customer -> BarchInternetBankingSystemPaymentServices.Gateway: "REST"\r
BarchAtm -> BarchInternetBankingSystemPaymentServices.Gateway: "REST"\r
BarchInternetBankingSystemPaymentProcessing -> BarchInternetBankingSystemPaymentServices.CallbackService: "gRPC WEBHOOK\\nПолучение коллбека о платеже"\r
BarchInternetBankingSystemPaymentServices.Gateway -> BarchInternetBankingSystemPaymentServices.CustomerService: "REST\\nинфо о клиенте"\r
BarchInternetBankingSystemPaymentServices.Gateway -> BarchInternetBankingSystemPaymentServices.WalletService: "REST\\nинфо о кошельках"\r
BarchInternetBankingSystemPaymentServices.Gateway -> BarchInternetBankingSystemPaymentServices.PaymentsService: "REST\\nинфо о платежах\\nзапрос на проведение платежа"\r
BarchInternetBankingSystemPaymentServices.CustomerService -> BarchInternetBankingSystemPaymentServices.PaymentBroker: "event\\nрезультат проверки клиента"\r
BarchInternetBankingSystemPaymentServices.CustomerService -> BarchInternetBankingSystemPaymentServices.CustomerDatabase: "Персистирование/чтение данных"\r
BarchInternetBankingSystemPaymentServices.PaymentBroker -> BarchInternetBankingSystemPaymentServices.CustomerService: "event\\nобработка проверки клиента"\r
BarchInternetBankingSystemPaymentServices.WalletService -> BarchInternetBankingSystemPaymentServices.PaymentBroker: "event\\nрезультат проверки кошелька"\r
BarchInternetBankingSystemPaymentServices.WalletService -> BarchInternetBankingSystemPaymentServices.WalletDatabase: "Персистирование/чтение данных"\r
BarchInternetBankingSystemPaymentServices.PaymentBroker -> BarchInternetBankingSystemPaymentServices.WalletService: "event\\n-обработка проверки кошелька\\n-успешный платеж"\r
BarchInternetBankingSystemPaymentServices.PaymentsService -> BarchInternetBankingSystemPaymentServices.CoreIntegrationService: "gRPC\\nВзаимодействие с легаси-банкингом"\r
BarchInternetBankingSystemPaymentServices.PaymentsService -> BarchInternetBankingSystemPaymentServices.PaymentBroker: "event\\n-запрос на проверку клиента\\n-запрос на проверку кошелька\\n-запрос на скоринг/фрод-проверку"\r
BarchInternetBankingSystemPaymentServices.PaymentsService -> BarchInternetBankingSystemPaymentServices.PaymentsDatabase: "Персистирование/чтение данных"\r
BarchInternetBankingSystemPaymentServices.PaymentBroker -> BarchInternetBankingSystemPaymentServices.PaymentsService: "event\\n-результаты всех проверок\\n-успешный платеж"\r
BarchInternetBankingSystemPaymentServices.AntifrodService -> BarchInternetBankingSystemPaymentServices.PaymentBroker: "event\\nрезультат скоринг/фрод-проверки"\r
BarchInternetBankingSystemPaymentServices.AntifrodService -> BarchInternetBankingSystemPaymentServices.AntifrodDatabase: "Персистирование/чтение данных"\r
BarchInternetBankingSystemPaymentServices.PaymentBroker -> BarchInternetBankingSystemPaymentServices.AntifrodService: "event\\n-обработка скоринг/фрод-проверки\\n-успешный платеж"\r
BarchInternetBankingSystemPaymentServices.CallbackService -> BarchInternetBankingSystemPaymentServices.PaymentBroker: "event\\nуспешный платеж"\r
BarchInternetBankingSystemPaymentServices.CallbackService -> BarchInternetBankingSystemPaymentServices.CallbackDatabase\r
BarchInternetBankingSystemPaymentServices.NotificationsService -> BarchInternetBankingSystemPaymentServices.NotificationsDatabase: "Персистирование/чтение данных"\r
BarchInternetBankingSystemPaymentServices.PaymentBroker -> BarchInternetBankingSystemPaymentServices.NotificationsService: "event\\nуспешный платеж"\r
BarchInternetBankingSystemPaymentServices.PaymentsService -> BarchInternetBankingSystemPaymentProcessing: "gRPC\\nЗапрос на обработку платежа"\r
BarchInternetBankingSystemPaymentServices.NotificationsService -> Merchant: "Event: поступлении платежа со стороны клиента"\r
BarchInternetBankingSystemPaymentServices.NotificationsService -> BarchInternetBankingSystemLegacyBanking: "smtp/https\\nОтправка пушей"\r
BarchInternetBankingSystemPaymentServices.CoreIntegrationService -> BarchInternetBankingSystemLegacyBanking: "Использование легаси-функциональности"\r
BarchInternetBankingSystemLegacyBanking -> BarchInternetBankingSystemLegacyBankingDatabase\r
`;default:throw new Error("Unknown viewId: "+e)}}export{n as d2Source};
