function r(e){switch(e){case"index":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Boutique: {\r
  label: "Online Boutique System"\r
}\r
Payment-gateway: {\r
  label: "Payment Gateway"\r
}\r
Email-provider: {\r
  label: "Email Provider"\r
}\r
\r
Customer -> Boutique: "uses"\r
Boutique -> Payment-gateway: "processes payments"\r
Boutique -> Email-provider: "delegates email sending"\r
`;case"customer":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Frontend: {\r
    label: "Frontend"\r
  }\r
}\r
\r
Customer -> Boutique.Frontend: "browses and buys products"\r
`;case"boutique":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Frontend: {\r
    label: "Frontend"\r
  }\r
  Checkout: {\r
    label: "Checkout Service"\r
  }\r
  Cart: {\r
    label: "Cart Service"\r
  }\r
  Email: {\r
    label: "Email Service"\r
  }\r
  Payments: {\r
    label: "Payment Service"\r
  }\r
  Shipping: {\r
    label: "Shipping Service"\r
  }\r
  ActionLog: {\r
    label: "Action Log Service"\r
  }\r
  Catalogue: {\r
    label: "Product Catalogue Service"\r
  }\r
  Db: {\r
    label: "Boutique Database"\r
    shape: stored_data\r
  }\r
}\r
\r
Customer -> Boutique.Frontend: "browses and buys products"\r
Boutique.Checkout -> Boutique.Email: "sends order confirmation"\r
Boutique.Checkout -> Boutique.ActionLog: "sends activity data"\r
Boutique.Checkout -> Boutique.Payments: "sends payment request"\r
Boutique.Checkout -> Boutique.Shipping: "sends checkout data"\r
Boutique.Frontend -> Boutique.Checkout: "sends checkout information"\r
Boutique.Cart -> Boutique.ActionLog: "sends activity data"\r
Boutique.Cart -> Boutique.Catalogue: "gets product data"\r
Boutique.Frontend -> Boutique.Cart: "gets cart data"\r
Boutique.Payments -> Boutique.Db: "updates order status"\r
Boutique.Frontend -> Boutique.Payments: "gets exchange rates"\r
Boutique.Frontend -> Boutique.Shipping: "gets shipping cost"\r
Boutique.Catalogue -> Boutique.Db: "gets products"\r
Boutique.Frontend -> Boutique.Catalogue: "gets product data"\r
`;case"frontend":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Frontend: {\r
    label: "Frontend"\r
\r
    Catalogue: {\r
      label: "Product Catalogue"\r
    }\r
    Checkout: {\r
      label: "Checkout"\r
    }\r
    Profile: {\r
      label: "User Profile"\r
    }\r
  }\r
  Catalogue: {\r
    label: "Product Catalogue Service"\r
  }\r
  Checkout: {\r
    label: "Checkout Service"\r
  }\r
  Cart: {\r
    label: "Cart Service"\r
  }\r
  Payments: {\r
    label: "Payment Service"\r
  }\r
  Shipping: {\r
    label: "Shipping Service"\r
  }\r
}\r
\r
Customer -> Boutique.Frontend.Catalogue: "browses products"\r
Customer -> Boutique.Frontend.Checkout: "buys products"\r
Customer -> Boutique.Frontend.Profile: "manages account and reviews history"\r
Boutique.Frontend.Catalogue -> Boutique.Cart: "puts items in cart"\r
Boutique.Frontend.Catalogue -> Boutique.Catalogue: "gets product data"\r
Boutique.Frontend.Checkout -> Boutique.Checkout: "sends checkout information"\r
Boutique.Frontend.Checkout -> Boutique.Cart: "gets cart data"\r
Boutique.Frontend.Checkout -> Boutique.Payments: "gets exchange rates"\r
Boutique.Frontend.Checkout -> Boutique.Shipping: "gets shipping cost"\r
`;case"checkout":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Frontend: {\r
    label: "Frontend"\r
  }\r
  Checkout: {\r
    label: "Checkout Service"\r
  }\r
  Email: {\r
    label: "Email Service"\r
  }\r
  ActionLog: {\r
    label: "Action Log Service"\r
  }\r
  Payments: {\r
    label: "Payment Service"\r
  }\r
  Shipping: {\r
    label: "Shipping Service"\r
  }\r
}\r
Email-provider: {\r
  label: "Email Provider"\r
}\r
Payment-gateway: {\r
  label: "Payment Gateway"\r
}\r
\r
Boutique.Frontend -> Boutique.Checkout: "sends checkout information"\r
Boutique.Checkout -> Boutique.Email: "sends order confirmation"\r
Boutique.Checkout -> Boutique.ActionLog: "sends activity data"\r
Boutique.Checkout -> Boutique.Payments: "sends payment request"\r
Boutique.Checkout -> Boutique.Shipping: "sends checkout data"\r
Customer -> Boutique.Frontend: "browses and buys products"\r
Boutique.Payments -> Payment-gateway: "processes payments"\r
Boutique.Email -> Email-provider: "delegates email sending"\r
`;case"cart":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Frontend: {\r
    label: "Frontend"\r
\r
    Catalogue: {\r
      label: "Product Catalogue"\r
    }\r
    Checkout: {\r
      label: "Checkout"\r
    }\r
  }\r
  Cart: {\r
    label: "Cart Service"\r
\r
    Api: {\r
      label: "Cart API"\r
    }\r
    Cache: {\r
      label: "Cart Cache"\r
    }\r
  }\r
  ActionLog: {\r
    label: "Action Log Service"\r
  }\r
  Catalogue: {\r
    label: "Product Catalogue Service"\r
  }\r
}\r
\r
Boutique.Cart.Api -> Boutique.Cart.Cache: "gets cart data"\r
Boutique.Cart.Api -> Boutique.ActionLog: "sends activity data"\r
Boutique.Cart.Api -> Boutique.Catalogue: "gets product data"\r
Boutique.Frontend.Catalogue -> Boutique.Cart.Api: "puts items in cart"\r
Boutique.Frontend.Checkout -> Boutique.Cart.Api: "gets cart data"\r
Customer -> Boutique.Frontend.Catalogue: "browses products"\r
Customer -> Boutique.Frontend.Checkout: "buys products"\r
`;case"payments":return`direction: down\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Frontend: {\r
    label: "Frontend"\r
  }\r
  Checkout: {\r
    label: "Checkout Service"\r
  }\r
  Payments: {\r
    label: "Payment Service"\r
\r
    Processor: {\r
      label: "Payment Processor"\r
    }\r
    Currency: {\r
      label: "Currency Service"\r
    }\r
  }\r
  Db: {\r
    label: "Boutique Database"\r
    shape: stored_data\r
\r
    Orders: {\r
      label: "Orders"\r
      shape: stored_data\r
    }\r
  }\r
}\r
Payment-gateway: {\r
  label: "Payment Gateway"\r
}\r
\r
Boutique.Checkout -> Boutique.Payments.Processor: "sends payment request"\r
Boutique.Frontend -> Boutique.Payments.Currency: "gets exchange rates"\r
Boutique.Payments.Processor -> Payment-gateway: "processes payments"\r
Customer -> Boutique.Frontend: "browses and buys products"\r
Boutique.Payments.Processor -> Boutique.Db.Orders: "updates order status"\r
Boutique.Frontend -> Boutique.Checkout: "sends checkout information"\r
`;case"actionLog":return`direction: down\r
\r
BoutiqueCheckout: {\r
  label: "Checkout Service"\r
}\r
BoutiqueCart: {\r
  label: "Cart Service"\r
}\r
BoutiqueFrontend: {\r
  label: "Frontend"\r
}\r
BoutiqueActionLog: {\r
  label: "Action Log Service"\r
}\r
\r
BoutiqueCheckout -> BoutiqueActionLog: "sends activity data"\r
BoutiqueCart -> BoutiqueActionLog: "sends activity data"\r
BoutiqueFrontend -> BoutiqueActionLog: "sends user activity data"\r
`;case"shipping":return`direction: down\r
\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Checkout: {\r
    label: "Checkout Service"\r
  }\r
  Frontend: {\r
    label: "Frontend"\r
  }\r
  Shipping: {\r
    label: "Shipping Service"\r
  }\r
}\r
\r
Boutique.Checkout -> Boutique.Shipping: "sends checkout data"\r
Boutique.Frontend -> Boutique.Shipping: "gets shipping cost"\r
`;case"database":return`direction: down\r
\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Payments: {\r
    label: "Payment Service"\r
  }\r
  Catalogue: {\r
    label: "Product Catalogue Service"\r
  }\r
  Db: {\r
    label: "Boutique Database"\r
    shape: stored_data\r
\r
    Orders: {\r
      label: "Orders"\r
      shape: stored_data\r
    }\r
    Products: {\r
      label: "Products"\r
      shape: stored_data\r
    }\r
    Users: {\r
      label: "Users"\r
      shape: stored_data\r
    }\r
  }\r
}\r
\r
Boutique.Payments -> Boutique.Db.Orders: "updates order status"\r
Boutique.Catalogue -> Boutique.Db.Products: "gets products"\r
Boutique.Db.Orders -> Boutique.Db.Products: "many-to-many"\r
Boutique.Db.Orders -> Boutique.Db.Users: "many-to-many"\r
`;case"catalogue":return`direction: down\r
\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Cart: {\r
    label: "Cart Service"\r
  }\r
  Frontend: {\r
    label: "Frontend"\r
  }\r
  Catalogue: {\r
    label: "Product Catalogue Service"\r
  }\r
  Db: {\r
    label: "Boutique Database"\r
    shape: stored_data\r
\r
    Products: {\r
      label: "Products"\r
      shape: stored_data\r
    }\r
  }\r
}\r
\r
Boutique.Cart -> Boutique.Catalogue: "gets product data"\r
Boutique.Frontend -> Boutique.Catalogue: "gets product data"\r
Boutique.Catalogue -> Boutique.Db.Products: "gets products"\r
`;case"development-env":return`direction: down\r
\r
DevDeveloper: {\r
  label: "Developer"\r
  shape: person\r
}\r
DevDevmachine: {\r
  label: "Developer Machine"\r
\r
  Frontend: {\r
    label: "Frontend"\r
  }\r
  Cart: {\r
    label: "Cart Service"\r
  }\r
  Catalogue: {\r
    label: "Product Catalogue Service"\r
  }\r
}\r
DevContainers: {\r
  label: "Shared Containers"\r
\r
  Checkout: {\r
    label: "Mocked Checkout Service"\r
  }\r
  Payments: {\r
    label: "Mocked Payments Service"\r
  }\r
  Shipping: {\r
    label: "Mocked Shipping Service"\r
  }\r
  Db: {\r
    label: "Development Database"\r
    shape: stored_data\r
  }\r
}\r
\r
DevDevmachine.Frontend -> DevDevmachine.Catalogue: "gets product data"\r
DevDevmachine.Frontend -> DevDevmachine.Cart: "[...]"\r
DevDevmachine.Cart -> DevDevmachine.Catalogue: "gets product data"\r
DevContainers.Checkout -> DevContainers.Payments: "sends payment request"\r
DevContainers.Checkout -> DevContainers.Shipping: "sends checkout data"\r
DevContainers.Payments -> DevContainers.Db: "updates order status"\r
DevDeveloper -> DevDevmachine.Frontend: "[...]"\r
DevDevmachine.Frontend -> DevContainers.Checkout: "sends checkout information"\r
DevDevmachine.Frontend -> DevContainers.Payments: "gets exchange rates"\r
DevDevmachine.Frontend -> DevContainers.Shipping: "gets shipping cost"\r
DevDevmachine.Catalogue -> DevContainers.Db: "gets products"\r
`;case"production-env":return`direction: down\r
\r
Internet: {\r
  label: "Internet"\r
  shape: person\r
\r
  Customer: {\r
    label: "Customer"\r
    shape: person\r
  }\r
}\r
Prod: {\r
  label: "Production"\r
\r
  Vm1: {\r
    label: "Web Server 1"\r
\r
    Frontend: {\r
      label: "Frontend"\r
    }\r
    Cart: {\r
      label: "Cart Service"\r
    }\r
    Catalogue: {\r
      label: "Product Catalogue Service"\r
    }\r
  }\r
  Vm2: {\r
    label: "Web Server 2"\r
\r
    Frontend: {\r
      label: "Frontend"\r
    }\r
    Cart: {\r
      label: "Cart Service"\r
    }\r
    Catalogue: {\r
      label: "Product Catalogue Service"\r
    }\r
  }\r
  Appvms: {\r
    label: "Application Servers (x2)"\r
\r
    Checkout: {\r
      label: "Checkout Service"\r
    }\r
    Payments: {\r
      label: "Payment Service"\r
    }\r
    Shipping: {\r
      label: "Shipping Service"\r
    }\r
  }\r
  Dbvm1: {\r
    label: "Database Server 1"\r
    shape: stored_data\r
\r
    Db: {\r
      label: "Boutique Database"\r
      shape: stored_data\r
    }\r
  }\r
  Dbvm2: {\r
    label: "Database Server 2"\r
    shape: stored_data\r
\r
    Db: {\r
      label: "Boutique Database"\r
      shape: stored_data\r
    }\r
  }\r
}\r
\r
Prod.Vm1.Frontend -> Prod.Vm1.Cart: "[...]"\r
Prod.Vm1.Cart -> Prod.Vm1.Catalogue: "gets product data"\r
Prod.Vm2.Frontend -> Prod.Vm2.Cart: "[...]"\r
Prod.Vm2.Cart -> Prod.Vm2.Catalogue: "gets product data"\r
Prod.Appvms.Checkout -> Prod.Appvms.Payments: "sends payment request"\r
Prod.Appvms.Checkout -> Prod.Appvms.Shipping: "sends checkout data"\r
Prod.Vm1.Frontend -> Prod.Appvms.Checkout: "sends checkout information"\r
Prod.Vm1.Frontend -> Prod.Appvms.Shipping: "gets shipping cost"\r
Prod.Vm1.Catalogue -> Prod.Dbvm1.Db: "gets products"\r
Prod.Vm2.Frontend -> Prod.Appvms.Checkout: "sends checkout information"\r
Prod.Vm2.Catalogue -> Prod.Dbvm1.Db: "gets products"\r
Prod.Appvms.Payments -> Prod.Dbvm1.Db: "updates order status"\r
Prod.Dbvm1.Db -> Prod.Dbvm2.Db: "replicates"\r
Internet.Customer -> Prod.Vm1.Frontend: "[...]"\r
Internet.Customer -> Prod.Vm2.Frontend: "[...]"\r
`;case"place-order":return`direction: right\r
\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Frontend: {\r
    label: "Frontend"\r
  }\r
  Cart: {\r
    label: "Cart Service"\r
  }\r
  Checkout: {\r
    label: "Checkout Service"\r
  }\r
  Db: {\r
    label: "Boutique Database"\r
    shape: stored_data\r
  }\r
  Shipping: {\r
    label: "Shipping Service"\r
  }\r
  Email: {\r
    label: "Email Service"\r
  }\r
  Payments: {\r
    label: "Payment Service"\r
  }\r
}\r
Payment-gateway: {\r
  label: "Payment Gateway"\r
}\r
\r
Customer -> Boutique.Frontend: "places products in cart"\r
Boutique.Frontend -> Boutique.Cart: "creates or updates cart"\r
Customer -> Boutique.Frontend: "enters shipping information"\r
Boutique.Frontend -> Boutique.Cart: "creates or updates cart"\r
Customer -> Boutique.Frontend: "enters payment details"\r
Boutique.Frontend -> Boutique.Checkout: "initiates payment"\r
Boutique.Checkout -> Boutique.Db: "writes new order"\r
Boutique.Checkout -> Boutique.Shipping: "reserves inventory"\r
Boutique.Shipping -> Boutique.Checkout: "confirms inventory reservation"\r
Boutique.Checkout -> Boutique.Cart: "marks cart as purchased"\r
Boutique.Checkout -> Boutique.Email: "sends order confirmation"\r
Boutique.Checkout -> Boutique.Payments: "creates payment"\r
Boutique.Payments -> Payment-gateway: "processes payment"\r
Payment-gateway -> Payment-gateway: "processes payment with customer"\r
Payment-gateway -> Boutique.Payments: "confirms payment with webnook"\r
Boutique.Payments -> Boutique.Checkout\r
Boutique.Checkout -> Boutique.Shipping: "requests fulfillment"\r
Boutique.Checkout -> Boutique.Email: "sends confirmation"\r
Boutique.Checkout -> Boutique.Db: "updates order status"\r
`;case"order-fulfillment":return`direction: down\r
\r
Boutique: {\r
  label: "Online Boutique System"\r
\r
  Payments: {\r
    label: "Payment Service"\r
  }\r
  Checkout: {\r
    label: "Checkout Service"\r
  }\r
  Shipping: {\r
    label: "Shipping Service"\r
  }\r
  Email: {\r
    label: "Email Service"\r
  }\r
  Db: {\r
    label: "Boutique Database"\r
    shape: stored_data\r
  }\r
}\r
Customer: {\r
  label: "Customer"\r
  shape: person\r
}\r
Payment-gateway: {\r
  label: "Payment Gateway"\r
}\r
\r
Customer -> Boutique: "places order"\r
Boutique -> Payment-gateway: "initiates payment"\r
Payment-gateway -> Boutique.Payments: "confirms payment with webnook"\r
Boutique.Payments -> Boutique.Checkout: "confirms pending payment"\r
Boutique.Checkout -> Boutique.Shipping: "requests fulfillment"\r
Boutique.Checkout -> Boutique.Email: "sends confirmation"\r
Boutique.Checkout -> Boutique.Db: "updates order status"\r
Boutique.Shipping -> Boutique.Db: "updates inventory"\r
Boutique.Shipping -> Boutique.Email: "sends shipping confirmation"\r
`;default:throw new Error("Unknown viewId: "+e)}}export{r as d2Source};
