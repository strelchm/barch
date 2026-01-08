function e(n){switch(n){case"index":return`@startuml\r
title "Платежная платформа банка, SystemContext"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<Customer>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BarchAtm>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServices>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam person<<Merchant>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentProcessing>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemLegacyBanking>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
person "==Клиент\\n<size:10>[мобильный/web/ATM]</size>\\n\\nКлиент банка" <<Customer>> as Customer\r
rectangle "barch-банкинг" <<Barch>> as Barch {\r
  skinparam RectangleBorderColor<<Barch>> #3b82f6\r
  skinparam RectangleFontColor<<Barch>> #3b82f6\r
  skinparam RectangleBorderStyle<<Barch>> dashed\r
\r
  rectangle "==ATM\\n\\nБанкомат для получения кеша" <<BarchAtm>> as BarchAtm\r
  rectangle "Банковская система" <<BarchInternetBankingSystem>> as BarchInternetBankingSystem {\r
    skinparam RectangleBorderColor<<BarchInternetBankingSystem>> #3b82f6\r
    skinparam RectangleFontColor<<BarchInternetBankingSystem>> #3b82f6\r
    skinparam RectangleBorderStyle<<BarchInternetBankingSystem>> dashed\r
\r
    rectangle "==Платежные сервисы\\n\\nСервисы по работе с кошельками, клиентами, платежами и др." <<BarchInternetBankingSystemPaymentServices>> as BarchInternetBankingSystemPaymentServices\r
    rectangle "==Платежный процессинг\\n<size:10>[СБП,Swift,Корона,Visa]</size>\\n\\nСервисы по интеграции с платежными системами" <<BarchInternetBankingSystemPaymentProcessing>> as BarchInternetBankingSystemPaymentProcessing\r
    rectangle "==Legacy банкинг\\n<size:10>[Spring]</size>\\n\\nLegacy банкинг системы" <<BarchInternetBankingSystemLegacyBanking>> as BarchInternetBankingSystemLegacyBanking\r
  }\r
}\r
person "==Мерчант\\n<size:10>[мобильный/web/ATM]</size>\\n\\nЮридическое лицо, которому должен поступить платеж" <<Merchant>> as Merchant\r
\r
BarchInternetBankingSystemPaymentServices .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentProcessing : "<color:#6E6E6E>Запрос на обработку платежа<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServices .[#6E6E6E,thickness=2].> BarchInternetBankingSystemLegacyBanking : "<color:#6E6E6E>Использование логики legacy-сервисов<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentProcessing .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServices : "<color:#6E6E6E>Получение информации о проведении платежа<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServices : "<color:#6E6E6E>Просмотр информации аккаунтов и выполнение платежей<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BarchAtm : "<color:#6E6E6E>Получает кеш<color:#6E6E6E>"\r
BarchAtm .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServices : "<color:#6E6E6E>Использует<color:#6E6E6E>"\r
BarchInternetBankingSystem .[#6E6E6E,thickness=2].> Merchant : "<color:#6E6E6E>Уведомление о поступлении платежа со стороны клиента<color:#6E6E6E>"\r
@enduml\r
`;case"customer":return`@startuml\r
title "Клиенты API"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<Customer>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesSinglePageApplication>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesMobileApp>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesGateway>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchAtm>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
person "==Клиент\\n<size:10>[мобильный/web/ATM]</size>\\n\\nКлиент банка" <<Customer>> as Customer\r
rectangle "barch-банкинг" <<Barch>> as Barch {\r
  skinparam RectangleBorderColor<<Barch>> #3b82f6\r
  skinparam RectangleFontColor<<Barch>> #3b82f6\r
  skinparam RectangleBorderStyle<<Barch>> dashed\r
\r
  rectangle "Банковская система" <<BarchInternetBankingSystem>> as BarchInternetBankingSystem {\r
    skinparam RectangleBorderColor<<BarchInternetBankingSystem>> #3b82f6\r
    skinparam RectangleFontColor<<BarchInternetBankingSystem>> #3b82f6\r
    skinparam RectangleBorderStyle<<BarchInternetBankingSystem>> dashed\r
\r
    rectangle "==SPA\\n<size:10>[JavaScript]</size>\\n\\nВся функциональность интернет банкинга в вебраузере" <<BarchInternetBankingSystemPaymentServicesSinglePageApplication>> as BarchInternetBankingSystemPaymentServicesSinglePageApplication\r
    rectangle "==Мобильное приложение\\n<size:10>[Xamarin]</size>\\n\\nОграниченная функциональность интернет банкинга в мобильном приложении" <<BarchInternetBankingSystemPaymentServicesMobileApp>> as BarchInternetBankingSystemPaymentServicesMobileApp\r
    rectangle "==API Gateway\\n<size:10>[Envoy]</size>\\n\\nAPI Gateway" <<BarchInternetBankingSystemPaymentServicesGateway>> as BarchInternetBankingSystemPaymentServicesGateway\r
  }\r
  rectangle "==ATM\\n\\nБанкомат для получения кеша" <<BarchAtm>> as BarchAtm\r
}\r
\r
Customer .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesSinglePageApplication : "<color:#6E6E6E>Посещает barch.com по HTTPS. Просмотр информации об аккаунтах и проведение платежей<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesMobileApp : "<color:#6E6E6E>Просмотр информации об аккаунтах и проведение платежей<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesGateway : "<color:#6E6E6E>REST<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BarchAtm : "<color:#6E6E6E>Получает кеш<color:#6E6E6E>"\r
@enduml\r
`;case"internetBankingSystemContainer":return`@startuml\r
title "Платежные сервисы - Containers"\r
top to bottom direction\r
\r
hide stereotype\r
skinparam ranksep 60\r
skinparam nodesep 30\r
skinparam {\r
  arrowFontSize 10\r
  defaultTextAlignment center\r
  wrapWidth 200\r
  maxMessageSize 100\r
  shadowing false\r
}\r
\r
skinparam person<<Customer>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BarchAtm>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentProcessing>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesGateway>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesCallbackService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesAntifrodService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesCustomerService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesWalletService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesPaymentsService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<BarchInternetBankingSystemPaymentServicesCallbackDatabase>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam database<<BarchInternetBankingSystemPaymentServicesAntifrodDatabase>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam database<<BarchInternetBankingSystemPaymentServicesCustomerDatabase>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam database<<BarchInternetBankingSystemPaymentServicesWalletDatabase>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesCoreIntegrationService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam queue<<BarchInternetBankingSystemPaymentServicesPaymentBroker>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam database<<BarchInternetBankingSystemPaymentServicesPaymentsDatabase>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<BarchInternetBankingSystemPaymentServicesNotificationsService>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<BarchInternetBankingSystemPaymentServicesNotificationsDatabase>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam person<<Merchant>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BarchInternetBankingSystemLegacyBanking>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<BarchInternetBankingSystemLegacyBankingDatabase>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
person "==Клиент\\n<size:10>[мобильный/web/ATM]</size>\\n\\nКлиент банка" <<Customer>> as Customer\r
rectangle "==ATM\\n\\nБанкомат для получения кеша" <<BarchAtm>> as BarchAtm\r
rectangle "==Платежный процессинг\\n<size:10>[СБП,Swift,Корона,Visa]</size>\\n\\nСервисы по интеграции с платежными системами" <<BarchInternetBankingSystemPaymentProcessing>> as BarchInternetBankingSystemPaymentProcessing\r
rectangle "Платежные сервисы" <<BarchInternetBankingSystemPaymentServices>> as BarchInternetBankingSystemPaymentServices {\r
  skinparam RectangleBorderColor<<BarchInternetBankingSystemPaymentServices>> #3b82f6\r
  skinparam RectangleFontColor<<BarchInternetBankingSystemPaymentServices>> #3b82f6\r
  skinparam RectangleBorderStyle<<BarchInternetBankingSystemPaymentServices>> dashed\r
\r
  rectangle "==API Gateway\\n<size:10>[Envoy]</size>\\n\\nAPI Gateway" <<BarchInternetBankingSystemPaymentServicesGateway>> as BarchInternetBankingSystemPaymentServicesGateway\r
  rectangle "==Callback Service\\n<size:10>[Spring]</size>\\n\\nОбработка коллбеков" <<BarchInternetBankingSystemPaymentServicesCallbackService>> as BarchInternetBankingSystemPaymentServicesCallbackService\r
  rectangle "==Anti-Fraud/Scoring Service\\n<size:10>[Spring + Flink]</size>\\n\\nAnti-Fraud/Scoring Service" <<BarchInternetBankingSystemPaymentServicesAntifrodService>> as BarchInternetBankingSystemPaymentServicesAntifrodService\r
  rectangle "==Customer Service\\n<size:10>[Spring]</size>\\n\\nCustomer Service" <<BarchInternetBankingSystemPaymentServicesCustomerService>> as BarchInternetBankingSystemPaymentServicesCustomerService\r
  rectangle "==Wallet Service\\n<size:10>[Spring]</size>\\n\\nWallet Service" <<BarchInternetBankingSystemPaymentServicesWalletService>> as BarchInternetBankingSystemPaymentServicesWalletService\r
  rectangle "==Payments Service\\n<size:10>[Spring/Temporal]</size>\\n\\nPayments Service" <<BarchInternetBankingSystemPaymentServicesPaymentsService>> as BarchInternetBankingSystemPaymentServicesPaymentsService\r
  database "==БД коллбеков\\n<size:10>[PostgreSQL]</size>\\n\\nИнформация о коллбеках и мерчантах" <<BarchInternetBankingSystemPaymentServicesCallbackDatabase>> as BarchInternetBankingSystemPaymentServicesCallbackDatabase\r
  database "==БД\\n<size:10>[PostgreSQL]</size>\\n\\nРегистрационная информация, журнал логов операций" <<BarchInternetBankingSystemPaymentServicesAntifrodDatabase>> as BarchInternetBankingSystemPaymentServicesAntifrodDatabase\r
  database "==БД\\n<size:10>[PostgreSQL]</size>\\n\\nРегистрационная информация, журнал логов операций, договоры" <<BarchInternetBankingSystemPaymentServicesCustomerDatabase>> as BarchInternetBankingSystemPaymentServicesCustomerDatabase\r
  database "==БД\\n<size:10>[PostgreSQL]</size>\\n\\nИнформация о кошельках" <<BarchInternetBankingSystemPaymentServicesWalletDatabase>> as BarchInternetBankingSystemPaymentServicesWalletDatabase\r
  rectangle "==Core Integration / ACL (обёртка над legacy core)\\n<size:10>[Spring]</size>\\n\\nCore Integration / ACL (обёртка над legacy core)" <<BarchInternetBankingSystemPaymentServicesCoreIntegrationService>> as BarchInternetBankingSystemPaymentServicesCoreIntegrationService\r
  queue "==Брокер\\n<size:10>[Kafka]</size>\\n\\nБрокер платежных сервисов" <<BarchInternetBankingSystemPaymentServicesPaymentBroker>> as BarchInternetBankingSystemPaymentServicesPaymentBroker\r
  database "==БД\\n<size:10>[PostgreSQL]</size>\\n\\nПлатежи" <<BarchInternetBankingSystemPaymentServicesPaymentsDatabase>> as BarchInternetBankingSystemPaymentServicesPaymentsDatabase\r
  rectangle "==Notifications Service\\n<size:10>[Spring]</size>\\n\\nNotifications Service" <<BarchInternetBankingSystemPaymentServicesNotificationsService>> as BarchInternetBankingSystemPaymentServicesNotificationsService\r
  database "==БД нотификаций\\n<size:10>[Cassandra, transactional inbox]</size>" <<BarchInternetBankingSystemPaymentServicesNotificationsDatabase>> as BarchInternetBankingSystemPaymentServicesNotificationsDatabase\r
}\r
person "==Мерчант\\n<size:10>[мобильный/web/ATM]</size>\\n\\nЮридическое лицо, которому должен поступить платеж" <<Merchant>> as Merchant\r
rectangle "==Legacy банкинг\\n<size:10>[Spring]</size>\\n\\nLegacy банкинг системы" <<BarchInternetBankingSystemLegacyBanking>> as BarchInternetBankingSystemLegacyBanking\r
database "==БД\\n<size:10>[Oracle]</size>" <<BarchInternetBankingSystemLegacyBankingDatabase>> as BarchInternetBankingSystemLegacyBankingDatabase\r
\r
Customer .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesGateway : "<color:#6E6E6E>REST<color:#6E6E6E>"\r
BarchAtm .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesGateway : "<color:#6E6E6E>REST<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentProcessing .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesCallbackService : "<color:#6E6E6E>gRPC WEBHOOK\\nПолучение коллбека о платеже<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesGateway .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesCustomerService : "<color:#6E6E6E>REST\\nинфо о клиенте<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesGateway .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesWalletService : "<color:#6E6E6E>REST\\nинфо о кошельках<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesGateway .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesPaymentsService : "<color:#6E6E6E>REST\\nинфо о платежах\\nзапрос на проведение платежа<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesCustomerService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesPaymentBroker : "<color:#6E6E6E>event\\nрезультат проверки клиента<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesCustomerService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesCustomerDatabase : "<color:#6E6E6E>Персистирование/чтение данных<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentBroker .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesCustomerService : "<color:#6E6E6E>event\\nобработка проверки клиента<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesWalletService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesPaymentBroker : "<color:#6E6E6E>event\\nрезультат проверки кошелька<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesWalletService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesWalletDatabase : "<color:#6E6E6E>Персистирование/чтение данных<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentBroker .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesWalletService : "<color:#6E6E6E>event\\n-обработка проверки кошелька\\n-успешный платеж<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentsService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesCoreIntegrationService : "<color:#6E6E6E>gRPC\\nВзаимодействие с легаси-банкингом<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentsService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesPaymentBroker : "<color:#6E6E6E>event\\n-запрос на проверку клиента\\n-запрос на проверку кошелька\\n-запрос на скоринг/фрод-проверку<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentsService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesPaymentsDatabase : "<color:#6E6E6E>Персистирование/чтение данных<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentBroker .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesPaymentsService : "<color:#6E6E6E>event\\n-результаты всех проверок\\n-успешный платеж<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesAntifrodService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesPaymentBroker : "<color:#6E6E6E>event\\nрезультат скоринг/фрод-проверки<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesAntifrodService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesAntifrodDatabase : "<color:#6E6E6E>Персистирование/чтение данных<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentBroker .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesAntifrodService : "<color:#6E6E6E>event\\n-обработка скоринг/фрод-проверки\\n-успешный платеж<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesCallbackService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesPaymentBroker : "<color:#6E6E6E>event\\nуспешный платеж<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesCallbackService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesCallbackDatabase\r
BarchInternetBankingSystemPaymentServicesNotificationsService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesNotificationsDatabase : "<color:#6E6E6E>Персистирование/чтение данных<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentBroker .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentServicesNotificationsService : "<color:#6E6E6E>event\\nуспешный платеж<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesPaymentsService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemPaymentProcessing : "<color:#6E6E6E>gRPC\\nЗапрос на обработку платежа<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesNotificationsService .[#6E6E6E,thickness=2].> Merchant : "<color:#6E6E6E>Event: поступлении платежа со стороны клиента<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesNotificationsService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemLegacyBanking : "<color:#6E6E6E>smtp/https\\nОтправка пушей<color:#6E6E6E>"\r
BarchInternetBankingSystemPaymentServicesCoreIntegrationService .[#6E6E6E,thickness=2].> BarchInternetBankingSystemLegacyBanking : "<color:#6E6E6E>Использование легаси-функциональности<color:#6E6E6E>"\r
BarchInternetBankingSystemLegacyBanking .[#6E6E6E,thickness=2].> BarchInternetBankingSystemLegacyBankingDatabase\r
@enduml\r
`;default:throw new Error("Unknown viewId: "+n)}}export{e as pumlSource};
