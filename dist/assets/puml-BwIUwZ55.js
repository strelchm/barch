function e(r){switch(r){case"index":return`@startuml\r
title "System Landscape"\r
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
skinparam rectangle<<Boutique>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<Payment-gateway>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<Email-provider>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "==Online Boutique System\\n\\nE-commerce app for browsing and purchasing various items." <<Boutique>> as Boutique\r
rectangle "==Payment Gateway\\n<size:10>[Stripe]</size>\\n\\n3rd-party Platform to processonline payments" <<Payment-gateway>> as Payment-gateway\r
rectangle "==Email Provider\\n<size:10>[SendGrid]</size>\\n\\n3rd-party Platform to sendtransactional emails" <<Email-provider>> as Email-provider\r
\r
Customer .[#6E6E6E,thickness=2].> Boutique : "<color:#6E6E6E>uses<color:#6E6E6E>"\r
Boutique .[#6E6E6E,thickness=2].> Payment-gateway : "<color:#6E6E6E>processes payments<color:#6E6E6E>"\r
Boutique .[#6E6E6E,thickness=2].> Email-provider : "<color:#6E6E6E>delegates email sending<color:#6E6E6E>"\r
@enduml\r
`;case"customer":return`@startuml\r
title "Customer"\r
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
skinparam rectangle<<BoutiqueFrontend>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #3b82f6\r
  skinparam RectangleFontColor<<Boutique>> #3b82f6\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<BoutiqueFrontend>> as BoutiqueFrontend\r
}\r
\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontend : "<color:#6E6E6E>browses and buys products<color:#6E6E6E>"\r
@enduml\r
`;case"boutique":return`@startuml\r
title "Online Boutique System"\r
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
skinparam rectangle<<BoutiqueFrontend>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueCheckout>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueCart>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueEmail>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiquePayments>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueShipping>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueActionLog>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueCatalogue>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<BoutiqueDb>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #3b82f6\r
  skinparam RectangleFontColor<<Boutique>> #3b82f6\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<BoutiqueFrontend>> as BoutiqueFrontend\r
  rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<BoutiqueCheckout>> as BoutiqueCheckout\r
  rectangle "==Cart Service\\n<size:10>[Node.js]</size>\\n\\nStores the items in the user's shopping cart in Redis and retrieves it." <<BoutiqueCart>> as BoutiqueCart\r
  rectangle "==Email Service\\n\\nSends emails to customers using templates and customer data." <<BoutiqueEmail>> as BoutiqueEmail\r
  rectangle "==Payment Service\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<BoutiquePayments>> as BoutiquePayments\r
  rectangle "==Shipping Service\\n<size:10>[.NET Service]</size>\\n\\nGives shipping cost estimates based on the shopping cart. Ships items to the given address." <<BoutiqueShipping>> as BoutiqueShipping\r
  rectangle "==Action Log Service\\n<size:10>[Go]</size>\\n\\nManages user activity and search history." <<BoutiqueActionLog>> as BoutiqueActionLog\r
  rectangle "==Product Catalogue Service\\n<size:10>[Laravel]</size>\\n\\nProvides a list of products and ability to search products and get individual products." <<BoutiqueCatalogue>> as BoutiqueCatalogue\r
  database "==Boutique Database\\n<size:10>[PostgreSQL]</size>\\n\\nStores all products, orders, and user data." <<BoutiqueDb>> as BoutiqueDb\r
}\r
\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontend : "<color:#6E6E6E>browses and buys products<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueEmail : "<color:#6E6E6E>sends order confirmation<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueActionLog : "<color:#6E6E6E>sends activity data<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiquePayments : "<color:#6E6E6E>sends payment request<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>sends checkout data<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCheckout : "<color:#6E6E6E>sends checkout information<color:#6E6E6E>"\r
BoutiqueCart .[#6E6E6E,thickness=2].> BoutiqueActionLog : "<color:#6E6E6E>sends activity data<color:#6E6E6E>"\r
BoutiqueCart .[#6E6E6E,thickness=2].> BoutiqueCatalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCart : "<color:#6E6E6E>gets cart data<color:#6E6E6E>"\r
BoutiquePayments .[#6E6E6E,thickness=2].> BoutiqueDb : "<color:#6E6E6E>updates order status<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiquePayments : "<color:#6E6E6E>gets exchange rates<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>gets shipping cost<color:#6E6E6E>"\r
BoutiqueCatalogue .[#6E6E6E,thickness=2].> BoutiqueDb : "<color:#6E6E6E>gets products<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCatalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
@enduml\r
`;case"frontend":return`@startuml\r
title "Frontend"\r
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
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueFrontendCatalogue>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BoutiqueFrontendCheckout>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BoutiqueFrontendProfile>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BoutiqueCatalogue>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCheckout>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCart>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiquePayments>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueShipping>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #0284c7\r
  skinparam RectangleFontColor<<Boutique>> #0284c7\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "Frontend" <<BoutiqueFrontend>> as BoutiqueFrontend {\r
    skinparam RectangleBorderColor<<BoutiqueFrontend>> #428a4f\r
    skinparam RectangleFontColor<<BoutiqueFrontend>> #428a4f\r
    skinparam RectangleBorderStyle<<BoutiqueFrontend>> dashed\r
\r
    rectangle "==Product Catalogue\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nDisplays products and allows users to search and view individual products" <<BoutiqueFrontendCatalogue>> as BoutiqueFrontendCatalogue\r
    rectangle "==Checkout\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nAllows to review shopping cart, enter shipping details and proceed to the payment" <<BoutiqueFrontendCheckout>> as BoutiqueFrontendCheckout\r
    rectangle "==User Profile\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nDisplays user information and order history." <<BoutiqueFrontendProfile>> as BoutiqueFrontendProfile\r
  }\r
  rectangle "==Product Catalogue Service\\n<size:10>[Laravel]</size>\\n\\nProvides a list of products and ability to search products and get individual products." <<BoutiqueCatalogue>> as BoutiqueCatalogue\r
  rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<BoutiqueCheckout>> as BoutiqueCheckout\r
  rectangle "==Cart Service\\n<size:10>[Node.js]</size>\\n\\nStores the items in the user's shopping cart in Redis and retrieves it." <<BoutiqueCart>> as BoutiqueCart\r
  rectangle "==Payment Service\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<BoutiquePayments>> as BoutiquePayments\r
  rectangle "==Shipping Service\\n<size:10>[.NET Service]</size>\\n\\nGives shipping cost estimates based on the shopping cart. Ships items to the given address." <<BoutiqueShipping>> as BoutiqueShipping\r
}\r
\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontendCatalogue : "<color:#6E6E6E>browses products<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontendCheckout : "<color:#6E6E6E>buys products<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontendProfile : "<color:#6E6E6E>manages account and reviews history<color:#6E6E6E>"\r
BoutiqueFrontendCatalogue .[#6E6E6E,thickness=2].> BoutiqueCart : "<color:#6E6E6E>puts items in cart<color:#6E6E6E>"\r
BoutiqueFrontendCatalogue .[#6E6E6E,thickness=2].> BoutiqueCatalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
BoutiqueFrontendCheckout .[#6E6E6E,thickness=2].> BoutiqueCheckout : "<color:#6E6E6E>sends checkout information<color:#6E6E6E>"\r
BoutiqueFrontendCheckout .[#6E6E6E,thickness=2].> BoutiqueCart : "<color:#6E6E6E>gets cart data<color:#6E6E6E>"\r
BoutiqueFrontendCheckout .[#6E6E6E,thickness=2].> BoutiquePayments : "<color:#6E6E6E>gets exchange rates<color:#6E6E6E>"\r
BoutiqueFrontendCheckout .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>gets shipping cost<color:#6E6E6E>"\r
@enduml\r
`;case"checkout":return`@startuml\r
title "Checkout Service"\r
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
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueFrontend>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCheckout>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BoutiqueEmail>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueActionLog>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiquePayments>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueShipping>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<Email-provider>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<Payment-gateway>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #64748b\r
  skinparam RectangleFontColor<<Boutique>> #64748b\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<BoutiqueFrontend>> as BoutiqueFrontend\r
  rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<BoutiqueCheckout>> as BoutiqueCheckout\r
  rectangle "==Email Service\\n\\nSends emails to customers using templates and customer data." <<BoutiqueEmail>> as BoutiqueEmail\r
  rectangle "==Action Log Service\\n<size:10>[Go]</size>\\n\\nManages user activity and search history." <<BoutiqueActionLog>> as BoutiqueActionLog\r
  rectangle "==Payment Service\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<BoutiquePayments>> as BoutiquePayments\r
  rectangle "==Shipping Service\\n<size:10>[.NET Service]</size>\\n\\nGives shipping cost estimates based on the shopping cart. Ships items to the given address." <<BoutiqueShipping>> as BoutiqueShipping\r
}\r
rectangle "==Email Provider\\n<size:10>[SendGrid]</size>\\n\\n3rd-party Platform to sendtransactional emails" <<Email-provider>> as Email-provider\r
rectangle "==Payment Gateway\\n<size:10>[Stripe]</size>\\n\\n3rd-party Platform to processonline payments" <<Payment-gateway>> as Payment-gateway\r
\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCheckout : "<color:#6E6E6E>sends checkout information<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueEmail : "<color:#6E6E6E>sends order confirmation<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueActionLog : "<color:#6E6E6E>sends activity data<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiquePayments : "<color:#6E6E6E>sends payment request<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>sends checkout data<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontend : "<color:#6E6E6E>browses and buys products<color:#6E6E6E>"\r
BoutiquePayments .[#6E6E6E,thickness=2].> Payment-gateway : "<color:#6E6E6E>processes payments<color:#6E6E6E>"\r
BoutiqueEmail .[#6E6E6E,thickness=2].> Email-provider : "<color:#6E6E6E>delegates email sending<color:#6E6E6E>"\r
@enduml\r
`;case"cart":return`@startuml\r
title "Cart Service"\r
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
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueFrontendCatalogue>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueFrontendCheckout>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCartApi>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BoutiqueCartCache>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BoutiqueActionLog>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCatalogue>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #0284c7\r
  skinparam RectangleFontColor<<Boutique>> #0284c7\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "Frontend" <<BoutiqueFrontend>> as BoutiqueFrontend {\r
    skinparam RectangleBorderColor<<BoutiqueFrontend>> #0284c7\r
    skinparam RectangleFontColor<<BoutiqueFrontend>> #0284c7\r
    skinparam RectangleBorderStyle<<BoutiqueFrontend>> dashed\r
\r
    rectangle "==Product Catalogue\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nDisplays products and allows users to search and view individual products" <<BoutiqueFrontendCatalogue>> as BoutiqueFrontendCatalogue\r
    rectangle "==Checkout\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nAllows to review shopping cart, enter shipping details and proceed to the payment" <<BoutiqueFrontendCheckout>> as BoutiqueFrontendCheckout\r
  }\r
  rectangle "Cart Service" <<BoutiqueCart>> as BoutiqueCart {\r
    skinparam RectangleBorderColor<<BoutiqueCart>> #428a4f\r
    skinparam RectangleFontColor<<BoutiqueCart>> #428a4f\r
    skinparam RectangleBorderStyle<<BoutiqueCart>> dashed\r
\r
    rectangle "==Cart API\\n<size:10>[fastify]</size>\\n\\nProvides access to cart data." <<BoutiqueCartApi>> as BoutiqueCartApi\r
    rectangle "==Cart Cache\\n<size:10>[Redis]</size>\\n\\nStores cart data." <<BoutiqueCartCache>> as BoutiqueCartCache\r
  }\r
  rectangle "==Action Log Service\\n<size:10>[Go]</size>\\n\\nManages user activity and search history." <<BoutiqueActionLog>> as BoutiqueActionLog\r
  rectangle "==Product Catalogue Service\\n<size:10>[Laravel]</size>\\n\\nProvides a list of products and ability to search products and get individual products." <<BoutiqueCatalogue>> as BoutiqueCatalogue\r
}\r
\r
BoutiqueCartApi .[#6E6E6E,thickness=2].> BoutiqueCartCache : "<color:#6E6E6E>gets cart data<color:#6E6E6E>"\r
BoutiqueCartApi .[#6E6E6E,thickness=2].> BoutiqueActionLog : "<color:#6E6E6E>sends activity data<color:#6E6E6E>"\r
BoutiqueCartApi .[#6E6E6E,thickness=2].> BoutiqueCatalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
BoutiqueFrontendCatalogue .[#6E6E6E,thickness=2].> BoutiqueCartApi : "<color:#6E6E6E>puts items in cart<color:#6E6E6E>"\r
BoutiqueFrontendCheckout .[#6E6E6E,thickness=2].> BoutiqueCartApi : "<color:#6E6E6E>gets cart data<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontendCatalogue : "<color:#6E6E6E>browses products<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontendCheckout : "<color:#6E6E6E>buys products<color:#6E6E6E>"\r
@enduml\r
`;case"payments":return`@startuml\r
title "Payment Service"\r
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
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueFrontend>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCheckout>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiquePaymentsProcessor>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<BoutiquePaymentsCurrency>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<Payment-gateway>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam database<<BoutiqueDbOrders>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #64748b\r
  skinparam RectangleFontColor<<Boutique>> #64748b\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<BoutiqueFrontend>> as BoutiqueFrontend\r
  rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<BoutiqueCheckout>> as BoutiqueCheckout\r
  rectangle "Payment Service" <<BoutiquePayments>> as BoutiquePayments {\r
    skinparam RectangleBorderColor<<BoutiquePayments>> #428a4f\r
    skinparam RectangleFontColor<<BoutiquePayments>> #428a4f\r
    skinparam RectangleBorderStyle<<BoutiquePayments>> dashed\r
\r
    rectangle "==Payment Processor\\n<size:10>[Scala]</size>\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<BoutiquePaymentsProcessor>> as BoutiquePaymentsProcessor\r
    rectangle "==Currency Service\\n<size:10>[Scala]</size>\\n\\nConverts one money amount to another currency." <<BoutiquePaymentsCurrency>> as BoutiquePaymentsCurrency\r
  }\r
  rectangle "Boutique Database" <<BoutiqueDb>> as BoutiqueDb {\r
    skinparam RectangleBorderColor<<BoutiqueDb>> #0284c7\r
    skinparam RectangleFontColor<<BoutiqueDb>> #0284c7\r
    skinparam RectangleBorderStyle<<BoutiqueDb>> dashed\r
\r
    database "==Orders\\n\\nStores all order data." <<BoutiqueDbOrders>> as BoutiqueDbOrders\r
  }\r
}\r
rectangle "==Payment Gateway\\n<size:10>[Stripe]</size>\\n\\n3rd-party Platform to processonline payments" <<Payment-gateway>> as Payment-gateway\r
\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiquePaymentsProcessor : "<color:#6E6E6E>sends payment request<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiquePaymentsCurrency : "<color:#6E6E6E>gets exchange rates<color:#6E6E6E>"\r
BoutiquePaymentsProcessor .[#6E6E6E,thickness=2].> Payment-gateway : "<color:#6E6E6E>processes payments<color:#6E6E6E>"\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontend : "<color:#6E6E6E>browses and buys products<color:#6E6E6E>"\r
BoutiquePaymentsProcessor .[#6E6E6E,thickness=2].> BoutiqueDbOrders : "<color:#6E6E6E>updates order status<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCheckout : "<color:#6E6E6E>sends checkout information<color:#6E6E6E>"\r
@enduml\r
`;case"actionLog":return`@startuml\r
title "Action Log Service"\r
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
skinparam rectangle<<BoutiqueCheckout>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCart>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueFrontend>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueActionLog>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<BoutiqueCheckout>> as BoutiqueCheckout\r
rectangle "==Cart Service\\n<size:10>[Node.js]</size>\\n\\nStores the items in the user's shopping cart in Redis and retrieves it." <<BoutiqueCart>> as BoutiqueCart\r
rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<BoutiqueFrontend>> as BoutiqueFrontend\r
rectangle "==Action Log Service\\n<size:10>[Go]</size>\\n\\nManages user activity and search history." <<BoutiqueActionLog>> as BoutiqueActionLog\r
\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueActionLog : "<color:#6E6E6E>sends activity data<color:#6E6E6E>"\r
BoutiqueCart .[#6E6E6E,thickness=2].> BoutiqueActionLog : "<color:#6E6E6E>sends activity data<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueActionLog : "<color:#6E6E6E>sends user activity data<color:#6E6E6E>"\r
@enduml\r
`;case"shipping":return`@startuml\r
title "Shipping Service"\r
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
skinparam rectangle<<BoutiqueCheckout>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueFrontend>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueShipping>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #0284c7\r
  skinparam RectangleFontColor<<Boutique>> #0284c7\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<BoutiqueCheckout>> as BoutiqueCheckout\r
  rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<BoutiqueFrontend>> as BoutiqueFrontend\r
  rectangle "==Shipping Service\\n<size:10>[.NET Service]</size>\\n\\nGives shipping cost estimates based on the shopping cart. Ships items to the given address." <<BoutiqueShipping>> as BoutiqueShipping\r
}\r
\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>sends checkout data<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>gets shipping cost<color:#6E6E6E>"\r
@enduml\r
`;case"database":return`@startuml\r
title "Boutique Database"\r
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
skinparam rectangle<<BoutiquePayments>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCatalogue>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam database<<BoutiqueDbOrders>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam database<<BoutiqueDbProducts>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam database<<BoutiqueDbUsers>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #0284c7\r
  skinparam RectangleFontColor<<Boutique>> #0284c7\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Payment Service\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<BoutiquePayments>> as BoutiquePayments\r
  rectangle "==Product Catalogue Service\\n<size:10>[Laravel]</size>\\n\\nProvides a list of products and ability to search products and get individual products." <<BoutiqueCatalogue>> as BoutiqueCatalogue\r
  rectangle "Boutique Database" <<BoutiqueDb>> as BoutiqueDb {\r
    skinparam RectangleBorderColor<<BoutiqueDb>> #428a4f\r
    skinparam RectangleFontColor<<BoutiqueDb>> #428a4f\r
    skinparam RectangleBorderStyle<<BoutiqueDb>> dashed\r
\r
    database "==Orders\\n\\nStores all order data." <<BoutiqueDbOrders>> as BoutiqueDbOrders\r
    database "==Products\\n\\nStores all product data." <<BoutiqueDbProducts>> as BoutiqueDbProducts\r
    database "==Users\\n\\nStores all user data." <<BoutiqueDbUsers>> as BoutiqueDbUsers\r
  }\r
}\r
\r
BoutiquePayments .[#6E6E6E,thickness=2].> BoutiqueDbOrders : "<color:#6E6E6E>updates order status<color:#6E6E6E>"\r
BoutiqueCatalogue .[#6E6E6E,thickness=2].> BoutiqueDbProducts : "<color:#6E6E6E>gets products<color:#6E6E6E>"\r
BoutiqueDbOrders .[#6E6E6E,thickness=2].> BoutiqueDbProducts : "<color:#6E6E6E>many-to-many<color:#6E6E6E>"\r
BoutiqueDbOrders .[#6E6E6E,thickness=2].> BoutiqueDbUsers : "<color:#6E6E6E>many-to-many<color:#6E6E6E>"\r
@enduml\r
`;case"catalogue":return`@startuml\r
title "Product Catalogue Service"\r
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
skinparam rectangle<<BoutiqueCart>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueFrontend>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCatalogue>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam database<<BoutiqueDbProducts>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #0284c7\r
  skinparam RectangleFontColor<<Boutique>> #0284c7\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Cart Service\\n<size:10>[Node.js]</size>\\n\\nStores the items in the user's shopping cart in Redis and retrieves it." <<BoutiqueCart>> as BoutiqueCart\r
  rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<BoutiqueFrontend>> as BoutiqueFrontend\r
  rectangle "==Product Catalogue Service\\n<size:10>[Laravel]</size>\\n\\nProvides a list of products and ability to search products and get individual products." <<BoutiqueCatalogue>> as BoutiqueCatalogue\r
  rectangle "Boutique Database" <<BoutiqueDb>> as BoutiqueDb {\r
    skinparam RectangleBorderColor<<BoutiqueDb>> #0284c7\r
    skinparam RectangleFontColor<<BoutiqueDb>> #0284c7\r
    skinparam RectangleBorderStyle<<BoutiqueDb>> dashed\r
\r
    database "==Products\\n\\nStores all product data." <<BoutiqueDbProducts>> as BoutiqueDbProducts\r
  }\r
}\r
\r
BoutiqueCart .[#6E6E6E,thickness=2].> BoutiqueCatalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCatalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
BoutiqueCatalogue .[#6E6E6E,thickness=2].> BoutiqueDbProducts : "<color:#6E6E6E>gets products<color:#6E6E6E>"\r
@enduml\r
`;case"development-env":return`@startuml\r
title "Deployments / Environment: Development"\r
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
skinparam person<<DevDeveloper>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<DevDevmachineFrontend>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<DevDevmachineCart>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<DevDevmachineCatalogue>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<DevContainersCheckout>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<DevContainersPayments>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<DevContainersShipping>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<DevContainersDb>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
person "==Developer" <<DevDeveloper>> as DevDeveloper\r
rectangle "Developer Machine" <<DevDevmachine>> as DevDevmachine {\r
  skinparam RectangleBorderColor<<DevDevmachine>> #3b82f6\r
  skinparam RectangleFontColor<<DevDevmachine>> #3b82f6\r
  skinparam RectangleBorderStyle<<DevDevmachine>> dashed\r
\r
  rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<DevDevmachineFrontend>> as DevDevmachineFrontend\r
  rectangle "==Cart Service\\n<size:10>[Node.js]</size>\\n\\nStores the items in the user's shopping cart in Redis and retrieves it." <<DevDevmachineCart>> as DevDevmachineCart\r
  rectangle "==Product Catalogue Service\\n<size:10>[Laravel]</size>\\n\\nProvides a list of products and ability to search products and get individual products." <<DevDevmachineCatalogue>> as DevDevmachineCatalogue\r
}\r
rectangle "Shared Containers" <<DevContainers>> as DevContainers {\r
  skinparam RectangleBorderColor<<DevContainers>> #3b82f6\r
  skinparam RectangleFontColor<<DevContainers>> #3b82f6\r
  skinparam RectangleBorderStyle<<DevContainers>> dashed\r
\r
  rectangle "==Mocked Checkout Service\\n<size:10>[docker container]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<DevContainersCheckout>> as DevContainersCheckout\r
  rectangle "==Mocked Payments Service\\n<size:10>[docker container]</size>\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<DevContainersPayments>> as DevContainersPayments\r
  rectangle "==Mocked Shipping Service\\n<size:10>[docker container]</size>\\n\\nGives shipping cost estimates based on the shopping cart. Ships items to the given address." <<DevContainersShipping>> as DevContainersShipping\r
  database "==Development Database\\n<size:10>[PostgreSQL]</size>\\n\\nStores all products, orders, and user data." <<DevContainersDb>> as DevContainersDb\r
}\r
\r
DevDevmachineFrontend .[#6E6E6E,thickness=2].> DevDevmachineCatalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
DevDevmachineFrontend .[#6E6E6E,thickness=2].> DevDevmachineCart : "<color:#6E6E6E>[...]<color:#6E6E6E>"\r
DevDevmachineCart .[#6E6E6E,thickness=2].> DevDevmachineCatalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
DevContainersCheckout .[#6E6E6E,thickness=2].> DevContainersPayments : "<color:#6E6E6E>sends payment request<color:#6E6E6E>"\r
DevContainersCheckout .[#6E6E6E,thickness=2].> DevContainersShipping : "<color:#6E6E6E>sends checkout data<color:#6E6E6E>"\r
DevContainersPayments .[#6E6E6E,thickness=2].> DevContainersDb : "<color:#6E6E6E>updates order status<color:#6E6E6E>"\r
DevDeveloper .[#6E6E6E,thickness=2].> DevDevmachineFrontend : "<color:#6E6E6E>[...]<color:#6E6E6E>"\r
DevDevmachineFrontend .[#6E6E6E,thickness=2].> DevContainersCheckout : "<color:#6E6E6E>sends checkout information<color:#6E6E6E>"\r
DevDevmachineFrontend .[#6E6E6E,thickness=2].> DevContainersPayments : "<color:#6E6E6E>gets exchange rates<color:#6E6E6E>"\r
DevDevmachineFrontend .[#6E6E6E,thickness=2].> DevContainersShipping : "<color:#6E6E6E>gets shipping cost<color:#6E6E6E>"\r
DevDevmachineCatalogue .[#6E6E6E,thickness=2].> DevContainersDb : "<color:#6E6E6E>gets products<color:#6E6E6E>"\r
@enduml\r
`;case"production-env":return`@startuml\r
title "Deployments / Environment: Production"\r
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
skinparam person<<InternetCustomer>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<ProdVm1Frontend>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<ProdVm2Frontend>>{\r
  BackgroundColor #6366f1\r
  FontColor #eef2ff\r
  BorderColor #4f46e5\r
}\r
skinparam rectangle<<ProdVm1Cart>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<ProdVm2Cart>>{\r
  BackgroundColor #6366f1\r
  FontColor #eef2ff\r
  BorderColor #4f46e5\r
}\r
skinparam rectangle<<ProdVm1Catalogue>>{\r
  BackgroundColor #428a4f\r
  FontColor #f8fafc\r
  BorderColor #2d5d39\r
}\r
skinparam rectangle<<ProdVm2Catalogue>>{\r
  BackgroundColor #6366f1\r
  FontColor #eef2ff\r
  BorderColor #4f46e5\r
}\r
skinparam rectangle<<ProdAppvmsCheckout>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<ProdAppvmsPayments>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<ProdAppvmsShipping>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<ProdDbvm1Db>>{\r
  BackgroundColor #A35829\r
  FontColor #FFE0C2\r
  BorderColor #7E451D\r
}\r
skinparam database<<ProdDbvm2Db>>{\r
  BackgroundColor #A35829\r
  FontColor #FFE0C2\r
  BorderColor #7E451D\r
}\r
rectangle "Internet" <<Internet>> as Internet {\r
  skinparam RectangleBorderColor<<Internet>> #428a4f\r
  skinparam RectangleFontColor<<Internet>> #428a4f\r
  skinparam RectangleBorderStyle<<Internet>> dashed\r
\r
  person "==Customer" <<InternetCustomer>> as InternetCustomer\r
}\r
rectangle "Production" <<Prod>> as Prod {\r
  skinparam RectangleBorderColor<<Prod>> #64748b\r
  skinparam RectangleFontColor<<Prod>> #64748b\r
  skinparam RectangleBorderStyle<<Prod>> dashed\r
\r
  rectangle "Web Server 1" <<ProdVm1>> as ProdVm1 {\r
    skinparam RectangleBorderColor<<ProdVm1>> #428a4f\r
    skinparam RectangleFontColor<<ProdVm1>> #428a4f\r
    skinparam RectangleBorderStyle<<ProdVm1>> dashed\r
\r
    rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<ProdVm1Frontend>> as ProdVm1Frontend\r
    rectangle "==Cart Service\\n<size:10>[Node.js]</size>\\n\\nStores the items in the user's shopping cart in Redis and retrieves it." <<ProdVm1Cart>> as ProdVm1Cart\r
    rectangle "==Product Catalogue Service\\n<size:10>[Laravel]</size>\\n\\nProvides a list of products and ability to search products and get individual products." <<ProdVm1Catalogue>> as ProdVm1Catalogue\r
  }\r
  rectangle "Web Server 2" <<ProdVm2>> as ProdVm2 {\r
    skinparam RectangleBorderColor<<ProdVm2>> #6366f1\r
    skinparam RectangleFontColor<<ProdVm2>> #6366f1\r
    skinparam RectangleBorderStyle<<ProdVm2>> dashed\r
\r
    rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<ProdVm2Frontend>> as ProdVm2Frontend\r
    rectangle "==Cart Service\\n<size:10>[Node.js]</size>\\n\\nStores the items in the user's shopping cart in Redis and retrieves it." <<ProdVm2Cart>> as ProdVm2Cart\r
    rectangle "==Product Catalogue Service\\n<size:10>[Laravel]</size>\\n\\nProvides a list of products and ability to search products and get individual products." <<ProdVm2Catalogue>> as ProdVm2Catalogue\r
  }\r
  rectangle "Application Servers (x2)" <<ProdAppvms>> as ProdAppvms {\r
    skinparam RectangleBorderColor<<ProdAppvms>> #3b82f6\r
    skinparam RectangleFontColor<<ProdAppvms>> #3b82f6\r
    skinparam RectangleBorderStyle<<ProdAppvms>> dashed\r
\r
    rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<ProdAppvmsCheckout>> as ProdAppvmsCheckout\r
    rectangle "==Payment Service\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<ProdAppvmsPayments>> as ProdAppvmsPayments\r
    rectangle "==Shipping Service\\n<size:10>[.NET Service]</size>\\n\\nGives shipping cost estimates based on the shopping cart. Ships items to the given address." <<ProdAppvmsShipping>> as ProdAppvmsShipping\r
  }\r
  rectangle "Database Server 1" <<ProdDbvm1>> as ProdDbvm1 {\r
    skinparam RectangleBorderColor<<ProdDbvm1>> #A35829\r
    skinparam RectangleFontColor<<ProdDbvm1>> #A35829\r
    skinparam RectangleBorderStyle<<ProdDbvm1>> dashed\r
\r
    database "==Boutique Database\\n<size:10>[PostgreSQL]</size>\\n\\nStores all products, orders, and user data." <<ProdDbvm1Db>> as ProdDbvm1Db\r
  }\r
  rectangle "Database Server 2" <<ProdDbvm2>> as ProdDbvm2 {\r
    skinparam RectangleBorderColor<<ProdDbvm2>> #A35829\r
    skinparam RectangleFontColor<<ProdDbvm2>> #A35829\r
    skinparam RectangleBorderStyle<<ProdDbvm2>> dashed\r
\r
    database "==Boutique Database\\n<size:10>[PostgreSQL]</size>\\n\\nStores all products, orders, and user data." <<ProdDbvm2Db>> as ProdDbvm2Db\r
  }\r
}\r
\r
ProdVm1Frontend .[#6E6E6E,thickness=2].> ProdVm1Cart : "<color:#6E6E6E>[...]<color:#6E6E6E>"\r
ProdVm1Cart .[#6E6E6E,thickness=2].> ProdVm1Catalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
ProdVm2Frontend .[#6E6E6E,thickness=2].> ProdVm2Cart : "<color:#6E6E6E>[...]<color:#6E6E6E>"\r
ProdVm2Cart .[#6E6E6E,thickness=2].> ProdVm2Catalogue : "<color:#6E6E6E>gets product data<color:#6E6E6E>"\r
ProdAppvmsCheckout .[#6E6E6E,thickness=2].> ProdAppvmsPayments : "<color:#6E6E6E>sends payment request<color:#6E6E6E>"\r
ProdAppvmsCheckout .[#6E6E6E,thickness=2].> ProdAppvmsShipping : "<color:#6E6E6E>sends checkout data<color:#6E6E6E>"\r
ProdVm1Frontend .[#6E6E6E,thickness=2].> ProdAppvmsCheckout : "<color:#6E6E6E>sends checkout information<color:#6E6E6E>"\r
ProdVm1Frontend .[#6E6E6E,thickness=2].> ProdAppvmsShipping : "<color:#6E6E6E>gets shipping cost<color:#6E6E6E>"\r
ProdVm1Catalogue .[#6E6E6E,thickness=2].> ProdDbvm1Db : "<color:#6E6E6E>gets products<color:#6E6E6E>"\r
ProdVm2Frontend .[#6E6E6E,thickness=2].> ProdAppvmsCheckout : "<color:#6E6E6E>sends checkout information<color:#6E6E6E>"\r
ProdVm2Catalogue .[#6E6E6E,thickness=2].> ProdDbvm1Db : "<color:#6E6E6E>gets products<color:#6E6E6E>"\r
ProdAppvmsPayments .[#6E6E6E,thickness=2].> ProdDbvm1Db : "<color:#6E6E6E>updates order status<color:#6E6E6E>"\r
ProdDbvm1Db .[#6E6E6E,thickness=2].> ProdDbvm2Db : "<color:#6E6E6E>replicates<color:#6E6E6E>"\r
InternetCustomer .[#6E6E6E,thickness=2].> ProdVm1Frontend : "<color:#6E6E6E>[...]<color:#6E6E6E>"\r
InternetCustomer .[#6E6E6E,thickness=2].> ProdVm2Frontend : "<color:#6E6E6E>[...]<color:#6E6E6E>"\r
@enduml\r
`;case"place-order":return`@startuml\r
title "Use Cases / Usecase 01: Placing an Order"\r
left to right direction\r
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
skinparam rectangle<<BoutiqueFrontend>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCart>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueCheckout>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam database<<BoutiqueDb>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueShipping>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiqueEmail>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<BoutiquePayments>>{\r
  BackgroundColor #0284c7\r
  FontColor #f0f9ff\r
  BorderColor #0369a1\r
}\r
skinparam rectangle<<Payment-gateway>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #737373\r
  skinparam RectangleFontColor<<Boutique>> #737373\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Frontend\\n<size:10>[Vue.js / TypeScript]</size>\\n\\nProvides access to the services via the web interface" <<BoutiqueFrontend>> as BoutiqueFrontend\r
  rectangle "==Cart Service\\n<size:10>[Node.js]</size>\\n\\nStores the items in the user's shopping cart in Redis and retrieves it." <<BoutiqueCart>> as BoutiqueCart\r
  rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<BoutiqueCheckout>> as BoutiqueCheckout\r
  database "==Boutique Database\\n<size:10>[PostgreSQL]</size>\\n\\nStores all products, orders, and user data." <<BoutiqueDb>> as BoutiqueDb\r
  rectangle "==Shipping Service\\n<size:10>[.NET Service]</size>\\n\\nGives shipping cost estimates based on the shopping cart. Ships items to the given address." <<BoutiqueShipping>> as BoutiqueShipping\r
  rectangle "==Email Service\\n\\nSends emails to customers using templates and customer data." <<BoutiqueEmail>> as BoutiqueEmail\r
  rectangle "==Payment Service\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<BoutiquePayments>> as BoutiquePayments\r
}\r
rectangle "==Payment Gateway\\n<size:10>[Stripe]</size>\\n\\n3rd-party Platform to processonline payments" <<Payment-gateway>> as Payment-gateway\r
\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontend : "<color:#6E6E6E>places products in cart<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCart : "<color:#6E6E6E>creates or updates cart<color:#6E6E6E>\\n<color:#6E6E6E><size:8>[POST /shopping-cart]</size>"\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontend : "<color:#6E6E6E>enters shipping information<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCart : "<color:#6E6E6E>creates or updates cart<color:#6E6E6E>\\n<color:#6E6E6E><size:8>[POST /shopping-cart]</size>"\r
Customer .[#6E6E6E,thickness=2].> BoutiqueFrontend : "<color:#6E6E6E>enters payment details<color:#6E6E6E>"\r
BoutiqueFrontend .[#6E6E6E,thickness=2].> BoutiqueCheckout : "<color:#6E6E6E>initiates payment<color:#6E6E6E>\\n<color:#6E6E6E><size:8>[POST /checkout]</size>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueDb : "<color:#6E6E6E>writes new order<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>reserves inventory<color:#6E6E6E>"\r
BoutiqueShipping .[#6E6E6E,thickness=2].> BoutiqueCheckout : "<color:#6E6E6E>confirms inventory reservation<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueCart : "<color:#6E6E6E>marks cart as purchased<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueEmail : "<color:#6E6E6E>sends order confirmation<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiquePayments : "<color:#6E6E6E>creates payment<color:#6E6E6E>"\r
BoutiquePayments .[#6E6E6E,thickness=2].> Payment-gateway : "<color:#6E6E6E>processes payment<color:#6E6E6E>"\r
Payment-gateway .[#6E6E6E,thickness=2].> Payment-gateway : "<color:#6E6E6E>processes payment with customer<color:#6E6E6E>"\r
Payment-gateway .[#6E6E6E,thickness=2].> BoutiquePayments : "<color:#6E6E6E>confirms payment with webnook<color:#6E6E6E>"\r
BoutiquePayments .[#6E6E6E,thickness=2].> BoutiqueCheckout\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>requests fulfillment<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueEmail : "<color:#6E6E6E>sends confirmation<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueDb : "<color:#6E6E6E>updates order status<color:#6E6E6E>"\r
@enduml\r
`;case"order-fulfillment":return`@startuml\r
title "Use Cases / Usecase 02: Order Fulfillment"\r
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
skinparam rectangle<<Payment-gateway>>{\r
  BackgroundColor #64748b\r
  FontColor #f8fafc\r
  BorderColor #475569\r
}\r
skinparam rectangle<<BoutiquePayments>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueCheckout>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueShipping>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam rectangle<<BoutiqueEmail>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
skinparam database<<BoutiqueDb>>{\r
  BackgroundColor #3b82f6\r
  FontColor #eff6ff\r
  BorderColor #2563eb\r
}\r
rectangle "Online Boutique System" <<Boutique>> as Boutique {\r
  skinparam RectangleBorderColor<<Boutique>> #64748b\r
  skinparam RectangleFontColor<<Boutique>> #64748b\r
  skinparam RectangleBorderStyle<<Boutique>> dashed\r
\r
  rectangle "==Payment Service\\n\\nCharges the given credit card info with the given amount and returns a transaction ID." <<BoutiquePayments>> as BoutiquePayments\r
  rectangle "==Checkout Service\\n<size:10>[Node.js]</size>\\n\\nRetrieves user cart, prepares order and orchestrates payment, shipping and email notifications." <<BoutiqueCheckout>> as BoutiqueCheckout\r
  rectangle "==Shipping Service\\n<size:10>[.NET Service]</size>\\n\\nGives shipping cost estimates based on the shopping cart. Ships items to the given address." <<BoutiqueShipping>> as BoutiqueShipping\r
  rectangle "==Email Service\\n\\nSends emails to customers using templates and customer data." <<BoutiqueEmail>> as BoutiqueEmail\r
  database "==Boutique Database\\n<size:10>[PostgreSQL]</size>\\n\\nStores all products, orders, and user data." <<BoutiqueDb>> as BoutiqueDb\r
}\r
person "==Customer" <<Customer>> as Customer\r
rectangle "==Payment Gateway\\n<size:10>[Stripe]</size>\\n\\n3rd-party Platform to processonline payments" <<Payment-gateway>> as Payment-gateway\r
\r
Customer .[#6E6E6E,thickness=2].> Boutique : "<color:#6E6E6E>places order<color:#6E6E6E>"\r
Boutique .[#6E6E6E,thickness=2].> Payment-gateway : "<color:#6E6E6E>initiates payment<color:#6E6E6E>"\r
Payment-gateway .[#6E6E6E,thickness=2].> BoutiquePayments : "<color:#6E6E6E>confirms payment with webnook<color:#6E6E6E>"\r
BoutiquePayments .[#6E6E6E,thickness=2].> BoutiqueCheckout : "<color:#6E6E6E>confirms pending payment<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueShipping : "<color:#6E6E6E>requests fulfillment<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueEmail : "<color:#6E6E6E>sends confirmation<color:#6E6E6E>"\r
BoutiqueCheckout .[#6E6E6E,thickness=2].> BoutiqueDb : "<color:#6E6E6E>updates order status<color:#6E6E6E>"\r
BoutiqueShipping .[#6E6E6E,thickness=2].> BoutiqueDb : "<color:#6E6E6E>updates inventory<color:#6E6E6E>"\r
BoutiqueShipping .[#6E6E6E,thickness=2].> BoutiqueEmail : "<color:#6E6E6E>sends shipping confirmation<color:#6E6E6E>"\r
@enduml\r
`;default:throw new Error("Unknown viewId: "+r)}}export{e as pumlSource};
