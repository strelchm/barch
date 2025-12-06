function t(e){switch(e){case"development-env":return`digraph {
  likec4_viewId = "development-env";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "TB";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.806;
  ranksep = 1.806;
  pad = 0.209;
  fontname = "Arial";
  newrank = true;
  clusterrank = "global";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#6E6E6E";
    fontcolor = "#C6C6C6";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "developer" [
    likec4_id = "dev.developer";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Developer</FONT>>;
    margin = "0.139,0.139";
    width = 3.334;
    height = 1.875;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
  ];
  "frontend" [
    likec4_id = "dev.devmachine.frontend";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.306";
    width = 4.445;
    height = 2.5;
  ];
  "cart" [
    likec4_id = "dev.devmachine.cart";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores the items in the user's<BR/>shopping cart in Redis and<BR/>retrieves it.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "catalogue" [
    likec4_id = "dev.devmachine.catalogue";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Laravel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides a list of products and<BR/>ability to search products and get<BR/>individual products.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "checkout" [
    likec4_id = "dev.containers.checkout";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Mocked Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">docker container</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "payments" [
    likec4_id = "dev.containers.payments";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Mocked Payments Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">docker container</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "shipping" [
    likec4_id = "dev.containers.shipping";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Mocked Shipping Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">docker container</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Gives shipping cost estimates based<BR/>on the shopping cart. Ships items<BR/>to the given address.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "db" [
    likec4_id = "dev.containers.db";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Development Database</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores all products, orders, and<BR/>user data.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  subgraph "cluster_devmachine" {
    likec4_id = "dev.devmachine";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#194b9e";
    color = "#1b3d88";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>DEVELOPER MACHINE</B></FONT>>;
    "frontend";
    "cart";
    "catalogue";
  }
  subgraph "cluster_containers" {
    likec4_id = "dev.containers";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#194b9e";
    color = "#1b3d88";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>SHARED CONTAINERS</B></FONT>>;
    "checkout";
    "payments";
    "shipping";
    "db";
  }
  "frontend" -> "catalogue" [
    likec4_id = "5yautt";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "cart" [
    likec4_id = "f55pqu";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "cart" -> "catalogue" [
    likec4_id = "154hnh7";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "payments" [
    likec4_id = "i2tf4t";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends payment request</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "shipping" [
    likec4_id = "1d0eex2";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout data</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "payments" -> "db" [
    likec4_id = "1tpznmb";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates order status</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "developer" -> "frontend" [
    likec4_id = "lsmg60";
    style = "dashed";
    weight = 2;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "checkout" [
    likec4_id = "1o7o7ks";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout information</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "payments" [
    likec4_id = "17r10wt";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets exchange rates</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "shipping" [
    likec4_id = "3nhypy";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets shipping cost</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "catalogue" -> "db" [
    likec4_id = "juq3r3";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets products</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case"production-env":return`digraph {
  likec4_viewId = "production-env";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "TB";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.806;
  ranksep = 1.806;
  pad = 0.209;
  fontname = "Arial";
  newrank = true;
  clusterrank = "global";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#6E6E6E";
    fontcolor = "#C6C6C6";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "customer" [
    likec4_id = "internet.customer";
    likec4_level = 1;
    label = <<FONT POINT-SIZE="20">Customer</FONT>>;
    margin = "0.139,0.139";
    width = 3.334;
    height = 1.875;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
  ];
  "frontend" [
    likec4_id = "prod.vm1.frontend";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.306";
    width = 4.445;
    height = 2.5;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
  ];
  "frontend_1" [
    likec4_id = "prod.vm2.frontend";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c7d2fe">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c7d2fe">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.306";
    width = 4.445;
    height = 2.5;
    fillcolor = "#6366f1";
    fontcolor = "#eef2ff";
    color = "#4f46e5";
  ];
  "cart" [
    likec4_id = "prod.vm1.cart";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Stores the items in the user's<BR/>shopping cart in Redis and<BR/>retrieves it.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
  ];
  "cart_1" [
    likec4_id = "prod.vm2.cart";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c7d2fe">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c7d2fe">Stores the items in the user's<BR/>shopping cart in Redis and<BR/>retrieves it.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#6366f1";
    fontcolor = "#eef2ff";
    color = "#4f46e5";
  ];
  "catalogue" [
    likec4_id = "prod.vm1.catalogue";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Laravel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Provides a list of products and<BR/>ability to search products and get<BR/>individual products.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
  ];
  "catalogue_1" [
    likec4_id = "prod.vm2.catalogue";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c7d2fe">Laravel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c7d2fe">Provides a list of products and<BR/>ability to search products and get<BR/>individual products.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#6366f1";
    fontcolor = "#eef2ff";
    color = "#4f46e5";
  ];
  "checkout" [
    likec4_id = "prod.appvms.checkout";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "payments" [
    likec4_id = "prod.appvms.payments";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Payment Service</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "shipping" [
    likec4_id = "prod.appvms.shipping";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Shipping Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Service</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Gives shipping cost estimates based<BR/>on the shopping cart. Ships items<BR/>to the given address.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "db" [
    likec4_id = "prod.dbvm1.db";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Boutique Database</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#f9b27c">PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f9b27c">Stores all products, orders, and<BR/>user data.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
    penwidth = 2;
    shape = "cylinder";
  ];
  "db_1" [
    likec4_id = "prod.dbvm2.db";
    likec4_level = 2;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Boutique Database</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#f9b27c">PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#f9b27c">Stores all products, orders, and<BR/>user data.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#A35829";
    fontcolor = "#FFE0C2";
    color = "#7E451D";
    penwidth = 2;
    shape = "cylinder";
  ];
  subgraph "cluster_internet" {
    likec4_id = "internet";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#2c4e32";
    color = "#1e3524";
    style = "filled";
    margin = 32;
    label = <<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>INTERNET</B></FONT>>;
    "customer";
  }
  subgraph "cluster_prod" {
    likec4_id = "prod";
    likec4_level = 0;
    likec4_depth = 2;
    fillcolor = "#3a404a";
    color = "#292f37";
    style = "filled";
    margin = 50;
    label = <<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>PRODUCTION</B></FONT>>;
    subgraph "cluster_vm1" {
      likec4_id = "prod.vm1";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#2c4e32";
      color = "#1e3524";
      style = "filled";
      margin = 50;
      label = <<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>WEB SERVER 1</B></FONT>>;
      "frontend";
      "cart";
      "catalogue";
    }
    subgraph "cluster_vm2" {
      likec4_id = "prod.vm2";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#2225aa";
      color = "#2a2490";
      style = "filled";
      margin = 50;
      label = <<FONT POINT-SIZE="11" COLOR="#c7d2feb3"><B>WEB SERVER 2</B></FONT>>;
      "frontend_1";
      "cart_1";
      "catalogue_1";
    }
    subgraph "cluster_appvms" {
      likec4_id = "prod.appvms";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#194b9e";
      color = "#1b3d88";
      style = "filled";
      margin = 50;
      label = <<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>APPLICATION SERVERS (X2)</B></FONT>>;
      "checkout";
      "payments";
      "shipping";
    }
    subgraph "cluster_dbvm1" {
      likec4_id = "prod.dbvm1";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#5a3620";
      color = "#462a17";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>DATABASE SERVER 1</B></FONT>>;
      "db";
    }
    subgraph "cluster_dbvm2" {
      likec4_id = "prod.dbvm2";
      likec4_level = 1;
      likec4_depth = 1;
      fillcolor = "#5a3620";
      color = "#462a17";
      style = "filled";
      margin = 32;
      label = <<FONT POINT-SIZE="11" COLOR="#f9b27cb3"><B>DATABASE SERVER 2</B></FONT>>;
      "db_1";
    }
  }
  subgraph {
    rank = "same";
    "frontend";
    "frontend_1";
  }
  subgraph {
    rank = "same";
    "cart";
    "cart_1";
  }
  subgraph {
    rank = "same";
    "catalogue";
    "catalogue_1";
  }
  subgraph {
    rank = "same";
    "db";
    "db_1";
  }
  "frontend" -> "cart" [
    likec4_id = "jwr8nq";
    style = "dashed";
    weight = 4;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "cart" -> "catalogue" [
    likec4_id = "1kq9vyz";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend_1" -> "cart_1" [
    likec4_id = "df6992";
    style = "dashed";
    weight = 4;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "cart_1" -> "catalogue_1" [
    likec4_id = "1cxlvff";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "payments" [
    likec4_id = "kc9x25";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends payment request</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "shipping" [
    likec4_id = "1a3mmdi";
    style = "dashed";
    weight = 3;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout data</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "checkout" [
    likec4_id = "1uigvh5";
    style = "dashed";
    weight = 2;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout information</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "shipping" [
    likec4_id = "4qg5tv";
    style = "dashed";
    weight = 2;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets shipping cost</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "catalogue" -> "db" [
    likec4_id = "fo88in";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets products</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend_1" -> "checkout" [
    likec4_id = "rsxjfe";
    style = "dashed";
    weight = 2;
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout information</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "catalogue_1" -> "db" [
    likec4_id = "1hpajto";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets products</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "payments" -> "db" [
    likec4_id = "168qmc6";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates order status</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "db" -> "db_1" [
    likec4_id = "1rigjcv";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">replicates</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "customer" -> "frontend" [
    likec4_id = "hhn00w";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "customer" -> "frontend_1" [
    likec4_id = "n9mp1f";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14"><B>[...]</B></FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case"index":return`digraph {
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
    customer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    boutique [height=3.25,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="24">Online Boutique System</FONT></TD></TR><TR><TD><FONT POINT-SIZE="18" COLOR="#bfdbfe">E-commerce app for browsing and purchasing<BR/>various items.</FONT></TD></TR></TABLE>>,
        likec4_id=boutique,
        likec4_level=0,
        margin="0.334,0.334",
        width=5.834];
    customer -> boutique [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">uses</FONT></TD></TR></TABLE>>,
        likec4_id="1kfkobu",
        minlen=1,
        style=dashed];
    "payment-gateway" [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Payment Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Stripe</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">3rd-party Platform to processonline payments</FONT></TD></TR></TABLE>>,
        likec4_id="payment-gateway",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    boutique -> "payment-gateway" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">processes payments</FONT></TD></TR></TABLE>>,
        likec4_id="1w5dmf5",
        minlen=1,
        style=dashed];
    "email-provider" [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email Provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">SendGrid</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">3rd-party Platform to sendtransactional<BR/>emails</FONT></TD></TR></TABLE>>,
        likec4_id="email-provider",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    boutique -> "email-provider" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delegates email sending</FONT></TD></TR></TABLE>>,
        likec4_id="1wno5fy",
        minlen=1,
        style=dashed];
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
    subgraph cluster_boutique {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=boutique,
            likec4_level=0,
            margin=32,
            style=filled
        ];
        frontend [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.frontend",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
    }
    customer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> frontend [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses and buys products</FONT></TD></TR></TABLE>>,
        likec4_id="1t4263u",
        style=dashed,
        weight=2];
}
`;case"boutique":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=boutique,
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
    subgraph cluster_boutique {
        graph [color="#1b3d88",
            fillcolor="#194b9e",
            label=<<FONT POINT-SIZE="11" COLOR="#bfdbfeb3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=boutique,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        frontend [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.frontend",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        checkout [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.checkout",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        cart [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores the items in the user's<BR/>shopping cart in Redis and<BR/>retrieves it.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.cart",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        email [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sends emails to customers using templates and<BR/>customer data.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.email",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        payments [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Payment Service</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.payments",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        shipping [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Shipping Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Service</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Gives shipping cost estimates based<BR/>on the shopping cart. Ships items<BR/>to the given address.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.shipping",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        actionlog [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Action Log Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Go</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Manages user activity and search<BR/>history.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.actionLog",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        catalogue [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Laravel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Provides a list of products and<BR/>ability to search products and get<BR/>individual products.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.catalogue",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        db [height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Boutique Database</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores all products, orders, and<BR/>user data.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.db",
            likec4_level=1,
            margin="0.112,0",
            penwidth=2,
            shape=cylinder,
            width=4.445];
    }
    customer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=1.875,
        label=<<FONT POINT-SIZE="24">Customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.139,0.139",
        width=3.334];
    customer -> frontend [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses and buys products</FONT></TD></TR></TABLE>>,
        likec4_id="1t4263u",
        minlen=1,
        style=dashed];
    frontend -> checkout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout information</FONT></TD></TR></TABLE>>,
        likec4_id="17gdyuk",
        style=dashed,
        weight=2];
    frontend -> cart [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets cart data</FONT></TD></TR></TABLE>>,
        likec4_id=rfeugw,
        style=dashed,
        weight=2];
    frontend -> payments [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets exchange rates</FONT></TD></TR></TABLE>>,
        likec4_id="1u3y7fx",
        style=dashed,
        weight=2];
    frontend -> shipping [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets shipping cost</FONT></TD></TR></TABLE>>,
        likec4_id=nxkvw6,
        style=dashed,
        weight=2];
    frontend -> catalogue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>,
        likec4_id="1az8kuf",
        style=dashed,
        weight=2];
    checkout -> email [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends order confirmation</FONT></TD></TR></TABLE>>,
        likec4_id="1m10lim",
        minlen=1,
        style=dashed];
    checkout -> payments [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends payment request</FONT></TD></TR></TABLE>>,
        likec4_id="31s6dn",
        style=dashed];
    checkout -> shipping [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout data</FONT></TD></TR></TABLE>>,
        likec4_id="4ntdao",
        style=dashed];
    checkout -> actionlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends activity data</FONT></TD></TR></TABLE>>,
        likec4_id="6641tk",
        style=dashed];
    cart -> actionlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends activity data</FONT></TD></TR></TABLE>>,
        likec4_id="1jw3p04",
        style=dashed];
    cart -> catalogue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>,
        likec4_id="13v6wi5",
        style=dashed];
    payments -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates order status</FONT></TD></TR></TABLE>>,
        likec4_id=ogjkxx,
        style=dashed];
    catalogue -> db [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets products</FONT></TD></TR></TABLE>>,
        likec4_id="1dwi1gv",
        style=dashed];
}
`;case"frontend":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=frontend,
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
    subgraph cluster_boutique {
        graph [color="#0d374e",
            fillcolor="#0f4460",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=boutique,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_frontend {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>FRONTEND</B></FONT>>,
                likec4_depth=1,
                likec4_id="boutique.frontend",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            catalogue [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Displays products and allows users<BR/>to search and view individual<BR/>products</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.frontend.catalogue",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
            checkout [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Allows to review shopping cart,<BR/>enter shipping details and proceed<BR/>to the payment</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.frontend.checkout",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
            profile [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">User Profile</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Displays user information and order<BR/>history.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.frontend.profile",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
        }
        catalogue_1 [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Laravel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides a list of products and<BR/>ability to search products and get<BR/>individual products.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.catalogue",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        checkout_1 [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.checkout",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        cart [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores the items in the user's<BR/>shopping cart in Redis and<BR/>retrieves it.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.cart",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        payments [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Payment Service</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.payments",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        shipping [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Shipping Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">.NET Service</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Gives shipping cost estimates based<BR/>on the shopping cart. Ships items<BR/>to the given address.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.shipping",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    customer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> catalogue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses products</FONT></TD></TR></TABLE>>,
        likec4_id=r7v8n,
        style=dashed];
    customer -> checkout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">buys products</FONT></TD></TR></TABLE>>,
        likec4_id="1p84w24",
        style=dashed];
    customer -> profile [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">manages account and reviews history</FONT></TD></TR></TABLE>>,
        likec4_id=gzjx7z,
        minlen=1,
        style=dashed];
    catalogue -> catalogue_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>,
        likec4_id="1f08qi2",
        minlen=1,
        style=dashed,
        weight=2];
    catalogue -> cart [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">puts items in cart</FONT></TD></TR></TABLE>>,
        likec4_id=pgus0d,
        style=dashed,
        weight=2];
    checkout -> checkout_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout information</FONT></TD></TR></TABLE>>,
        likec4_id=eh8dmy,
        minlen=1,
        style=dashed,
        weight=2];
    checkout -> cart [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets cart data</FONT></TD></TR></TABLE>>,
        likec4_id=rnkld2,
        style=dashed,
        weight=2];
    checkout -> payments [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets exchange rates</FONT></TD></TR></TABLE>>,
        likec4_id="1s4yc23",
        minlen=1,
        style=dashed,
        weight=2];
    checkout -> shipping [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets shipping cost</FONT></TD></TR></TABLE>>,
        likec4_id="1ovplu8",
        minlen=1,
        style=dashed,
        weight=2];
}
`;case"checkout":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=checkout,
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
    subgraph cluster_boutique {
        graph [color="#2d333d",
            fillcolor="#3e4651",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=boutique,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        frontend [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.frontend",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        checkout [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.checkout",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        email [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Sends emails to customers using templates and<BR/>customer data.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.email",
            likec4_level=1,
            margin="0.223,0.223",
            width=4.445];
        actionlog [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Action Log Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Go</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Manages user activity and search<BR/>history.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.actionLog",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        payments [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Payment Service</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.payments",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        shipping [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Shipping Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">.NET Service</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Gives shipping cost estimates based<BR/>on the shopping cart. Ships items<BR/>to the given address.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.shipping",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    customer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> frontend [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses and buys products</FONT></TD></TR></TABLE>>,
        likec4_id="1t4263u",
        minlen=1,
        style=dashed];
    frontend -> checkout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout information</FONT></TD></TR></TABLE>>,
        likec4_id="17gdyuk",
        style=dashed,
        weight=2];
    checkout -> email [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends order confirmation</FONT></TD></TR></TABLE>>,
        likec4_id="1m10lim",
        style=dashed,
        weight=2];
    checkout -> actionlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends activity data</FONT></TD></TR></TABLE>>,
        likec4_id="6641tk",
        minlen=1,
        style=dashed];
    checkout -> payments [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends payment request</FONT></TD></TR></TABLE>>,
        likec4_id="31s6dn",
        style=dashed,
        weight=2];
    checkout -> shipping [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout data</FONT></TD></TR></TABLE>>,
        likec4_id="4ntdao",
        minlen=1,
        style=dashed];
    "email-provider" [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email Provider</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">SendGrid</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">3rd-party Platform to sendtransactional<BR/>emails</FONT></TD></TR></TABLE>>,
        likec4_id="email-provider",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    email -> "email-provider" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">delegates email sending</FONT></TD></TR></TABLE>>,
        likec4_id=dncdxo,
        minlen=1,
        style=dashed];
    "payment-gateway" [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Payment Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Stripe</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">3rd-party Platform to processonline payments</FONT></TD></TR></TABLE>>,
        likec4_id="payment-gateway",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    payments -> "payment-gateway" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">processes payments</FONT></TD></TR></TABLE>>,
        likec4_id=r6si06,
        minlen=1,
        style=dashed];
}
`;case"cart":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=cart,
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
    subgraph cluster_boutique {
        graph [color="#0d374e",
            fillcolor="#0f4460",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=boutique,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_frontend {
            graph [color="#0b3c57",
                fillcolor="#0d4b6c",
                label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>FRONTEND</B></FONT>>,
                likec4_depth=1,
                likec4_id="boutique.frontend",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            catalogue [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Displays products and allows users<BR/>to search and view individual<BR/>products</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.frontend.catalogue",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
            checkout [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Allows to review shopping cart,<BR/>enter shipping details and proceed<BR/>to the payment</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.frontend.checkout",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
        }
        subgraph cluster_cart {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>CART SERVICE</B></FONT>>,
                likec4_depth=1,
                likec4_id="boutique.cart",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            api [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart API</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">fastify</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Provides access to cart data.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.cart.api",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
            cache [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Cache</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Redis</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Stores cart data.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.cart.cache",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
        }
        actionlog [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Action Log Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Go</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Manages user activity and search<BR/>history.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.actionLog",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        catalogue_1 [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Laravel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides a list of products and<BR/>ability to search products and get<BR/>individual products.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.catalogue",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    customer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> catalogue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses products</FONT></TD></TR></TABLE>>,
        likec4_id=r7v8n,
        style=dashed];
    customer -> checkout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">buys products</FONT></TD></TR></TABLE>>,
        likec4_id="1p84w24",
        style=dashed];
    catalogue -> api [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">puts items in cart</FONT></TD></TR></TABLE>>,
        likec4_id="1yzon6j",
        style=dashed];
    checkout -> api [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets cart data</FONT></TD></TR></TABLE>>,
        likec4_id="1runohc",
        style=dashed];
    api -> cache [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets cart data</FONT></TD></TR></TABLE>>,
        likec4_id="1h20wu6",
        minlen=0,
        style=dashed,
        weight=3];
    api -> actionlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends activity data</FONT></TD></TR></TABLE>>,
        likec4_id=vjxawy,
        minlen=1,
        style=dashed,
        weight=2];
    api -> catalogue_1 [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>,
        likec4_id=s5hdgb,
        minlen=1,
        style=dashed,
        weight=2];
}
`;case"payments":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=payments,
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
    subgraph cluster_boutique {
        graph [color="#292f37",
            fillcolor="#3a404a",
            label=<<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=boutique,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_payments {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>PAYMENT SERVICE</B></FONT>>,
                likec4_depth=1,
                likec4_id="boutique.payments",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            processor [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Payment Processor</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Scala</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.payments.processor",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
            currency [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Currency Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Scala</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Converts one money amount to<BR/>another currency.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.payments.currency",
                likec4_level=2,
                margin="0.112,0.223",
                width=4.445];
        }
        subgraph cluster_db {
            graph [color="#0b3c57",
                fillcolor="#0d4b6c",
                label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>BOUTIQUE DATABASE</B></FONT>>,
                likec4_depth=1,
                likec4_id="boutique.db",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            orders [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Orders</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores all order data.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.db.orders",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        frontend [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.frontend",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        checkout [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.checkout",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    customer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="20">Customer</FONT>>,
        likec4_id=customer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    customer -> frontend [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">browses and buys products</FONT></TD></TR></TABLE>>,
        likec4_id="1t4263u",
        minlen=1,
        style=dashed];
    frontend -> checkout [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout information</FONT></TD></TR></TABLE>>,
        likec4_id="17gdyuk",
        style=dashed,
        weight=2];
    frontend -> currency [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets exchange rates</FONT></TD></TR></TABLE>>,
        likec4_id=yf843o,
        minlen=1,
        style=dashed];
    checkout -> processor [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends payment request</FONT></TD></TR></TABLE>>,
        likec4_id=kaxtv7,
        style=dashed,
        weight=2];
    "payment-gateway" [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Payment Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#B6ECF7">Stripe</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">3rd-party Platform to processonline payments</FONT></TD></TR></TABLE>>,
        likec4_id="payment-gateway",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    processor -> "payment-gateway" [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">processes payments</FONT></TD></TR></TABLE>>,
        likec4_id="1ogirxa",
        minlen=1,
        style=dashed];
    processor -> orders [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates order status</FONT></TD></TR></TABLE>>,
        likec4_id="1ncueha",
        minlen=1,
        style=dashed];
}
`;case"actionLog":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=actionLog,
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
    checkout [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>,
        likec4_id="boutique.checkout",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    actionlog [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Action Log Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Go</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Manages user activity and search<BR/>history.</FONT></TD></TR></TABLE>>,
        likec4_id="boutique.actionLog",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    checkout -> actionlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends activity data</FONT></TD></TR></TABLE>>,
        likec4_id="6641tk",
        minlen=1,
        style=dashed];
    cart [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores the items in the user's<BR/>shopping cart in Redis and<BR/>retrieves it.</FONT></TD></TR></TABLE>>,
        likec4_id="boutique.cart",
        likec4_level=0,
        margin="0.112,0.223",
        width=4.445];
    cart -> actionlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends activity data</FONT></TD></TR></TABLE>>,
        likec4_id="1jw3p04",
        minlen=1,
        style=dashed];
    frontend [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>,
        likec4_id="boutique.frontend",
        likec4_level=0,
        margin="0.112,0.306",
        width=4.445];
    frontend -> actionlog [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends user activity data</FONT></TD></TR></TABLE>>,
        likec4_id=yeoe72,
        minlen=1,
        style=dashed];
}
`;case"shipping":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=shipping,
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
    subgraph cluster_boutique {
        graph [color="#0b3c57",
            fillcolor="#0d4b6c",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=1,
            likec4_id=boutique,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        checkout [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.checkout",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        frontend [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.frontend",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        shipping [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Shipping Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">.NET Service</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Gives shipping cost estimates based<BR/>on the shopping cart. Ships items<BR/>to the given address.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.shipping",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    checkout -> shipping [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">sends checkout data</FONT></TD></TR></TABLE>>,
        likec4_id="4ntdao",
        minlen=1,
        style=dashed];
    frontend -> shipping [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets shipping cost</FONT></TD></TR></TABLE>>,
        likec4_id=nxkvw6,
        minlen=1,
        style=dashed];
}
`;case"database":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=database,
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
    subgraph cluster_boutique {
        graph [color="#0d374e",
            fillcolor="#0f4460",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=boutique,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_db {
            graph [color="#1e3524",
                fillcolor="#2c4e32",
                label=<<FONT POINT-SIZE="11" COLOR="#c2f0c2b3"><B>BOUTIQUE DATABASE</B></FONT>>,
                likec4_depth=1,
                likec4_id="boutique.db",
                likec4_level=1,
                margin=40,
                style=filled
            ];
            orders [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="boutique.db",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Orders</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Stores all order data.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.db.orders",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            products [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="boutique.db",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Products</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Stores all product data.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.db.products",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
            users [color="#2d5d39",
                fillcolor="#428a4f",
                fontcolor="#f8fafc",
                group="boutique.db",
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Users</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Stores all user data.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.db.users",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        payments [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Payment Service</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.payments",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        catalogue [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Laravel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides a list of products and<BR/>ability to search products and get<BR/>individual products.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.catalogue",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    payments -> orders [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">updates order status</FONT></TD></TR></TABLE>>,
        likec4_id="1buohdi",
        minlen=1,
        style=dashed];
    catalogue -> products [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets products</FONT></TD></TR></TABLE>>,
        likec4_id=e128c9,
        minlen=1,
        style=dashed];
    orders -> products [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">many-to-many</FONT></TD></TR></TABLE>>,
        likec4_id="1wi0tn3",
        style=dotted,
        weight=2];
    orders -> users [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">many-to-many</FONT></TD></TR></TABLE>>,
        likec4_id="5imylx",
        minlen=1,
        style=dotted,
        weight=2];
}
`;case"catalogue":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=20,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=catalogue,
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
    subgraph cluster_boutique {
        graph [color="#0d374e",
            fillcolor="#0f4460",
            label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>,
            likec4_depth=2,
            likec4_id=boutique,
            likec4_level=0,
            margin=40,
            style=filled
        ];
        subgraph cluster_db {
            graph [color="#0b3c57",
                fillcolor="#0d4b6c",
                label=<<FONT POINT-SIZE="11" COLOR="#b6ecf7b3"><B>BOUTIQUE DATABASE</B></FONT>>,
                likec4_depth=1,
                likec4_id="boutique.db",
                likec4_level=1,
                margin=32,
                style=filled
            ];
            products [color="#0369a1",
                fillcolor="#0284c7",
                fontcolor="#f0f9ff",
                group=boutique,
                height=2.5,
                label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Products</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores all product data.</FONT></TD></TR></TABLE>>,
                likec4_id="boutique.db.products",
                likec4_level=2,
                margin="0.112,0",
                penwidth=2,
                shape=cylinder,
                width=4.445];
        }
        cart [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores the items in the user's<BR/>shopping cart in Redis and<BR/>retrieves it.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.cart",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
        frontend [color="#0369a1",
            fillcolor="#0284c7",
            fontcolor="#f0f9ff",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.frontend",
            likec4_level=1,
            margin="0.112,0.306",
            width=4.445];
        catalogue [color="#2d5d39",
            fillcolor="#428a4f",
            fontcolor="#f8fafc",
            group=boutique,
            height=2.5,
            label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Product Catalogue Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#c2f0c2">Laravel</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#c2f0c2">Provides a list of products and<BR/>ability to search products and get<BR/>individual products.</FONT></TD></TR></TABLE>>,
            likec4_id="boutique.catalogue",
            likec4_level=1,
            margin="0.112,0.223",
            width=4.445];
    }
    cart -> catalogue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>,
        likec4_id="13v6wi5",
        minlen=1,
        style=dashed,
        weight=2];
    frontend -> catalogue [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets product data</FONT></TD></TR></TABLE>>,
        likec4_id="1az8kuf",
        minlen=1,
        style=dashed,
        weight=2];
    catalogue -> products [arrowhead=normal,
        label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">gets products</FONT></TD></TR></TABLE>>,
        likec4_id=e128c9,
        minlen=1,
        style=dashed];
}
`;case"place-order":return`digraph {
  likec4_viewId = "place-order";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "LR";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#6E6E6E";
    fontcolor = "#C6C6C6";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "customer" [
    likec4_id = "customer";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Customer</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
  ];
  "frontend" [
    likec4_id = "boutique.frontend";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Frontend</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Vue.js / TypeScript</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Provides access to the services via<BR/>the web interface</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.306";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "cart" [
    likec4_id = "boutique.cart";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Cart Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores the items in the user's<BR/>shopping cart in Redis and<BR/>retrieves it.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "checkout" [
    likec4_id = "boutique.checkout";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "db" [
    likec4_id = "boutique.db";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Boutique Database</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Stores all products, orders, and<BR/>user data.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
    penwidth = 2;
    shape = "cylinder";
  ];
  "shipping" [
    likec4_id = "boutique.shipping";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Shipping Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#B6ECF7">.NET Service</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Gives shipping cost estimates based<BR/>on the shopping cart. Ships items<BR/>to the given address.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "email" [
    likec4_id = "boutique.email";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Sends emails to customers using templates and<BR/>customer data.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "payments" [
    likec4_id = "boutique.payments";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Payment Service</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#B6ECF7">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#0284c7";
    fontcolor = "#f0f9ff";
    color = "#0369a1";
  ];
  "payment-gateway" [
    likec4_id = "payment-gateway";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Payment Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Stripe</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">3rd-party Platform to processonline payments</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  subgraph "cluster_boutique" {
    likec4_id = "boutique";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#454545";
    color = "#313131";
    style = "filled";
    margin = 40;
    label = <<FONT POINT-SIZE="11" COLOR="#d4d4d4b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>;
    "frontend";
    "cart";
    "checkout";
    "db";
    "shipping";
    "email";
    "payments";
  }
  "customer" -> "frontend" [
    likec4_id = "step-01";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">places products in cart</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "cart" [
    likec4_id = "step-02";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">creates or updates cart<BR/>POST /shopping-cart</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "customer" -> "frontend" [
    likec4_id = "step-03";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">enters shipping information</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "cart" [
    likec4_id = "step-04";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">creates or updates cart<BR/>POST /shopping-cart</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "customer" -> "frontend" [
    likec4_id = "step-05";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">enters payment details</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "frontend" -> "checkout" [
    likec4_id = "step-06";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">initiates payment<BR/>POST /checkout</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "db" [
    likec4_id = "step-07";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>7</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">writes new order</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "shipping" [
    likec4_id = "step-08";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>8</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">reserves inventory</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "shipping" [
    likec4_id = "step-09";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>9</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">confirms inventory reservation</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "cart" -> "checkout" [
    likec4_id = "step-10.1";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10.1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">marks cart as purchased</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "checkout" -> "email" [
    likec4_id = "step-10.2";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10.2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">sends order confirmation</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "payments" [
    likec4_id = "step-10.3";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>10.3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">creates payment</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "payments" -> "payment-gateway" [
    likec4_id = "step-11";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>11</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">processes payment</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "payment-gateway" -> "payment-gateway" [
    likec4_id = "step-12";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>12</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">processes payment with customer</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "payments" -> "payment-gateway" [
    likec4_id = "step-13";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>13</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">confirms payment with webnook</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "checkout" -> "payments" [
    likec4_id = "step-14";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>14</B></FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "checkout" -> "shipping" [
    likec4_id = "step-15.1";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>15.1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">requests fulfillment</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "email" [
    likec4_id = "step-15.2";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>15.2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">sends confirmation</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "db" [
    likec4_id = "step-15.3";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>15.3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">updates order status</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;case"order-fulfillment":return`digraph {
  likec4_viewId = "order-fulfillment";
  bgcolor = "transparent";
  layout = "dot";
  compound = true;
  rankdir = "TB";
  splines = "spline";
  outputorder = "nodesfirst";
  nodesep = 1.528;
  ranksep = 1.667;
  pad = 0.209;
  fontname = "Arial";
  ordering = "in";
  graph [
    fontsize = 20;
    labeljust = "l";
    labelloc = "t";
  ];
  edge [
    arrowsize = 0.75;
    fontname = "Arial";
    fontsize = 14;
    penwidth = 2;
    color = "#6E6E6E";
    fontcolor = "#C6C6C6";
  ];
  node [
    fontname = "Arial";
    shape = "rect";
    fillcolor = "#3b82f6";
    fontcolor = "#eff6ff";
    color = "#2563eb";
    style = "filled";
    penwidth = 0;
  ];
  "customer" [
    likec4_id = "customer";
    likec4_level = 0;
    label = <<FONT POINT-SIZE="20">Customer</FONT>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#428a4f";
    fontcolor = "#f8fafc";
    color = "#2d5d39";
  ];
  "payment-gateway" [
    likec4_id = "payment-gateway";
    likec4_level = 0;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Payment Gateway</FONT></TD></TR><TR><TD><FONT POINT-SIZE="13" COLOR="#cbd5e1">Stripe</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">3rd-party Platform to processonline payments</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
    fillcolor = "#64748b";
    fontcolor = "#f8fafc";
    color = "#475569";
  ];
  "payments" [
    likec4_id = "boutique.payments";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="2" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Payment Service</FONT></TD><TD ROWSPAN="2" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Charges the given credit card info<BR/>with the given amount and returns a<BR/>transaction ID.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "checkout" [
    likec4_id = "boutique.checkout";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Checkout Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">Node.js</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Retrieves user cart, prepares order<BR/>and orchestrates payment, shipping<BR/>and email notifications.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "shipping" [
    likec4_id = "boutique.shipping";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Shipping Service</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">.NET Service</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Gives shipping cost estimates based<BR/>on the shopping cart. Ships items<BR/>to the given address.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "email" [
    likec4_id = "boutique.email";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="20">Email Service</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#bfdbfe">Sends emails to customers using templates and<BR/>customer data.</FONT></TD></TR></TABLE>>;
    margin = "0.223,0.223";
    width = 4.445;
    height = 2.5;
  ];
  "db" [
    likec4_id = "boutique.db";
    likec4_level = 1;
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD ROWSPAN="3" WIDTH="76"> </TD><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="20">Boutique Database</FONT></TD><TD ROWSPAN="3" WIDTH="16"> </TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="13" COLOR="#bfdbfe">PostgreSQL</FONT></TD></TR><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="15" COLOR="#bfdbfe">Stores all products, orders, and<BR/>user data.</FONT></TD></TR></TABLE>>;
    margin = "0.112,0";
    width = 4.445;
    height = 2.5;
    penwidth = 2;
    shape = "cylinder";
  ];
  subgraph "cluster_boutique" {
    likec4_id = "boutique";
    likec4_level = 0;
    likec4_depth = 1;
    fillcolor = "#3e4651";
    color = "#2d333d";
    style = "filled";
    margin = 40;
    label = <<FONT POINT-SIZE="11" COLOR="#cbd5e1b3"><B>ONLINE BOUTIQUE SYSTEM</B></FONT>>;
    "payments";
    "checkout";
    "shipping";
    "email";
    "db";
  }
  "db" -> "customer" [
    likec4_id = "step-01";
    style = "dashed";
    ltail = "cluster_boutique";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">places order</FONT></TD></TR></TABLE>>;
    arrowtail = "normal";
    dir = "back";
  ];
  "db" -> "payment-gateway" [
    likec4_id = "step-02";
    style = "dashed";
    ltail = "cluster_boutique";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">initiates payment</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "payment-gateway" -> "payments" [
    likec4_id = "step-03";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">confirms payment with webnook</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "payments" -> "checkout" [
    likec4_id = "step-04";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>4</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">confirms pending payment</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "shipping" [
    likec4_id = "step-05.1";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5.1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">requests fulfillment</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "email" [
    likec4_id = "step-05.2";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5.2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">sends confirmation</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "checkout" -> "db" [
    likec4_id = "step-05.3";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>5.3</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">updates order status</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "shipping" -> "db" [
    likec4_id = "step-06.1";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6.1</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">updates inventory</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
  "shipping" -> "email" [
    likec4_id = "step-06.2";
    style = "dashed";
    label = <<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="3"><TR><TD><TABLE BORDER="0" CELLPADDING="6" BGCOLOR="#18191bA0"><TR><TD WIDTH="20" HEIGHT="20"><FONT POINT-SIZE="14"><B>6.2</B></FONT></TD></TR></TABLE></TD><TD BGCOLOR="#18191bA0" CELLPADDING="3"><FONT POINT-SIZE="14">sends shipping confirmation</FONT></TD></TR></TABLE>>;
    arrowhead = "normal";
  ];
}`;default:throw new Error("Unknown viewId: "+e)}}function n(e){switch(e){case"development-env":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1852pt" height="1583pt"
 viewBox="0.00 0.00 1852.00 1583.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1567.65)">
<g id="clust1" class="cluster">
<title>cluster_devmachine</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-340.8 8,-1321.8 802,-1321.8 802,-340.8 8,-340.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1308.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">DEVELOPER MACHINE</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_containers</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="810,-8 810,-974.8 1770,-974.8 1770,-8 810,-8"/>
<text xml:space="preserve" text-anchor="start" x="818" y="-961.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">SHARED CONTAINERS</text>
</g>
<!-- developer -->
<g id="node1" class="node">
<title>developer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="693.02,-1552.6 452.98,-1552.6 452.98,-1417.6 693.02,-1417.6 693.02,-1552.6"/>
<text xml:space="preserve" text-anchor="start" x="527.42" y="-1479.1" font-family="Arial" font-size="20.00" fill="#f8fafc">Developer</text>
</g>
<!-- frontend -->
<g id="node2" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="751.78,-1250.6 394.22,-1250.6 394.22,-1070.6 751.78,-1070.6 751.78,-1250.6"/>
<text xml:space="preserve" text-anchor="start" x="442.34" y="-1156.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="486.28" y="-1184.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="729.77" y="-1156.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="486.28" y="-1162.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="486.28" y="-1141.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="486.28" y="-1123.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">the web interface</text>
</g>
<!-- cart -->
<g id="node3" class="node">
<title>cart</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="378.02,-903.6 57.98,-903.6 57.98,-723.6 378.02,-723.6 378.02,-903.6"/>
<text xml:space="preserve" text-anchor="start" x="107.58" y="-809.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="151.53" y="-846.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Cart Service</text>
<text xml:space="preserve" text-anchor="start" x="354.53" y="-809.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="151.53" y="-824.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="151.53" y="-803.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores the items in the user&#39;s</text>
<text xml:space="preserve" text-anchor="start" x="151.53" y="-785.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">shopping cart in Redis and</text>
<text xml:space="preserve" text-anchor="start" x="151.53" y="-767.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieves it.</text>
</g>
<!-- catalogue -->
<g id="node4" class="node">
<title>catalogue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="730.02,-570.8 367.98,-570.8 367.98,-390.8 730.02,-390.8 730.02,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="416.1" y="-476.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="460.04" y="-513.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Product Catalogue Service</text>
<text xml:space="preserve" text-anchor="start" x="708.01" y="-476.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="460.04" y="-491.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">Laravel</text>
<text xml:space="preserve" text-anchor="start" x="460.04" y="-470.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides a list of products and</text>
<text xml:space="preserve" text-anchor="start" x="460.04" y="-452.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">ability to search products and get</text>
<text xml:space="preserve" text-anchor="start" x="460.04" y="-434.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">individual products.</text>
</g>
<!-- checkout -->
<g id="node5" class="node">
<title>checkout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1243.88,-903.6 882.12,-903.6 882.12,-723.6 1243.88,-723.6 1243.88,-903.6"/>
<text xml:space="preserve" text-anchor="start" x="930.23" y="-809.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="974.18" y="-846.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Mocked Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="1221.88" y="-809.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="974.18" y="-824.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">docker container</text>
<text xml:space="preserve" text-anchor="start" x="974.18" y="-803.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="974.18" y="-785.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="974.18" y="-767.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">and email notifications.</text>
</g>
<!-- payments -->
<g id="node6" class="node">
<title>payments</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1222.3,-570.8 859.7,-570.8 859.7,-390.8 1222.3,-390.8 1222.3,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="907.82" y="-476.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="951.76" y="-513.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Mocked Payments Service</text>
<text xml:space="preserve" text-anchor="start" x="1200.29" y="-476.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="951.76" y="-491.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">docker container</text>
<text xml:space="preserve" text-anchor="start" x="951.76" y="-470.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="951.76" y="-452.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="951.76" y="-434.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">transaction ID.</text>
</g>
<!-- shipping -->
<g id="node7" class="node">
<title>shipping</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1719.79,-570.8 1352.21,-570.8 1352.21,-390.8 1719.79,-390.8 1719.79,-570.8"/>
<text xml:space="preserve" text-anchor="start" x="1400.33" y="-476.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1444.27" y="-513.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Mocked Shipping Service</text>
<text xml:space="preserve" text-anchor="start" x="1697.78" y="-476.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1444.27" y="-491.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">docker container</text>
<text xml:space="preserve" text-anchor="start" x="1444.27" y="-470.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Gives shipping cost estimates based</text>
<text xml:space="preserve" text-anchor="start" x="1444.27" y="-452.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">on the shopping cart. Ships items</text>
<text xml:space="preserve" text-anchor="start" x="1444.27" y="-434.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">to the given address.</text>
</g>
<!-- db -->
<g id="node8" class="node">
<title>db</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1207.57,-221.64C1207.57,-230.67 1132.91,-238 1041,-238 949.09,-238 874.43,-230.67 874.43,-221.64 874.43,-221.64 874.43,-74.36 874.43,-74.36 874.43,-65.33 949.09,-58 1041,-58 1132.91,-58 1207.57,-65.33 1207.57,-74.36 1207.57,-74.36 1207.57,-221.64 1207.57,-221.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1207.57,-221.64C1207.57,-212.61 1132.91,-205.27 1041,-205.27 949.09,-205.27 874.43,-212.61 874.43,-221.64"/>
<text xml:space="preserve" text-anchor="start" x="922.55" y="-143.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="966.49" y="-171.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Development Database</text>
<text xml:space="preserve" text-anchor="start" x="1185.56" y="-143.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="966.49" y="-150.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="966.49" y="-128.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores all products, orders, and</text>
<text xml:space="preserve" text-anchor="start" x="966.49" y="-110.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">user data.</text>
</g>
<!-- developer&#45;&gt;frontend -->
<g id="edge7" class="edge">
<title>developer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M573,-1417.67C573,-1372.47 573,-1311.86 573,-1260.96"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="575.63,-1261.11 573,-1253.61 570.38,-1261.11 575.63,-1261.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="573,-1329.8 573,-1352.6 599.99,-1352.6 599.99,-1329.8 573,-1329.8"/>
<text xml:space="preserve" text-anchor="start" x="576" y="-1338" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- frontend&#45;&gt;cart -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;cart</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M481.58,-1070.75C431.16,-1021.75 368.51,-960.87 316.94,-910.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="318.8,-908.9 311.59,-905.55 315.14,-912.66 318.8,-908.9"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="406.14,-982.8 406.14,-1005.6 433.14,-1005.6 433.14,-982.8 406.14,-982.8"/>
<text xml:space="preserve" text-anchor="start" x="409.14" y="-991" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- frontend&#45;&gt;catalogue -->
<g id="edge1" class="edge">
<title>frontend&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M569.85,-1070.64C565.37,-944.14 557.19,-713.03 552.52,-581.1"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="555.14,-581.03 552.25,-573.62 549.89,-581.21 555.14,-581.03"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="566.42,-802.2 566.42,-825 680.6,-825 680.6,-802.2 566.42,-802.2"/>
<text xml:space="preserve" text-anchor="start" x="569.42" y="-809.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- frontend&#45;&gt;checkout -->
<g id="edge8" class="edge">
<title>frontend&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M699.19,-1070.75C769.49,-1021.25 857.03,-959.62 928.61,-909.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="929.72,-911.65 934.34,-905.19 926.7,-907.36 929.72,-911.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="818,-982.8 818,-1005.6 994.43,-1005.6 994.43,-982.8 818,-982.8"/>
<text xml:space="preserve" text-anchor="start" x="821" y="-990" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout information</text>
</g>
<!-- frontend&#45;&gt;payments -->
<g id="edge9" class="edge">
<title>frontend&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M751.74,-1132.47C941.12,-1100.7 1224.29,-1043.55 1309,-974.8 1437.49,-870.51 1557.86,-771.4 1463,-635.8 1462.52,-635.12 1343.39,-591.68 1231.84,-551.11"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1232.9,-548.7 1224.96,-548.61 1231.11,-553.64 1232.9,-548.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1497.01,-802.2 1497.01,-825 1629.1,-825 1629.1,-802.2 1497.01,-802.2"/>
<text xml:space="preserve" text-anchor="start" x="1500.01" y="-809.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets exchange rates</text>
</g>
<!-- frontend&#45;&gt;shipping -->
<g id="edge10" class="edge">
<title>frontend&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M751.54,-1156.08C1029.74,-1146.39 1546.69,-1110.16 1661,-974.8 1755.85,-862.48 1674.46,-687.74 1605.94,-579.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1608.29,-578.06 1602.04,-573.16 1603.86,-580.89 1608.29,-578.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1704.12,-802.2 1704.12,-825 1822.19,-825 1822.19,-802.2 1704.12,-802.2"/>
<text xml:space="preserve" text-anchor="start" x="1707.12" y="-809.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets shipping cost</text>
</g>
<!-- cart&#45;&gt;catalogue -->
<g id="edge3" class="edge">
<title>cart&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M306.7,-723.95C351.78,-678.9 406.63,-624.09 452.73,-578.01"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="454.46,-579.99 457.91,-572.83 450.75,-576.28 454.46,-579.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393.42,-635.8 393.42,-658.6 507.61,-658.6 507.61,-635.8 393.42,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="396.42" y="-643" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- catalogue&#45;&gt;db -->
<g id="edge11" class="edge">
<title>catalogue&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M681.17,-390.93C750.23,-344.5 834.65,-287.74 904.36,-240.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="905.51,-243.26 910.27,-236.9 902.58,-238.9 905.51,-243.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="809.75,-303 809.75,-325.8 899.8,-325.8 899.8,-303 809.75,-303"/>
<text xml:space="preserve" text-anchor="start" x="812.75" y="-310.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets products</text>
</g>
<!-- checkout&#45;&gt;payments -->
<g id="edge4" class="edge">
<title>checkout&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1029.94,-723.71C1023.52,-702.66 1017.77,-680.07 1014.47,-658.6 1010.59,-633.39 1011.94,-606.15 1015.55,-580.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1018.14,-581.21 1016.7,-573.39 1012.95,-580.4 1018.14,-581.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1014.47,-635.8 1014.47,-658.6 1166,-658.6 1166,-635.8 1014.47,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="1017.47" y="-643" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends payment request</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge5" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1190.07,-723.73C1255.14,-678.22 1334.41,-622.79 1400.63,-576.47"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1401.93,-578.77 1406.57,-572.32 1398.92,-574.46 1401.93,-578.77"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1313.68,-635.8 1313.68,-658.6 1448.1,-658.6 1448.1,-635.8 1313.68,-635.8"/>
<text xml:space="preserve" text-anchor="start" x="1316.68" y="-643" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout data</text>
</g>
<!-- payments&#45;&gt;db -->
<g id="edge6" class="edge">
<title>payments&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1041,-391.15C1041,-347.39 1041,-294.41 1041,-249.18"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1043.63,-249.28 1041,-241.78 1038.38,-249.28 1043.63,-249.28"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1041,-303 1041,-325.8 1174.63,-325.8 1174.63,-303 1041,-303"/>
<text xml:space="preserve" text-anchor="start" x="1044" y="-310.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates order status</text>
</g>
</g>
</svg>
`;case"production-env":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="2130pt" height="1747pt"
 viewBox="0.00 0.00 2130.00 1747.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1732.05)">
<g id="clust1" class="cluster">
<title>cluster_internet</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="1068,-1488.8 1068,-1709 1372,-1709 1372,-1488.8 1068,-1488.8"/>
<text xml:space="preserve" text-anchor="start" x="1076" y="-1696.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">INTERNET</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_prod</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-8 8,-1425 2092,-1425 2092,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1412.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">PRODUCTION</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_vm1</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="58,-372.8 58,-1353.8 520,-1353.8 520,-372.8 58,-372.8"/>
<text xml:space="preserve" text-anchor="start" x="66" y="-1340.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">WEB SERVER 1</text>
</g>
<g id="clust4" class="cluster">
<title>cluster_vm2</title>
<polygon fill="#2225aa" stroke="#2a2490" points="1580,-372.8 1580,-1353.8 2042,-1353.8 2042,-372.8 1580,-372.8"/>
<text xml:space="preserve" text-anchor="start" x="1588" y="-1340.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c7d2fe" fill-opacity="0.701961">WEB SERVER 2</text>
</g>
<g id="clust5" class="cluster">
<title>cluster_appvms</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="570,-372.8 570,-1006.8 1530,-1006.8 1530,-372.8 570,-372.8"/>
<text xml:space="preserve" text-anchor="start" x="578" y="-993.9" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">APPLICATION SERVERS (X2)</text>
</g>
<g id="clust6" class="cluster">
<title>cluster_dbvm1</title>
<polygon fill="#5a3620" stroke="#462a17" points="1054,-58 1054,-323.2 1450,-323.2 1450,-58 1054,-58"/>
<text xml:space="preserve" text-anchor="start" x="1062" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">DATABASE SERVER 1</text>
</g>
<g id="clust7" class="cluster">
<title>cluster_dbvm2</title>
<polygon fill="#5a3620" stroke="#462a17" points="1646,-58 1646,-323.2 2042,-323.2 2042,-58 1646,-58"/>
<text xml:space="preserve" text-anchor="start" x="1654" y="-310.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#f9b27c" fill-opacity="0.701961">DATABASE SERVER 2</text>
</g>
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1340.02,-1655.8 1099.98,-1655.8 1099.98,-1520.8 1340.02,-1520.8 1340.02,-1655.8"/>
<text xml:space="preserve" text-anchor="start" x="1176.66" y="-1582.3" font-family="Arial" font-size="20.00" fill="#f8fafc">Customer</text>
</g>
<!-- frontend -->
<g id="node2" class="node">
<title>frontend</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="469.78,-1282.6 112.22,-1282.6 112.22,-1102.6 469.78,-1102.6 469.78,-1282.6"/>
<text xml:space="preserve" text-anchor="start" x="160.34" y="-1188.4" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="204.28" y="-1216.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="447.77" y="-1188.4" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="204.28" y="-1194.7" font-family="Arial" font-size="13.00" fill="#c2f0c2">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="204.28" y="-1173.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="204.28" y="-1155.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">the web interface</text>
</g>
<!-- frontend_1 -->
<g id="node3" class="node">
<title>frontend_1</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1988.78,-1282.6 1631.22,-1282.6 1631.22,-1102.6 1988.78,-1102.6 1988.78,-1282.6"/>
<text xml:space="preserve" text-anchor="start" x="1679.34" y="-1188.4" font-family="Arial" font-size="14.00" fill="#eef2ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1723.28" y="-1216.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="1966.77" y="-1188.4" font-family="Arial" font-size="14.00" fill="#eef2ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1723.28" y="-1194.7" font-family="Arial" font-size="13.00" fill="#c7d2fe">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="1723.28" y="-1173.3" font-family="Arial" font-size="15.00" fill="#c7d2fe">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="1723.28" y="-1155.3" font-family="Arial" font-size="15.00" fill="#c7d2fe">the web interface</text>
</g>
<!-- cart -->
<g id="node4" class="node">
<title>cart</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="451.02,-935.6 130.98,-935.6 130.98,-755.6 451.02,-755.6 451.02,-935.6"/>
<text xml:space="preserve" text-anchor="start" x="180.58" y="-841.4" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="224.53" y="-878.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Cart Service</text>
<text xml:space="preserve" text-anchor="start" x="427.53" y="-841.4" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="224.53" y="-856.7" font-family="Arial" font-size="13.00" fill="#c2f0c2">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="224.53" y="-835.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">Stores the items in the user&#39;s</text>
<text xml:space="preserve" text-anchor="start" x="224.53" y="-817.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">shopping cart in Redis and</text>
<text xml:space="preserve" text-anchor="start" x="224.53" y="-799.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">retrieves it.</text>
</g>
<!-- cart_1 -->
<g id="node5" class="node">
<title>cart_1</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1970.02,-935.6 1649.98,-935.6 1649.98,-755.6 1970.02,-755.6 1970.02,-935.6"/>
<text xml:space="preserve" text-anchor="start" x="1699.58" y="-841.4" font-family="Arial" font-size="14.00" fill="#eef2ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1743.53" y="-878.4" font-family="Arial" font-size="20.00" fill="#eef2ff">Cart Service</text>
<text xml:space="preserve" text-anchor="start" x="1946.53" y="-841.4" font-family="Arial" font-size="14.00" fill="#eef2ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1743.53" y="-856.7" font-family="Arial" font-size="13.00" fill="#c7d2fe">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="1743.53" y="-835.3" font-family="Arial" font-size="15.00" fill="#c7d2fe">Stores the items in the user&#39;s</text>
<text xml:space="preserve" text-anchor="start" x="1743.53" y="-817.3" font-family="Arial" font-size="15.00" fill="#c7d2fe">shopping cart in Redis and</text>
<text xml:space="preserve" text-anchor="start" x="1743.53" y="-799.3" font-family="Arial" font-size="15.00" fill="#c7d2fe">retrieves it.</text>
</g>
<!-- catalogue -->
<g id="node6" class="node">
<title>catalogue</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="470.02,-602.8 107.98,-602.8 107.98,-422.8 470.02,-422.8 470.02,-602.8"/>
<text xml:space="preserve" text-anchor="start" x="156.1" y="-508.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="200.04" y="-545.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Product Catalogue Service</text>
<text xml:space="preserve" text-anchor="start" x="448.01" y="-508.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="200.04" y="-523.9" font-family="Arial" font-size="13.00" fill="#c2f0c2">Laravel</text>
<text xml:space="preserve" text-anchor="start" x="200.04" y="-502.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Provides a list of products and</text>
<text xml:space="preserve" text-anchor="start" x="200.04" y="-484.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">ability to search products and get</text>
<text xml:space="preserve" text-anchor="start" x="200.04" y="-466.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">individual products.</text>
</g>
<!-- catalogue_1 -->
<g id="node7" class="node">
<title>catalogue_1</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="1992.02,-602.8 1629.98,-602.8 1629.98,-422.8 1992.02,-422.8 1992.02,-602.8"/>
<text xml:space="preserve" text-anchor="start" x="1678.1" y="-508.6" font-family="Arial" font-size="14.00" fill="#eef2ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1722.04" y="-545.6" font-family="Arial" font-size="20.00" fill="#eef2ff">Product Catalogue Service</text>
<text xml:space="preserve" text-anchor="start" x="1970.01" y="-508.6" font-family="Arial" font-size="14.00" fill="#eef2ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1722.04" y="-523.9" font-family="Arial" font-size="13.00" fill="#c7d2fe">Laravel</text>
<text xml:space="preserve" text-anchor="start" x="1722.04" y="-502.5" font-family="Arial" font-size="15.00" fill="#c7d2fe">Provides a list of products and</text>
<text xml:space="preserve" text-anchor="start" x="1722.04" y="-484.5" font-family="Arial" font-size="15.00" fill="#c7d2fe">ability to search products and get</text>
<text xml:space="preserve" text-anchor="start" x="1722.04" y="-466.5" font-family="Arial" font-size="15.00" fill="#c7d2fe">individual products.</text>
</g>
<!-- checkout -->
<g id="node8" class="node">
<title>checkout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1420.88,-935.6 1059.12,-935.6 1059.12,-755.6 1420.88,-755.6 1420.88,-935.6"/>
<text xml:space="preserve" text-anchor="start" x="1107.23" y="-841.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1151.18" y="-878.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="1398.88" y="-841.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1151.18" y="-856.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="1151.18" y="-835.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="1151.18" y="-817.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="1151.18" y="-799.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">and email notifications.</text>
</g>
<!-- payments -->
<g id="node9" class="node">
<title>payments</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1480.3,-602.8 1117.7,-602.8 1117.7,-422.8 1480.3,-422.8 1480.3,-602.8"/>
<text xml:space="preserve" text-anchor="start" x="1165.82" y="-508.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1209.76" y="-535.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Payment Service</text>
<text xml:space="preserve" text-anchor="start" x="1458.29" y="-508.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1209.76" y="-512.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="1209.76" y="-494.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="1209.76" y="-476.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">transaction ID.</text>
</g>
<!-- shipping -->
<g id="node10" class="node">
<title>shipping</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="987.79,-602.8 620.21,-602.8 620.21,-422.8 987.79,-422.8 987.79,-602.8"/>
<text xml:space="preserve" text-anchor="start" x="668.33" y="-508.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="712.27" y="-545.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Shipping Service</text>
<text xml:space="preserve" text-anchor="start" x="965.78" y="-508.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="712.27" y="-523.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Service</text>
<text xml:space="preserve" text-anchor="start" x="712.27" y="-502.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Gives shipping cost estimates based</text>
<text xml:space="preserve" text-anchor="start" x="712.27" y="-484.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">on the shopping cart. Ships items</text>
<text xml:space="preserve" text-anchor="start" x="712.27" y="-466.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">to the given address.</text>
</g>
<!-- db -->
<g id="node11" class="node">
<title>db</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M1418.28,-253.64C1418.28,-262.67 1343.75,-270 1252,-270 1160.25,-270 1085.72,-262.67 1085.72,-253.64 1085.72,-253.64 1085.72,-106.36 1085.72,-106.36 1085.72,-97.33 1160.25,-90 1252,-90 1343.75,-90 1418.28,-97.33 1418.28,-106.36 1418.28,-106.36 1418.28,-253.64 1418.28,-253.64"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M1418.28,-253.64C1418.28,-244.61 1343.75,-237.27 1252,-237.27 1160.25,-237.27 1085.72,-244.61 1085.72,-253.64"/>
<text xml:space="preserve" text-anchor="start" x="1133.84" y="-175.8" font-family="Arial" font-size="14.00" fill="#ffe0c2"> </text>
<text xml:space="preserve" text-anchor="start" x="1177.78" y="-203.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Boutique Database</text>
<text xml:space="preserve" text-anchor="start" x="1396.28" y="-175.8" font-family="Arial" font-size="14.00" fill="#ffe0c2"> </text>
<text xml:space="preserve" text-anchor="start" x="1177.78" y="-182.1" font-family="Arial" font-size="13.00" fill="#f9b27c">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="1177.78" y="-160.7" font-family="Arial" font-size="15.00" fill="#f9b27c">Stores all products, orders, and</text>
<text xml:space="preserve" text-anchor="start" x="1177.78" y="-142.7" font-family="Arial" font-size="15.00" fill="#f9b27c">user data.</text>
</g>
<!-- db_1 -->
<g id="node12" class="node">
<title>db_1</title>
<path fill="#a35829" stroke="#7e451d" stroke-width="2" d="M2010.28,-253.64C2010.28,-262.67 1935.75,-270 1844,-270 1752.25,-270 1677.72,-262.67 1677.72,-253.64 1677.72,-253.64 1677.72,-106.36 1677.72,-106.36 1677.72,-97.33 1752.25,-90 1844,-90 1935.75,-90 2010.28,-97.33 2010.28,-106.36 2010.28,-106.36 2010.28,-253.64 2010.28,-253.64"/>
<path fill="none" stroke="#7e451d" stroke-width="2" d="M2010.28,-253.64C2010.28,-244.61 1935.75,-237.27 1844,-237.27 1752.25,-237.27 1677.72,-244.61 1677.72,-253.64"/>
<text xml:space="preserve" text-anchor="start" x="1725.84" y="-175.8" font-family="Arial" font-size="14.00" fill="#ffe0c2"> </text>
<text xml:space="preserve" text-anchor="start" x="1769.78" y="-203.8" font-family="Arial" font-size="20.00" fill="#ffe0c2">Boutique Database</text>
<text xml:space="preserve" text-anchor="start" x="1988.28" y="-175.8" font-family="Arial" font-size="14.00" fill="#ffe0c2"> </text>
<text xml:space="preserve" text-anchor="start" x="1769.78" y="-182.1" font-family="Arial" font-size="13.00" fill="#f9b27c">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="1769.78" y="-160.7" font-family="Arial" font-size="15.00" fill="#f9b27c">Stores all products, orders, and</text>
<text xml:space="preserve" text-anchor="start" x="1769.78" y="-142.7" font-family="Arial" font-size="15.00" fill="#f9b27c">user data.</text>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge14" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1099.98,-1536.44C942.57,-1469.73 664.66,-1351.95 479.15,-1273.34"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="480.28,-1270.96 472.35,-1270.45 478.23,-1275.8 480.28,-1270.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="892.99,-1433 892.99,-1455.8 919.99,-1455.8 919.99,-1433 892.99,-1433"/>
<text xml:space="preserve" text-anchor="start" x="895.99" y="-1441.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- customer&#45;&gt;frontend_1 -->
<g id="edge15" class="edge">
<title>customer&#45;&gt;frontend_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1319.42,-1520.96C1414.94,-1457.22 1560.27,-1360.24 1667.97,-1288.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1669.34,-1290.62 1674.12,-1284.27 1666.43,-1286.25 1669.34,-1290.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1444.8,-1433 1444.8,-1455.8 1471.8,-1455.8 1471.8,-1433 1444.8,-1433"/>
<text xml:space="preserve" text-anchor="start" x="1447.8" y="-1441.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- frontend&#45;&gt;cart -->
<g id="edge1" class="edge">
<title>frontend&#45;&gt;cart</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M291,-1102.75C291,-1054.76 291,-995.36 291,-945.85"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="293.63,-945.97 291,-938.47 288.38,-945.97 293.63,-945.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="291,-1014.8 291,-1037.6 317.99,-1037.6 317.99,-1014.8 291,-1014.8"/>
<text xml:space="preserve" text-anchor="start" x="294" y="-1023" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- frontend&#45;&gt;checkout -->
<g id="edge7" class="edge">
<title>frontend&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M469.68,-1141.17C587.15,-1106.62 743.61,-1057.93 879,-1006.8 935.24,-985.56 995.3,-960.08 1049.97,-935.75"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1050.86,-938.23 1056.64,-932.78 1048.72,-933.43 1050.86,-938.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="847.91,-1014.8 847.91,-1037.6 1024.34,-1037.6 1024.34,-1014.8 847.91,-1014.8"/>
<text xml:space="preserve" text-anchor="start" x="850.91" y="-1022" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout information</text>
</g>
<!-- frontend&#45;&gt;shipping -->
<g id="edge8" class="edge">
<title>frontend&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M415.19,-1102.7C450.12,-1074.36 486.57,-1041.32 516,-1006.8 621.18,-883.42 709.53,-716.45 759.61,-611.95"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="761.88,-613.3 762.74,-605.4 757.14,-611.04 761.88,-613.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="684.52,-834.2 684.52,-857 802.59,-857 802.59,-834.2 684.52,-834.2"/>
<text xml:space="preserve" text-anchor="start" x="687.52" y="-841.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets shipping cost</text>
</g>
<!-- frontend_1&#45;&gt;cart_1 -->
<g id="edge3" class="edge">
<title>frontend_1&#45;&gt;cart_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1810,-1102.75C1810,-1054.76 1810,-995.36 1810,-945.85"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1812.63,-945.97 1810,-938.47 1807.38,-945.97 1812.63,-945.97"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1810,-1014.8 1810,-1037.6 1836.99,-1037.6 1836.99,-1014.8 1810,-1014.8"/>
<text xml:space="preserve" text-anchor="start" x="1813" y="-1023" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">[...]</text>
</g>
<!-- frontend_1&#45;&gt;checkout -->
<g id="edge10" class="edge">
<title>frontend_1&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1663.21,-1102.75C1581.18,-1053.1 1478.98,-991.25 1395.57,-940.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1397.15,-938.65 1389.38,-937.01 1394.43,-943.14 1397.15,-938.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1542.09,-1014.8 1542.09,-1037.6 1718.52,-1037.6 1718.52,-1014.8 1542.09,-1014.8"/>
<text xml:space="preserve" text-anchor="start" x="1545.09" y="-1022" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout information</text>
</g>
<!-- cart&#45;&gt;catalogue -->
<g id="edge2" class="edge">
<title>cart&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M290.46,-755.95C290.2,-711.92 289.88,-658.56 289.6,-613.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="292.23,-613.2 289.56,-605.72 286.98,-613.24 292.23,-613.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="290.06,-667.8 290.06,-690.6 404.25,-690.6 404.25,-667.8 290.06,-667.8"/>
<text xml:space="preserve" text-anchor="start" x="293.06" y="-675" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- cart_1&#45;&gt;catalogue_1 -->
<g id="edge4" class="edge">
<title>cart_1&#45;&gt;catalogue_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1810.27,-755.95C1810.4,-711.92 1810.56,-658.56 1810.7,-613.15"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1813.32,-613.23 1810.72,-605.72 1808.07,-613.21 1813.32,-613.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1810.53,-667.8 1810.53,-690.6 1924.72,-690.6 1924.72,-667.8 1810.53,-667.8"/>
<text xml:space="preserve" text-anchor="start" x="1813.53" y="-675" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- catalogue&#45;&gt;db -->
<g id="edge9" class="edge">
<title>catalogue&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M434.15,-422.92C467.51,-404.72 503.37,-386.87 538,-372.8 715.13,-300.86 927.86,-247.7 1074.79,-215.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1075.08,-218.45 1081.85,-214.3 1073.97,-213.32 1075.08,-218.45"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="631.97,-335 631.97,-357.8 722.02,-357.8 722.02,-335 631.97,-335"/>
<text xml:space="preserve" text-anchor="start" x="634.97" y="-342.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets products</text>
</g>
<!-- catalogue_1&#45;&gt;db -->
<g id="edge11" class="edge">
<title>catalogue_1&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1660.83,-422.93C1581.27,-375.85 1483.76,-318.15 1403.93,-270.91"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1405.68,-268.89 1397.89,-267.33 1403,-273.41 1405.68,-268.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1548.26,-335 1548.26,-357.8 1638.31,-357.8 1638.31,-335 1548.26,-335"/>
<text xml:space="preserve" text-anchor="start" x="1551.26" y="-342.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets products</text>
</g>
<!-- checkout&#45;&gt;payments -->
<g id="edge5" class="edge">
<title>checkout&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1255.81,-755.95C1263.68,-711.83 1273.22,-658.34 1281.33,-612.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1283.88,-613.52 1282.61,-605.67 1278.71,-612.6 1283.88,-613.52"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1271.27,-667.8 1271.27,-690.6 1422.8,-690.6 1422.8,-667.8 1271.27,-667.8"/>
<text xml:space="preserve" text-anchor="start" x="1274.27" y="-675" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends payment request</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge6" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1122.87,-755.73C1063.01,-710.31 990.12,-655.01 929.15,-608.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="930.99,-606.85 923.43,-604.41 927.81,-611.04 930.99,-606.85"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1035.07,-667.8 1035.07,-690.6 1169.49,-690.6 1169.49,-667.8 1035.07,-667.8"/>
<text xml:space="preserve" text-anchor="start" x="1038.07" y="-675" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout data</text>
</g>
<!-- payments&#45;&gt;db -->
<g id="edge12" class="edge">
<title>payments&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1286.4,-423.15C1280.19,-379.39 1272.66,-326.41 1266.23,-281.18"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1268.83,-280.81 1265.18,-273.75 1263.63,-281.55 1268.83,-280.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1276.91,-335 1276.91,-357.8 1410.54,-357.8 1410.54,-335 1276.91,-335"/>
<text xml:space="preserve" text-anchor="start" x="1279.91" y="-342.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates order status</text>
</g>
<!-- db&#45;&gt;db_1 -->
<g id="edge13" class="edge">
<title>db&#45;&gt;db_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1419.27,-180C1496.41,-180 1588.04,-180 1666.41,-180"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1666.36,-182.63 1673.86,-180 1666.36,-177.38 1666.36,-182.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1515.04,-183 1515.04,-205.8 1580.96,-205.8 1580.96,-183 1515.04,-183"/>
<text xml:space="preserve" text-anchor="start" x="1518.04" y="-190.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">replicates</text>
</g>
</g>
</svg>
`;case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="802pt" height="910pt"
 viewBox="0.00 0.00 802.00 910.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 894.65)">
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="551.39,-879.6 231.35,-879.6 231.35,-699.6 551.39,-699.6 551.39,-879.6"/>
<text xml:space="preserve" text-anchor="start" x="348.03" y="-783.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Customer</text>
</g>
<!-- boutique -->
<g id="node2" class="node">
<title>boutique</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="603.51,-556.8 179.24,-556.8 179.24,-322.8 603.51,-322.8 603.51,-556.8"/>
<text xml:space="preserve" text-anchor="start" x="262.64" y="-456.2" font-family="Arial" font-size="24.00" fill="#eff6ff">Online Boutique System</text>
<text xml:space="preserve" text-anchor="start" x="207.28" y="-428.8" font-family="Arial" font-size="18.00" fill="#bfdbfe">E&#45;commerce app for browsing and purchasing</text>
<text xml:space="preserve" text-anchor="start" x="335.86" y="-407.2" font-family="Arial" font-size="18.00" fill="#bfdbfe">various items.</text>
</g>
<!-- payment&#45;gateway -->
<g id="node3" class="node">
<title>payment&#45;gateway</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="342.75,-180 0,-180 0,0 342.75,0 342.75,-180"/>
<text xml:space="preserve" text-anchor="start" x="89.67" y="-104.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Payment Gateway</text>
<text xml:space="preserve" text-anchor="start" x="154.39" y="-83.1" font-family="Arial" font-size="13.00" fill="#cbd5e1">Stripe</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-61.7" font-family="Arial" font-size="15.00" fill="#cbd5e1">3rd&#45;party Platform to processonline payments</text>
</g>
<!-- email&#45;provider -->
<g id="node4" class="node">
<title>email&#45;provider</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="772.39,-180 452.35,-180 452.35,0 772.39,0 772.39,-180"/>
<text xml:space="preserve" text-anchor="start" x="547.35" y="-113.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Email Provider</text>
<text xml:space="preserve" text-anchor="start" x="584.91" y="-92.1" font-family="Arial" font-size="13.00" fill="#cbd5e1">SendGrid</text>
<text xml:space="preserve" text-anchor="start" x="483.15" y="-70.7" font-family="Arial" font-size="15.00" fill="#cbd5e1">3rd&#45;party Platform to sendtransactional</text>
<text xml:space="preserve" text-anchor="start" x="590.7" y="-52.7" font-family="Arial" font-size="15.00" fill="#cbd5e1">emails</text>
</g>
<!-- customer&#45;&gt;boutique -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;boutique</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M391.37,-699.94C391.37,-659.6 391.37,-611.13 391.37,-567.08"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="394,-567.1 391.37,-559.6 388.75,-567.1 394,-567.1"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="391.37,-616.8 391.37,-639.6 426.95,-639.6 426.95,-616.8 391.37,-616.8"/>
<text xml:space="preserve" text-anchor="start" x="394.37" y="-624" font-family="Arial" font-size="14.00" fill="#c6c6c6">uses</text>
</g>
<!-- boutique&#45;&gt;payment&#45;gateway -->
<g id="edge2" class="edge">
<title>boutique&#45;&gt;payment&#45;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M318.12,-322.99C290.58,-279.45 259.57,-230.42 233.17,-188.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="235.46,-187.4 229.23,-182.46 231.02,-190.2 235.46,-187.4"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="274.78,-240 274.78,-262.8 409.17,-262.8 409.17,-240 274.78,-240"/>
<text xml:space="preserve" text-anchor="start" x="277.78" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">processes payments</text>
</g>
<!-- boutique&#45;&gt;email&#45;provider -->
<g id="edge3" class="edge">
<title>boutique&#45;&gt;email&#45;provider</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M464.96,-322.99C492.63,-279.45 523.78,-230.42 550.3,-188.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="552.45,-190.2 554.26,-182.46 548.02,-187.38 552.45,-190.2"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="515.11,-240 515.11,-262.8 672.1,-262.8 672.1,-240 515.11,-240"/>
<text xml:space="preserve" text-anchor="start" x="518.11" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">delegates email sending</text>
</g>
</g>
</svg>
`;case"customer":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="468pt" height="574pt"
 viewBox="0.00 0.00 468.00 574.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 559.05)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-273.2 430,-273.2 430,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-260.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<!-- frontend -->
<g id="node1" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="397.78,-220 40.22,-220 40.22,-40 397.78,-40 397.78,-220"/>
<text xml:space="preserve" text-anchor="start" x="88.34" y="-125.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="132.28" y="-153.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="375.77" y="-125.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="132.28" y="-132.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="132.28" y="-110.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="132.28" y="-92.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">the web interface</text>
</g>
<!-- customer -->
<g id="node2" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="379.02,-544 58.98,-544 58.98,-364 379.02,-364 379.02,-544"/>
<text xml:space="preserve" text-anchor="start" x="175.66" y="-448" font-family="Arial" font-size="20.00" fill="#f8fafc">Customer</text>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M219,-364.16C219,-322.63 219,-273.02 219,-230.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="221.63,-230.36 219,-222.86 216.38,-230.36 221.63,-230.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="219,-281.2 219,-304 395.43,-304 395.43,-281.2 219,-281.2"/>
<text xml:space="preserve" text-anchor="start" x="222" y="-288.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">browses and buys products</text>
</g>
</g>
</svg>
`;case"boutique":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="2365pt" height="1513pt"
 viewBox="0.00 0.00 2365.00 1513.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1498.45)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#194b9e" stroke="#1b3d88" points="8,-8 8,-1257.6 2327,-1257.6 2327,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1244.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#bfdbfe" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<!-- frontend -->
<g id="node1" class="node">
<title>frontend</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1371.78,-1196.4 1014.22,-1196.4 1014.22,-1016.4 1371.78,-1016.4 1371.78,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="1062.34" y="-1102.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1106.28" y="-1130.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="1349.77" y="-1102.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1106.28" y="-1108.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="1106.28" y="-1087.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="1106.28" y="-1069.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">the web interface</text>
</g>
<!-- checkout -->
<g id="node2" class="node">
<title>checkout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="972.88,-873.6 611.12,-873.6 611.12,-693.6 972.88,-693.6 972.88,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="659.23" y="-779.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="703.18" y="-816.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="950.88" y="-779.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="703.18" y="-794.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="703.18" y="-773.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="703.18" y="-755.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="703.18" y="-737.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">and email notifications.</text>
</g>
<!-- cart -->
<g id="node3" class="node">
<title>cart</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1781.02,-873.6 1460.98,-873.6 1460.98,-693.6 1781.02,-693.6 1781.02,-873.6"/>
<text xml:space="preserve" text-anchor="start" x="1510.58" y="-779.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1554.53" y="-816.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Cart Service</text>
<text xml:space="preserve" text-anchor="start" x="1757.53" y="-779.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1554.53" y="-794.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="1554.53" y="-773.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores the items in the user&#39;s</text>
<text xml:space="preserve" text-anchor="start" x="1554.53" y="-755.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">shopping cart in Redis and</text>
<text xml:space="preserve" text-anchor="start" x="1554.53" y="-737.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">retrieves it.</text>
</g>
<!-- email -->
<g id="node4" class="node">
<title>email</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="879.3,-550.8 520.7,-550.8 520.7,-370.8 879.3,-370.8 879.3,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="638.87" y="-474.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Email Service</text>
<text xml:space="preserve" text-anchor="start" x="540.75" y="-451.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sends emails to customers using templates and</text>
<text xml:space="preserve" text-anchor="start" x="650.39" y="-433.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">customer data.</text>
</g>
<!-- payments -->
<g id="node5" class="node">
<title>payments</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="410.3,-550.8 47.7,-550.8 47.7,-370.8 410.3,-370.8 410.3,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="95.82" y="-456.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="139.76" y="-483.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Payment Service</text>
<text xml:space="preserve" text-anchor="start" x="388.29" y="-456.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="139.76" y="-460.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="139.76" y="-442.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="139.76" y="-424.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">transaction ID.</text>
</g>
<!-- shipping -->
<g id="node6" class="node">
<title>shipping</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1356.79,-550.8 989.21,-550.8 989.21,-370.8 1356.79,-370.8 1356.79,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1037.33" y="-456.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1081.27" y="-493.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Shipping Service</text>
<text xml:space="preserve" text-anchor="start" x="1334.78" y="-456.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1081.27" y="-471.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Service</text>
<text xml:space="preserve" text-anchor="start" x="1081.27" y="-450.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Gives shipping cost estimates based</text>
<text xml:space="preserve" text-anchor="start" x="1081.27" y="-432.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">on the shopping cart. Ships items</text>
<text xml:space="preserve" text-anchor="start" x="1081.27" y="-414.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">to the given address.</text>
</g>
<!-- actionlog -->
<g id="node7" class="node">
<title>actionlog</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1814.79,-550.8 1467.21,-550.8 1467.21,-370.8 1814.79,-370.8 1814.79,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1515.33" y="-456.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1559.28" y="-484.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Action Log Service</text>
<text xml:space="preserve" text-anchor="start" x="1792.78" y="-456.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1559.28" y="-462.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">Go</text>
<text xml:space="preserve" text-anchor="start" x="1559.28" y="-441.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Manages user activity and search</text>
<text xml:space="preserve" text-anchor="start" x="1559.28" y="-423.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">history.</text>
</g>
<!-- catalogue -->
<g id="node8" class="node">
<title>catalogue</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="2287.02,-550.8 1924.98,-550.8 1924.98,-370.8 2287.02,-370.8 2287.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1973.1" y="-456.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2017.04" y="-493.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Product Catalogue Service</text>
<text xml:space="preserve" text-anchor="start" x="2265.01" y="-456.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2017.04" y="-471.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">Laravel</text>
<text xml:space="preserve" text-anchor="start" x="2017.04" y="-450.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Provides a list of products and</text>
<text xml:space="preserve" text-anchor="start" x="2017.04" y="-432.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">ability to search products and get</text>
<text xml:space="preserve" text-anchor="start" x="2017.04" y="-414.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">individual products.</text>
</g>
<!-- db -->
<g id="node9" class="node">
<title>db</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M926.28,-211.64C926.28,-220.67 851.75,-228 760,-228 668.25,-228 593.72,-220.67 593.72,-211.64 593.72,-211.64 593.72,-64.36 593.72,-64.36 593.72,-55.33 668.25,-48 760,-48 851.75,-48 926.28,-55.33 926.28,-64.36 926.28,-64.36 926.28,-211.64 926.28,-211.64"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M926.28,-211.64C926.28,-202.61 851.75,-195.27 760,-195.27 668.25,-195.27 593.72,-202.61 593.72,-211.64"/>
<text xml:space="preserve" text-anchor="start" x="641.84" y="-133.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="685.78" y="-161.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Boutique Database</text>
<text xml:space="preserve" text-anchor="start" x="904.28" y="-133.8" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="685.78" y="-140.1" font-family="Arial" font-size="13.00" fill="#bfdbfe">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="685.78" y="-118.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores all products, orders, and</text>
<text xml:space="preserve" text-anchor="start" x="685.78" y="-100.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">user data.</text>
</g>
<!-- customer -->
<g id="node10" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1313.02,-1483.4 1072.98,-1483.4 1072.98,-1348.4 1313.02,-1348.4 1313.02,-1483.4"/>
<text xml:space="preserve" text-anchor="start" x="1140.99" y="-1408.7" font-family="Arial" font-size="24.00" fill="#f8fafc">Customer</text>
</g>
<!-- frontend&#45;&gt;checkout -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1067.36,-1016.51C1041.01,-997.12 1013.62,-976.41 988.57,-956.4 958.59,-932.44 926.93,-905.54 897.99,-880.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="899.94,-878.48 892.57,-875.51 896.48,-882.43 899.94,-878.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="988.57,-933.6 988.57,-956.4 1165,-956.4 1165,-933.6 988.57,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="991.57" y="-940.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout information</text>
</g>
<!-- frontend&#45;&gt;cart -->
<g id="edge3" class="edge">
<title>frontend&#45;&gt;cart</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1311.65,-1016.47C1368.48,-973.87 1436.58,-922.83 1494.4,-879.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1495.64,-881.84 1500.06,-875.25 1492.49,-877.64 1495.64,-881.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1419.83,-933.6 1419.83,-956.4 1510.66,-956.4 1510.66,-933.6 1419.83,-933.6"/>
<text xml:space="preserve" text-anchor="start" x="1422.83" y="-940.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets cart data</text>
</g>
<!-- frontend&#45;&gt;payments -->
<g id="edge4" class="edge">
<title>frontend&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1014.59,-1092.7C844.73,-1071.95 590.91,-1017.34 423.92,-873.6 329.21,-792.07 277.16,-654.33 251.19,-560.81"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="253.75,-560.23 249.25,-553.69 248.68,-561.61 253.75,-560.23"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="423.92,-772.2 423.92,-795 556,-795 556,-772.2 423.92,-772.2"/>
<text xml:space="preserve" text-anchor="start" x="426.92" y="-779.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets exchange rates</text>
</g>
<!-- frontend&#45;&gt;shipping -->
<g id="edge5" class="edge">
<title>frontend&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1190.46,-1016.67C1189.69,-989.97 1188.82,-960.59 1188,-933.6 1184.08,-804.91 1179.32,-656.47 1176.23,-561"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1178.86,-560.93 1175.99,-553.52 1173.61,-561.1 1178.86,-560.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1186.03,-772.2 1186.03,-795 1304.1,-795 1304.1,-772.2 1186.03,-772.2"/>
<text xml:space="preserve" text-anchor="start" x="1189.03" y="-779.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets shipping cost</text>
</g>
<!-- frontend&#45;&gt;catalogue -->
<g id="edge6" class="edge">
<title>frontend&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1371.5,-1070.1C1508.41,-1036.51 1696.88,-975.6 1836,-873.6 1945.48,-793.33 2023.03,-654.19 2066.13,-560.11"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2068.5,-561.25 2069.2,-553.33 2063.72,-559.08 2068.5,-561.25"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1992.31,-772.2 1992.31,-795 2106.5,-795 2106.5,-772.2 1992.31,-772.2"/>
<text xml:space="preserve" text-anchor="start" x="1995.31" y="-779.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- checkout&#45;&gt;email -->
<g id="edge7" class="edge">
<title>checkout&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M748.79,-693.76C740.57,-674.28 732.73,-653.52 726.92,-633.6 720.16,-610.39 714.99,-584.9 711.09,-560.82"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="713.71,-560.59 709.96,-553.59 708.52,-561.4 713.71,-560.59"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="726.92,-610.8 726.92,-633.6 887,-633.6 887,-610.8 726.92,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="729.92" y="-618" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends order confirmation</text>
</g>
<!-- checkout&#45;&gt;payments -->
<g id="edge8" class="edge">
<title>checkout&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M635.92,-693.67C560.56,-650.72 470.13,-599.19 393.67,-555.63"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="395.34,-553.56 387.52,-552.13 392.74,-558.12 395.34,-553.56"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="527.38,-610.8 527.38,-633.6 678.91,-633.6 678.91,-610.8 527.38,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="530.38" y="-618" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends payment request</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge9" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M897.62,-693.67C948,-651.25 1008.33,-600.45 1059.67,-557.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1061.14,-559.42 1065.19,-552.58 1057.76,-555.4 1061.14,-559.42"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="993.92,-610.8 993.92,-633.6 1128.34,-633.6 1128.34,-610.8 993.92,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="996.92" y="-618" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout data</text>
</g>
<!-- checkout&#45;&gt;actionlog -->
<g id="edge10" class="edge">
<title>checkout&#45;&gt;actionlog</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M972.65,-715.76C1096.45,-669.78 1264.36,-607.09 1412,-550.8 1426.85,-545.14 1442.23,-539.24 1457.67,-533.29"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1458.41,-535.82 1464.47,-530.67 1456.53,-530.92 1458.41,-535.82"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1241.96,-610.8 1241.96,-633.6 1363.14,-633.6 1363.14,-610.8 1241.96,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1244.96" y="-618" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends activity data</text>
</g>
<!-- cart&#45;&gt;actionlog -->
<g id="edge11" class="edge">
<title>cart&#45;&gt;actionlog</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1626.54,-693.67C1629.11,-652.47 1632.17,-603.36 1634.82,-560.97"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1637.43,-561.3 1635.27,-553.65 1632.19,-560.97 1637.43,-561.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1631.6,-610.8 1631.6,-633.6 1752.77,-633.6 1752.77,-610.8 1631.6,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1634.6" y="-618" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends activity data</text>
</g>
<!-- cart&#45;&gt;catalogue -->
<g id="edge12" class="edge">
<title>cart&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1755.46,-693.67C1819.98,-650.99 1897.33,-599.82 1962.94,-556.43"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1964.37,-558.63 1969.18,-552.3 1961.48,-554.25 1964.37,-558.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1878.04,-610.8 1878.04,-633.6 1992.23,-633.6 1992.23,-610.8 1878.04,-610.8"/>
<text xml:space="preserve" text-anchor="start" x="1881.04" y="-618" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- payments&#45;&gt;db -->
<g id="edge13" class="edge">
<title>payments&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M376.21,-370.87C449.21,-326.76 537.2,-273.6 610.5,-229.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="611.72,-231.65 616.78,-225.53 609,-227.16 611.72,-231.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="510.42,-288 510.42,-310.8 644.06,-310.8 644.06,-288 510.42,-288"/>
<text xml:space="preserve" text-anchor="start" x="513.42" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates order status</text>
</g>
<!-- catalogue&#45;&gt;db -->
<g id="edge14" class="edge">
<title>catalogue&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1925.29,-388.42C1906.74,-382.07 1888.08,-376.06 1870,-370.8 1545.85,-276.45 1157.88,-204.49 937.06,-167.26"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="937.81,-164.72 929.98,-166.07 936.94,-169.9 937.81,-164.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1629.96,-288 1629.96,-310.8 1720,-310.8 1720,-288 1629.96,-288"/>
<text xml:space="preserve" text-anchor="start" x="1632.96" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets products</text>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1193,-1348.56C1193,-1307.19 1193,-1253.19 1193,-1206.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1195.63,-1206.91 1193,-1199.41 1190.38,-1206.91 1195.63,-1206.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1193,-1265.6 1193,-1288.4 1369.43,-1288.4 1369.43,-1265.6 1193,-1265.6"/>
<text xml:space="preserve" text-anchor="start" x="1196" y="-1272.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">browses and buys products</text>
</g>
</g>
</svg>
`;case"frontend":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="2340pt" height="974pt"
 viewBox="0.00 0.00 2340.00 974.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 959.05)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#0f4460" stroke="#0d374e" points="8,-8 8,-673.2 2302,-673.2 2302,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-660.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_frontend</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="453,-330.8 453,-612 1825,-612 1825,-330.8 453,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="461" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">FRONTEND</text>
</g>
<!-- catalogue -->
<g id="node1" class="node">
<title>catalogue</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="851.2,-550.8 492.8,-550.8 492.8,-370.8 851.2,-370.8 851.2,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="540.92" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="584.86" y="-493.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Product Catalogue</text>
<text xml:space="preserve" text-anchor="start" x="829.19" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="584.86" y="-471.9" font-family="Arial" font-size="13.00" fill="#c2f0c2">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="584.86" y="-450.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Displays products and allows users</text>
<text xml:space="preserve" text-anchor="start" x="584.86" y="-432.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">to search and view individual</text>
<text xml:space="preserve" text-anchor="start" x="584.86" y="-414.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">products</text>
</g>
<!-- checkout -->
<g id="node2" class="node">
<title>checkout</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1314.73,-550.8 961.27,-550.8 961.27,-370.8 1314.73,-370.8 1314.73,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1009.39" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1053.34" y="-493.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Checkout</text>
<text xml:space="preserve" text-anchor="start" x="1292.72" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1053.34" y="-471.9" font-family="Arial" font-size="13.00" fill="#c2f0c2">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="1053.34" y="-450.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Allows to review shopping cart,</text>
<text xml:space="preserve" text-anchor="start" x="1053.34" y="-432.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">enter shipping details and proceed</text>
<text xml:space="preserve" text-anchor="start" x="1053.34" y="-414.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">to the payment</text>
</g>
<!-- profile -->
<g id="node3" class="node">
<title>profile</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1785.45,-550.8 1424.55,-550.8 1424.55,-370.8 1785.45,-370.8 1785.45,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="1472.67" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1516.61" y="-484.6" font-family="Arial" font-size="20.00" fill="#f8fafc">User Profile</text>
<text xml:space="preserve" text-anchor="start" x="1763.44" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="1516.61" y="-462.9" font-family="Arial" font-size="13.00" fill="#c2f0c2">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="1516.61" y="-441.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Displays user information and order</text>
<text xml:space="preserve" text-anchor="start" x="1516.61" y="-423.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">history.</text>
</g>
<!-- catalogue_1 -->
<g id="node4" class="node">
<title>catalogue_1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="410.02,-228 47.98,-228 47.98,-48 410.02,-48 410.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="96.1" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.04" y="-170.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Product Catalogue Service</text>
<text xml:space="preserve" text-anchor="start" x="388.01" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.04" y="-149.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Laravel</text>
<text xml:space="preserve" text-anchor="start" x="140.04" y="-127.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides a list of products and</text>
<text xml:space="preserve" text-anchor="start" x="140.04" y="-109.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">ability to search products and get</text>
<text xml:space="preserve" text-anchor="start" x="140.04" y="-91.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">individual products.</text>
</g>
<!-- checkout_1 -->
<g id="node5" class="node">
<title>checkout_1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1789.88,-228 1428.12,-228 1428.12,-48 1789.88,-48 1789.88,-228"/>
<text xml:space="preserve" text-anchor="start" x="1476.23" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1520.18" y="-170.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="1767.88" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1520.18" y="-149.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="1520.18" y="-127.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="1520.18" y="-109.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="1520.18" y="-91.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">and email notifications.</text>
</g>
<!-- cart -->
<g id="node6" class="node">
<title>cart</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="840.02,-228 519.98,-228 519.98,-48 840.02,-48 840.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="569.58" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="613.53" y="-170.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Cart Service</text>
<text xml:space="preserve" text-anchor="start" x="816.53" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="613.53" y="-149.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="613.53" y="-127.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores the items in the user&#39;s</text>
<text xml:space="preserve" text-anchor="start" x="613.53" y="-109.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">shopping cart in Redis and</text>
<text xml:space="preserve" text-anchor="start" x="613.53" y="-91.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">retrieves it.</text>
</g>
<!-- payments -->
<g id="node7" class="node">
<title>payments</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2262.3,-228 1899.7,-228 1899.7,-48 2262.3,-48 2262.3,-228"/>
<text xml:space="preserve" text-anchor="start" x="1947.82" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1991.76" y="-161" font-family="Arial" font-size="20.00" fill="#f0f9ff">Payment Service</text>
<text xml:space="preserve" text-anchor="start" x="2240.29" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1991.76" y="-137.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="1991.76" y="-119.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="1991.76" y="-101.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">transaction ID.</text>
</g>
<!-- shipping -->
<g id="node8" class="node">
<title>shipping</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1317.79,-228 950.21,-228 950.21,-48 1317.79,-48 1317.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="998.33" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1042.27" y="-170.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Shipping Service</text>
<text xml:space="preserve" text-anchor="start" x="1295.78" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1042.27" y="-149.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">.NET Service</text>
<text xml:space="preserve" text-anchor="start" x="1042.27" y="-127.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Gives shipping cost estimates based</text>
<text xml:space="preserve" text-anchor="start" x="1042.27" y="-109.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">on the shopping cart. Ships items</text>
<text xml:space="preserve" text-anchor="start" x="1042.27" y="-91.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">to the given address.</text>
</g>
<!-- customer -->
<g id="node9" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1298.02,-944 977.98,-944 977.98,-764 1298.02,-764 1298.02,-944"/>
<text xml:space="preserve" text-anchor="start" x="1094.66" y="-848" font-family="Arial" font-size="20.00" fill="#f0f9ff">Customer</text>
</g>
<!-- catalogue&#45;&gt;catalogue_1 -->
<g id="edge4" class="edge">
<title>catalogue&#45;&gt;catalogue_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M549.19,-370.87C490.37,-328.27 419.89,-277.23 360.04,-233.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="361.73,-231.88 354.12,-229.6 358.65,-236.13 361.73,-231.88"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="463.78,-288 463.78,-310.8 577.97,-310.8 577.97,-288 463.78,-288"/>
<text xml:space="preserve" text-anchor="start" x="466.78" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- catalogue&#45;&gt;cart -->
<g id="edge5" class="edge">
<title>catalogue&#45;&gt;cart</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M667.11,-371.06C666.29,-344.35 666.03,-314.98 667.19,-288 667.88,-271.89 668.99,-254.83 670.27,-238.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="672.87,-238.65 670.85,-230.97 667.64,-238.24 672.87,-238.65"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="667.19,-288 667.19,-310.8 779,-310.8 779,-288 667.19,-288"/>
<text xml:space="preserve" text-anchor="start" x="670.19" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">puts items in cart</text>
</g>
<!-- checkout&#45;&gt;checkout_1 -->
<g id="edge6" class="edge">
<title>checkout&#45;&gt;checkout_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1268.57,-370.87C1331.24,-328.19 1406.36,-277.02 1470.07,-233.63"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1471.36,-235.93 1476.08,-229.53 1468.4,-231.59 1471.36,-235.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1387.62,-288 1387.62,-310.8 1564.05,-310.8 1564.05,-288 1387.62,-288"/>
<text xml:space="preserve" text-anchor="start" x="1390.62" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout information</text>
</g>
<!-- checkout&#45;&gt;cart -->
<g id="edge7" class="edge">
<title>checkout&#45;&gt;cart</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1011.03,-370.87C950.1,-328.19 877.05,-277.02 815.1,-233.63"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="816.95,-231.72 809.3,-229.57 813.94,-236.02 816.95,-231.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="922.73,-288 922.73,-310.8 1013.56,-310.8 1013.56,-288 922.73,-288"/>
<text xml:space="preserve" text-anchor="start" x="925.73" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets cart data</text>
</g>
<!-- checkout&#45;&gt;payments -->
<g id="edge8" class="edge">
<title>checkout&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1276.12,-370.81C1306.06,-355.05 1338.29,-340.57 1370,-330.8 1464.25,-301.76 1494.4,-330.65 1591,-310.8 1707.3,-286.9 1732.98,-267.36 1845,-228 1859.8,-222.8 1875.07,-217.31 1890.4,-211.72"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1890.97,-214.31 1897.11,-209.27 1889.17,-209.38 1890.97,-214.31"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1680.61,-288 1680.61,-310.8 1812.69,-310.8 1812.69,-288 1680.61,-288"/>
<text xml:space="preserve" text-anchor="start" x="1683.61" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets exchange rates</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge9" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1136.89,-370.87C1136.38,-329.67 1135.77,-280.56 1135.24,-238.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1137.86,-238.32 1135.15,-230.86 1132.61,-238.39 1137.86,-238.32"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1136.12,-288 1136.12,-310.8 1254.19,-310.8 1254.19,-288 1136.12,-288"/>
<text xml:space="preserve" text-anchor="start" x="1139.12" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets shipping cost</text>
</g>
<!-- customer&#45;&gt;catalogue -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1019.8,-764.15C982.89,-735.67 942.34,-703.62 906,-673.2 862.13,-636.47 815.07,-594.49 774.75,-557.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="776.58,-555.8 769.28,-552.67 773.04,-559.67 776.58,-555.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="943.11,-681.2 943.11,-704 1058.82,-704 1058.82,-681.2 943.11,-681.2"/>
<text xml:space="preserve" text-anchor="start" x="946.11" y="-688.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">browses products</text>
</g>
<!-- customer&#45;&gt;checkout -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1138,-764.23C1138,-703.69 1138,-623.46 1138,-560.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1140.63,-561.08 1138,-553.58 1135.38,-561.08 1140.63,-561.08"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1138,-681.2 1138,-704 1231.16,-704 1231.16,-681.2 1138,-681.2"/>
<text xml:space="preserve" text-anchor="start" x="1141" y="-688.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">buys products</text>
</g>
<!-- customer&#45;&gt;profile -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;profile</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1256.16,-764.1C1293.07,-735.62 1333.63,-703.58 1370,-673.2 1414.02,-636.43 1461.26,-594.45 1501.76,-557.64"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1503.49,-559.62 1507.27,-552.63 1499.95,-555.73 1503.49,-559.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1357.84,-681.2 1357.84,-704 1598.08,-704 1598.08,-681.2 1357.84,-681.2"/>
<text xml:space="preserve" text-anchor="start" x="1360.84" y="-688.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">manages account and reviews history</text>
</g>
</g>
</svg>
`;case"checkout":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1892pt" height="1510pt"
 viewBox="0.00 0.00 1892.00 1510.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1495.45)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-282.8 8,-1209.6 1854,-1209.6 1854,-282.8 8,-282.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1196.7" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<!-- frontend -->
<g id="node1" class="node">
<title>frontend</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1100.78,-1148.4 743.22,-1148.4 743.22,-968.4 1100.78,-968.4 1100.78,-1148.4"/>
<text xml:space="preserve" text-anchor="start" x="791.34" y="-1054.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="835.28" y="-1082.2" font-family="Arial" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="1078.77" y="-1054.2" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="835.28" y="-1060.5" font-family="Arial" font-size="13.00" fill="#b6ecf7">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="835.28" y="-1039.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="835.28" y="-1021.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">the web interface</text>
</g>
<!-- checkout -->
<g id="node2" class="node">
<title>checkout</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1102.88,-825.6 741.12,-825.6 741.12,-645.6 1102.88,-645.6 1102.88,-825.6"/>
<text xml:space="preserve" text-anchor="start" x="789.23" y="-731.4" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="833.18" y="-768.4" font-family="Arial" font-size="20.00" fill="#f8fafc">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="1080.88" y="-731.4" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="833.18" y="-746.7" font-family="Arial" font-size="13.00" fill="#c2f0c2">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="833.18" y="-725.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="833.18" y="-707.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="833.18" y="-689.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">and email notifications.</text>
</g>
<!-- email -->
<g id="node3" class="node">
<title>email</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="406.3,-502.8 47.7,-502.8 47.7,-322.8 406.3,-322.8 406.3,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="165.87" y="-426.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Email Service</text>
<text xml:space="preserve" text-anchor="start" x="67.75" y="-403.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">Sends emails to customers using templates and</text>
<text xml:space="preserve" text-anchor="start" x="177.39" y="-385.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">customer data.</text>
</g>
<!-- actionlog -->
<g id="node4" class="node">
<title>actionlog</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="863.79,-502.8 516.21,-502.8 516.21,-322.8 863.79,-322.8 863.79,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="564.33" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="608.28" y="-436.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Action Log Service</text>
<text xml:space="preserve" text-anchor="start" x="841.78" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="608.28" y="-414.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Go</text>
<text xml:space="preserve" text-anchor="start" x="608.28" y="-393.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Manages user activity and search</text>
<text xml:space="preserve" text-anchor="start" x="608.28" y="-375.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">history.</text>
</g>
<!-- payments -->
<g id="node5" class="node">
<title>payments</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1336.3,-502.8 973.7,-502.8 973.7,-322.8 1336.3,-322.8 1336.3,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1021.82" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1065.76" y="-435.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Payment Service</text>
<text xml:space="preserve" text-anchor="start" x="1314.29" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1065.76" y="-412.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="1065.76" y="-394.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="1065.76" y="-376.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">transaction ID.</text>
</g>
<!-- shipping -->
<g id="node6" class="node">
<title>shipping</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1813.79,-502.8 1446.21,-502.8 1446.21,-322.8 1813.79,-322.8 1813.79,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="1494.33" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1538.27" y="-445.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Shipping Service</text>
<text xml:space="preserve" text-anchor="start" x="1791.78" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1538.27" y="-423.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">.NET Service</text>
<text xml:space="preserve" text-anchor="start" x="1538.27" y="-402.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Gives shipping cost estimates based</text>
<text xml:space="preserve" text-anchor="start" x="1538.27" y="-384.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">on the shopping cart. Ships items</text>
<text xml:space="preserve" text-anchor="start" x="1538.27" y="-366.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">to the given address.</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1082.02,-1480.4 761.98,-1480.4 761.98,-1300.4 1082.02,-1300.4 1082.02,-1480.4"/>
<text xml:space="preserve" text-anchor="start" x="878.66" y="-1384.4" font-family="Arial" font-size="20.00" fill="#f0f9ff">Customer</text>
</g>
<!-- email&#45;provider -->
<g id="node8" class="node">
<title>email&#45;provider</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="387.02,-180 66.98,-180 66.98,0 387.02,0 387.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="161.98" y="-113.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Email Provider</text>
<text xml:space="preserve" text-anchor="start" x="199.54" y="-92.1" font-family="Arial" font-size="13.00" fill="#cbd5e1">SendGrid</text>
<text xml:space="preserve" text-anchor="start" x="97.77" y="-70.7" font-family="Arial" font-size="15.00" fill="#cbd5e1">3rd&#45;party Platform to sendtransactional</text>
<text xml:space="preserve" text-anchor="start" x="205.33" y="-52.7" font-family="Arial" font-size="15.00" fill="#cbd5e1">emails</text>
</g>
<!-- payment&#45;gateway -->
<g id="node9" class="node">
<title>payment&#45;gateway</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1326.37,-180 983.63,-180 983.63,0 1326.37,0 1326.37,-180"/>
<text xml:space="preserve" text-anchor="start" x="1073.3" y="-104.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Payment Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1138.02" y="-83.1" font-family="Arial" font-size="13.00" fill="#cbd5e1">Stripe</text>
<text xml:space="preserve" text-anchor="start" x="1003.68" y="-61.7" font-family="Arial" font-size="15.00" fill="#cbd5e1">3rd&#45;party Platform to processonline payments</text>
</g>
<!-- frontend&#45;&gt;checkout -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M922,-968.47C922,-927.27 922,-878.16 922,-835.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="924.63,-835.96 922,-828.46 919.38,-835.96 924.63,-835.96"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="922,-885.6 922,-908.4 1098.43,-908.4 1098.43,-885.6 922,-885.6"/>
<text xml:space="preserve" text-anchor="start" x="925" y="-892.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout information</text>
</g>
<!-- checkout&#45;&gt;email -->
<g id="edge3" class="edge">
<title>checkout&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M741.21,-651.15C641.17,-604.97 516.97,-547.65 415.7,-500.9"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="416.94,-498.58 409.03,-497.82 414.74,-503.35 416.94,-498.58"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="595.34,-562.8 595.34,-585.6 755.41,-585.6 755.41,-562.8 595.34,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="598.34" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends order confirmation</text>
</g>
<!-- checkout&#45;&gt;actionlog -->
<g id="edge4" class="edge">
<title>checkout&#45;&gt;actionlog</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M857.68,-645.67C827.45,-603.86 791.32,-553.91 760.36,-511.09"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="762.54,-509.62 756.01,-505.08 758.28,-512.7 762.54,-509.62"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="812.96,-562.8 812.96,-585.6 934.13,-585.6 934.13,-562.8 812.96,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="815.96" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends activity data</text>
</g>
<!-- checkout&#45;&gt;payments -->
<g id="edge5" class="edge">
<title>checkout&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M986.59,-645.67C1016.96,-603.86 1053.24,-553.91 1084.34,-511.09"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1086.42,-512.69 1088.7,-505.08 1082.17,-509.6 1086.42,-512.69"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1045.49,-562.8 1045.49,-585.6 1197.02,-585.6 1197.02,-562.8 1045.49,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1048.49" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends payment request</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge6" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1102.49,-652.82C1204.8,-606.46 1332.79,-548.47 1437.08,-501.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1437.95,-503.7 1443.69,-498.22 1435.78,-498.92 1437.95,-503.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1297.23,-562.8 1297.23,-585.6 1431.65,-585.6 1431.65,-562.8 1297.23,-562.8"/>
<text xml:space="preserve" text-anchor="start" x="1300.23" y="-570" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout data</text>
</g>
<!-- email&#45;&gt;email&#45;provider -->
<g id="edge7" class="edge">
<title>email&#45;&gt;email&#45;provider</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M227,-322.87C227,-281.67 227,-232.56 227,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="229.63,-190.36 227,-182.86 224.38,-190.36 229.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="227,-240 227,-262.8 383.99,-262.8 383.99,-240 227,-240"/>
<text xml:space="preserve" text-anchor="start" x="230" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">delegates email sending</text>
</g>
<!-- payments&#45;&gt;payment&#45;gateway -->
<g id="edge8" class="edge">
<title>payments&#45;&gt;payment&#45;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1155,-322.87C1155,-281.67 1155,-232.56 1155,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1157.63,-190.36 1155,-182.86 1152.38,-190.36 1157.63,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1155,-240 1155,-262.8 1289.39,-262.8 1289.39,-240 1155,-240"/>
<text xml:space="preserve" text-anchor="start" x="1158" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">processes payments</text>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M922,-1300.53C922,-1256.7 922,-1203.68 922,-1158.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="924.63,-1158.67 922,-1151.17 919.38,-1158.67 924.63,-1158.67"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="922,-1217.6 922,-1240.4 1098.43,-1240.4 1098.43,-1217.6 922,-1217.6"/>
<text xml:space="preserve" text-anchor="start" x="925" y="-1224.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">browses and buys products</text>
</g>
</g>
</svg>
`;case"cart":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1066pt" height="1306pt"
 viewBox="0.00 0.00 1066.00 1306.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1291.05)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#0f4460" stroke="#0d374e" points="8,-8 8,-1005.2 1028,-1005.2 1028,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-992.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_frontend</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="48,-662.8 48,-944 950,-944 950,-662.8 48,-662.8"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-931.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">FRONTEND</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_cart</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="67,-330.8 67,-612 988,-612 988,-330.8 67,-330.8"/>
<text xml:space="preserve" text-anchor="start" x="75" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">CART SERVICE</text>
</g>
<!-- catalogue -->
<g id="node1" class="node">
<title>catalogue</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="446.2,-882.8 87.8,-882.8 87.8,-702.8 446.2,-702.8 446.2,-882.8"/>
<text xml:space="preserve" text-anchor="start" x="135.92" y="-788.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="179.86" y="-825.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Product Catalogue</text>
<text xml:space="preserve" text-anchor="start" x="424.19" y="-788.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="179.86" y="-803.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="179.86" y="-782.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Displays products and allows users</text>
<text xml:space="preserve" text-anchor="start" x="179.86" y="-764.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">to search and view individual</text>
<text xml:space="preserve" text-anchor="start" x="179.86" y="-746.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">products</text>
</g>
<!-- checkout -->
<g id="node2" class="node">
<title>checkout</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="909.73,-882.8 556.27,-882.8 556.27,-702.8 909.73,-702.8 909.73,-882.8"/>
<text xml:space="preserve" text-anchor="start" x="604.39" y="-788.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="648.34" y="-825.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Checkout</text>
<text xml:space="preserve" text-anchor="start" x="887.72" y="-788.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="648.34" y="-803.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="648.34" y="-782.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Allows to review shopping cart,</text>
<text xml:space="preserve" text-anchor="start" x="648.34" y="-764.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">enter shipping details and proceed</text>
<text xml:space="preserve" text-anchor="start" x="648.34" y="-746.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">to the payment</text>
</g>
<!-- api -->
<g id="node3" class="node">
<title>api</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="427.02,-550.8 106.98,-550.8 106.98,-370.8 427.02,-370.8 427.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="156.76" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="200.7" y="-475.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Cart API</text>
<text xml:space="preserve" text-anchor="start" x="403.35" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="200.7" y="-453.9" font-family="Arial" font-size="13.00" fill="#c2f0c2">fastify</text>
<text xml:space="preserve" text-anchor="start" x="200.7" y="-432.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Provides access to cart data.</text>
</g>
<!-- cache -->
<g id="node4" class="node">
<title>cache</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="948.02,-550.8 627.98,-550.8 627.98,-370.8 948.02,-370.8 948.02,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="719.03" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="762.97" y="-475.6" font-family="Arial" font-size="20.00" fill="#f8fafc">Cart Cache</text>
<text xml:space="preserve" text-anchor="start" x="883.08" y="-456.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="762.97" y="-453.9" font-family="Arial" font-size="13.00" fill="#c2f0c2">Redis</text>
<text xml:space="preserve" text-anchor="start" x="762.97" y="-432.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Stores cart data.</text>
</g>
<!-- actionlog -->
<g id="node5" class="node">
<title>actionlog</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="417.79,-228 70.21,-228 70.21,-48 417.79,-48 417.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="118.33" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="162.28" y="-161.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Action Log Service</text>
<text xml:space="preserve" text-anchor="start" x="395.78" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="162.28" y="-140.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Go</text>
<text xml:space="preserve" text-anchor="start" x="162.28" y="-118.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Manages user activity and search</text>
<text xml:space="preserve" text-anchor="start" x="162.28" y="-100.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">history.</text>
</g>
<!-- catalogue_1 -->
<g id="node6" class="node">
<title>catalogue_1</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="890.02,-228 527.98,-228 527.98,-48 890.02,-48 890.02,-228"/>
<text xml:space="preserve" text-anchor="start" x="576.1" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="620.04" y="-170.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Product Catalogue Service</text>
<text xml:space="preserve" text-anchor="start" x="868.01" y="-133.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="620.04" y="-149.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Laravel</text>
<text xml:space="preserve" text-anchor="start" x="620.04" y="-127.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides a list of products and</text>
<text xml:space="preserve" text-anchor="start" x="620.04" y="-109.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">ability to search products and get</text>
<text xml:space="preserve" text-anchor="start" x="620.04" y="-91.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">individual products.</text>
</g>
<!-- customer -->
<g id="node7" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="659.02,-1276 338.98,-1276 338.98,-1096 659.02,-1096 659.02,-1276"/>
<text xml:space="preserve" text-anchor="start" x="455.66" y="-1180" font-family="Arial" font-size="20.00" fill="#f0f9ff">Customer</text>
</g>
<!-- catalogue&#45;&gt;api -->
<g id="edge3" class="edge">
<title>catalogue&#45;&gt;api</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M267,-702.93C267,-659.1 267,-606.08 267,-560.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="269.63,-561.07 267,-553.57 264.38,-561.07 269.63,-561.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="267,-620 267,-642.8 378.81,-642.8 378.81,-620 267,-620"/>
<text xml:space="preserve" text-anchor="start" x="270" y="-627.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">puts items in cart</text>
</g>
<!-- checkout&#45;&gt;api -->
<g id="edge4" class="edge">
<title>checkout&#45;&gt;api</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M607.51,-702.93C543.52,-657.62 465.69,-602.5 400.59,-556.4"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="402.42,-554.48 394.78,-552.29 399.39,-558.77 402.42,-554.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="513.97,-620 513.97,-642.8 604.8,-642.8 604.8,-620 513.97,-620"/>
<text xml:space="preserve" text-anchor="start" x="516.97" y="-627.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets cart data</text>
</g>
<!-- api&#45;&gt;cache -->
<g id="edge5" class="edge">
<title>api&#45;&gt;cache</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M426.86,-460.8C487.35,-460.8 556.4,-460.8 617.81,-460.8"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="617.47,-463.43 624.97,-460.8 617.47,-458.18 617.47,-463.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="482.09,-463.8 482.09,-486.6 572.91,-486.6 572.91,-463.8 482.09,-463.8"/>
<text xml:space="preserve" text-anchor="start" x="485.09" y="-471" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets cart data</text>
</g>
<!-- api&#45;&gt;actionlog -->
<g id="edge6" class="edge">
<title>api&#45;&gt;actionlog</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M260.62,-370.87C257.67,-329.67 254.15,-280.56 251.11,-238.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="253.74,-238.14 250.59,-230.85 248.5,-238.52 253.74,-238.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="256.19,-288 256.19,-310.8 377.36,-310.8 377.36,-288 256.19,-288"/>
<text xml:space="preserve" text-anchor="start" x="259.19" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends activity data</text>
</g>
<!-- api&#45;&gt;catalogue_1 -->
<g id="edge7" class="edge">
<title>api&#45;&gt;catalogue_1</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M389.53,-370.87C448.22,-328.27 518.55,-277.23 578.26,-233.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="579.63,-236.14 584.16,-229.61 576.55,-231.89 579.63,-236.14"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="501.25,-288 501.25,-310.8 615.44,-310.8 615.44,-288 501.25,-288"/>
<text xml:space="preserve" text-anchor="start" x="504.25" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- customer&#45;&gt;catalogue -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M446.36,-1096.23C410.16,-1035.19 362.08,-954.13 324.82,-891.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="327.26,-890.27 321.18,-885.16 322.75,-892.95 327.26,-890.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.6,-1013.2 410.6,-1036 526.32,-1036 526.32,-1013.2 410.6,-1013.2"/>
<text xml:space="preserve" text-anchor="start" x="413.6" y="-1020.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">browses products</text>
</g>
<!-- customer&#45;&gt;checkout -->
<g id="edge2" class="edge">
<title>customer&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M552.1,-1096.23C588.61,-1035.19 637.1,-954.13 674.68,-891.3"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="676.76,-892.94 678.36,-885.15 672.25,-890.24 676.76,-892.94"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="595.04,-1013.2 595.04,-1036 688.2,-1036 688.2,-1013.2 595.04,-1013.2"/>
<text xml:space="preserve" text-anchor="start" x="598.04" y="-1020.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">buys products</text>
</g>
</g>
</svg>
`;case"payments":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1386pt" height="1601pt"
 viewBox="0.00 0.00 1386.00 1601.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1585.85)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#3a404a" stroke="#292f37" points="8,-8 8,-1300 974,-1300 974,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1287.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_payments</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="48,-364 48,-645.2 934,-645.2 934,-364 48,-364"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-632.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">PAYMENT SERVICE</text>
</g>
<g id="clust3" class="cluster">
<title>cluster_db</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="521,-48 521,-313.2 905,-313.2 905,-48 521,-48"/>
<text xml:space="preserve" text-anchor="start" x="529" y="-300.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">BOUTIQUE DATABASE</text>
</g>
<!-- processor -->
<g id="node1" class="node">
<title>processor</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="894.3,-584 531.7,-584 531.7,-404 894.3,-404 894.3,-584"/>
<text xml:space="preserve" text-anchor="start" x="579.82" y="-489.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="623.76" y="-526.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Payment Processor</text>
<text xml:space="preserve" text-anchor="start" x="872.29" y="-489.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="623.76" y="-505.1" font-family="Arial" font-size="13.00" fill="#c2f0c2">Scala</text>
<text xml:space="preserve" text-anchor="start" x="623.76" y="-483.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="623.76" y="-465.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="623.76" y="-447.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">transaction ID.</text>
</g>
<!-- currency -->
<g id="node2" class="node">
<title>currency</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="421.71,-584 88.29,-584 88.29,-404 421.71,-404 421.71,-584"/>
<text xml:space="preserve" text-anchor="start" x="136.41" y="-489.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="180.36" y="-517.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Currency Service</text>
<text xml:space="preserve" text-anchor="start" x="399.7" y="-489.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="180.36" y="-496.1" font-family="Arial" font-size="13.00" fill="#c2f0c2">Scala</text>
<text xml:space="preserve" text-anchor="start" x="180.36" y="-474.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">Converts one money amount to</text>
<text xml:space="preserve" text-anchor="start" x="180.36" y="-456.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">another currency.</text>
</g>
<!-- orders -->
<g id="node3" class="node">
<title>orders</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M873.02,-243.64C873.02,-252.67 801.3,-260 713,-260 624.7,-260 552.98,-252.67 552.98,-243.64 552.98,-243.64 552.98,-96.36 552.98,-96.36 552.98,-87.33 624.7,-80 713,-80 801.3,-80 873.02,-87.33 873.02,-96.36 873.02,-96.36 873.02,-243.64 873.02,-243.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M873.02,-243.64C873.02,-234.61 801.3,-227.27 713,-227.27 624.7,-227.27 552.98,-234.61 552.98,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="629.43" y="-165.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="673.38" y="-175" font-family="Arial" font-size="20.00" fill="#f0f9ff">Orders</text>
<text xml:space="preserve" text-anchor="start" x="822.68" y="-165.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="673.38" y="-151.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores all order data.</text>
</g>
<!-- frontend -->
<g id="node4" class="node">
<title>frontend</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="891.78,-1238.8 534.22,-1238.8 534.22,-1058.8 891.78,-1058.8 891.78,-1238.8"/>
<text xml:space="preserve" text-anchor="start" x="582.34" y="-1144.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="626.28" y="-1172.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="869.77" y="-1144.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="626.28" y="-1150.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="626.28" y="-1129.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="626.28" y="-1111.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">the web interface</text>
</g>
<!-- checkout -->
<g id="node5" class="node">
<title>checkout</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="893.88,-916 532.12,-916 532.12,-736 893.88,-736 893.88,-916"/>
<text xml:space="preserve" text-anchor="start" x="580.23" y="-821.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="624.18" y="-858.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="871.88" y="-821.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="624.18" y="-837.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="624.18" y="-815.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="624.18" y="-797.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="624.18" y="-779.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">and email notifications.</text>
</g>
<!-- customer -->
<g id="node6" class="node">
<title>customer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="873.02,-1570.8 552.98,-1570.8 552.98,-1390.8 873.02,-1390.8 873.02,-1570.8"/>
<text xml:space="preserve" text-anchor="start" x="669.66" y="-1474.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Customer</text>
</g>
<!-- payment&#45;gateway -->
<g id="node7" class="node">
<title>payment&#45;gateway</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1356.37,-260 1013.63,-260 1013.63,-80 1356.37,-80 1356.37,-260"/>
<text xml:space="preserve" text-anchor="start" x="1103.3" y="-184.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Payment Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1168.02" y="-163.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Stripe</text>
<text xml:space="preserve" text-anchor="start" x="1033.68" y="-141.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">3rd&#45;party Platform to processonline payments</text>
</g>
<!-- processor&#45;&gt;orders -->
<g id="edge6" class="edge">
<title>processor&#45;&gt;orders</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M713,-404.16C713,-362.97 713,-313.84 713,-271.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="715.63,-271.48 713,-263.98 710.38,-271.48 715.63,-271.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="713,-321.2 713,-344 846.63,-344 846.63,-321.2 713,-321.2"/>
<text xml:space="preserve" text-anchor="start" x="716" y="-328.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates order status</text>
</g>
<!-- processor&#45;&gt;payment&#45;gateway -->
<g id="edge5" class="edge">
<title>processor&#45;&gt;payment&#45;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M843.23,-404.16C906.29,-361.14 982.06,-309.44 1046.22,-265.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1047.57,-267.93 1052.29,-261.54 1044.61,-263.59 1047.57,-267.93"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="963.15,-321.2 963.15,-344 1097.55,-344 1097.55,-321.2 963.15,-321.2"/>
<text xml:space="preserve" text-anchor="start" x="966.15" y="-328.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">processes payments</text>
</g>
<!-- frontend&#45;&gt;currency -->
<g id="edge3" class="edge">
<title>frontend&#45;&gt;currency</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M534.43,-1072.78C465.43,-1035.29 391.94,-983.33 344.92,-916 278.27,-820.56 259.44,-685.42 254.91,-594.22"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="257.54,-594.27 254.58,-586.9 252.29,-594.51 257.54,-594.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="344.92,-814.6 344.92,-837.4 477,-837.4 477,-814.6 344.92,-814.6"/>
<text xml:space="preserve" text-anchor="start" x="347.92" y="-821.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets exchange rates</text>
</g>
<!-- frontend&#45;&gt;checkout -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M713,-1058.87C713,-1017.67 713,-968.56 713,-926.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="715.63,-926.36 713,-918.86 710.38,-926.36 715.63,-926.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="713,-976 713,-998.8 889.43,-998.8 889.43,-976 713,-976"/>
<text xml:space="preserve" text-anchor="start" x="716" y="-983.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout information</text>
</g>
<!-- checkout&#45;&gt;processor -->
<g id="edge4" class="edge">
<title>checkout&#45;&gt;processor</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M713,-736.13C713,-692.3 713,-639.28 713,-594.14"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="715.63,-594.27 713,-586.77 710.38,-594.27 715.63,-594.27"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="713,-653.2 713,-676 864.53,-676 864.53,-653.2 713,-653.2"/>
<text xml:space="preserve" text-anchor="start" x="716" y="-660.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends payment request</text>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M713,-1390.93C713,-1347.1 713,-1294.08 713,-1248.94"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="715.63,-1249.07 713,-1241.57 710.38,-1249.07 715.63,-1249.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="713,-1308 713,-1330.8 889.43,-1330.8 889.43,-1308 713,-1308"/>
<text xml:space="preserve" text-anchor="start" x="716" y="-1315.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">browses and buys products</text>
</g>
</g>
</svg>
`;case"actionLog":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1290pt" height="533pt"
 viewBox="0.00 0.00 1290.00 533.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 517.85)">
<!-- checkout -->
<g id="node1" class="node">
<title>checkout</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="361.77,-502.8 0,-502.8 0,-322.8 361.77,-322.8 361.77,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="48.12" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-445.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="339.76" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-423.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-402.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-384.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="92.06" y="-366.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">and email notifications.</text>
</g>
<!-- actionlog -->
<g id="node2" class="node">
<title>actionlog</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="805.67,-180 458.1,-180 458.1,0 805.67,0 805.67,-180"/>
<text xml:space="preserve" text-anchor="start" x="506.22" y="-85.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="550.16" y="-113.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Action Log Service</text>
<text xml:space="preserve" text-anchor="start" x="783.66" y="-85.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="550.16" y="-92.1" font-family="Arial" font-size="13.00" fill="#c2f0c2">Go</text>
<text xml:space="preserve" text-anchor="start" x="550.16" y="-70.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">Manages user activity and search</text>
<text xml:space="preserve" text-anchor="start" x="550.16" y="-52.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">history.</text>
</g>
<!-- cart -->
<g id="node3" class="node">
<title>cart</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="791.9,-502.8 471.86,-502.8 471.86,-322.8 791.9,-322.8 791.9,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="521.47" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="565.41" y="-445.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Cart Service</text>
<text xml:space="preserve" text-anchor="start" x="768.41" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="565.41" y="-423.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="565.41" y="-402.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores the items in the user&#39;s</text>
<text xml:space="preserve" text-anchor="start" x="565.41" y="-384.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">shopping cart in Redis and</text>
<text xml:space="preserve" text-anchor="start" x="565.41" y="-366.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">retrieves it.</text>
</g>
<!-- frontend -->
<g id="node4" class="node">
<title>frontend</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1259.66,-502.8 902.11,-502.8 902.11,-322.8 1259.66,-322.8 1259.66,-502.8"/>
<text xml:space="preserve" text-anchor="start" x="950.22" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="994.17" y="-436.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="1237.66" y="-408.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="994.17" y="-414.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="994.17" y="-393.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="994.17" y="-375.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">the web interface</text>
</g>
<!-- checkout&#45;&gt;actionlog -->
<g id="edge1" class="edge">
<title>checkout&#45;&gt;actionlog</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M305.91,-322.87C365.79,-280.27 437.55,-229.23 498.48,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="499.95,-188.07 504.54,-181.58 496.9,-183.79 499.95,-188.07"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="419.91,-240 419.91,-262.8 541.08,-262.8 541.08,-240 419.91,-240"/>
<text xml:space="preserve" text-anchor="start" x="422.91" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends activity data</text>
</g>
<!-- cart&#45;&gt;actionlog -->
<g id="edge2" class="edge">
<title>cart&#45;&gt;actionlog</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M631.88,-322.87C631.88,-281.67 631.88,-232.56 631.88,-190.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="634.51,-190.36 631.88,-182.86 629.26,-190.36 634.51,-190.36"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="631.88,-240 631.88,-262.8 753.06,-262.8 753.06,-240 631.88,-240"/>
<text xml:space="preserve" text-anchor="start" x="634.88" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends activity data</text>
</g>
<!-- frontend&#45;&gt;actionlog -->
<g id="edge3" class="edge">
<title>frontend&#45;&gt;actionlog</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M956.41,-322.87C896.8,-280.27 825.36,-229.23 764.7,-185.89"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="766.3,-183.81 758.68,-181.59 763.25,-188.09 766.3,-183.81"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="869.85,-240 869.85,-262.8 1022.14,-262.8 1022.14,-240 869.85,-240"/>
<text xml:space="preserve" text-anchor="start" x="872.85" y="-247.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends user activity data</text>
</g>
</g>
</svg>
`;case"shipping":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="956pt" height="650pt"
 viewBox="0.00 0.00 956.00 650.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 635.05)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="8,-8 8,-612 918,-612 918,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-599.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<!-- checkout -->
<g id="node1" class="node">
<title>checkout</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="409.88,-550.8 48.12,-550.8 48.12,-370.8 409.88,-370.8 409.88,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="96.23" y="-456.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.18" y="-493.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="387.88" y="-456.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="140.18" y="-471.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="140.18" y="-450.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="140.18" y="-432.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="140.18" y="-414.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">and email notifications.</text>
</g>
<!-- frontend -->
<g id="node2" class="node">
<title>frontend</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="877.78,-550.8 520.22,-550.8 520.22,-370.8 877.78,-370.8 877.78,-550.8"/>
<text xml:space="preserve" text-anchor="start" x="568.34" y="-456.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="612.28" y="-484.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="855.77" y="-456.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="612.28" y="-462.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="612.28" y="-441.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="612.28" y="-423.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">the web interface</text>
</g>
<!-- shipping -->
<g id="node3" class="node">
<title>shipping</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="593.79,-228 226.21,-228 226.21,-48 593.79,-48 593.79,-228"/>
<text xml:space="preserve" text-anchor="start" x="274.33" y="-133.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="318.27" y="-170.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Shipping Service</text>
<text xml:space="preserve" text-anchor="start" x="571.78" y="-133.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="318.27" y="-149.1" font-family="Arial" font-size="13.00" fill="#c2f0c2">.NET Service</text>
<text xml:space="preserve" text-anchor="start" x="318.27" y="-127.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">Gives shipping cost estimates based</text>
<text xml:space="preserve" text-anchor="start" x="318.27" y="-109.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">on the shopping cart. Ships items</text>
<text xml:space="preserve" text-anchor="start" x="318.27" y="-91.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">to the given address.</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge1" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M279.18,-370.87C302.67,-329.23 330.72,-279.52 354.8,-236.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="356.99,-238.29 358.39,-230.47 352.42,-235.71 356.99,-238.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="324.93,-288 324.93,-310.8 459.35,-310.8 459.35,-288 324.93,-288"/>
<text xml:space="preserve" text-anchor="start" x="327.93" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends checkout data</text>
</g>
<!-- frontend&#45;&gt;shipping -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M618.88,-370.87C580.98,-328.8 535.66,-278.48 496.93,-235.49"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="499.02,-233.89 492.05,-230.08 495.12,-237.41 499.02,-233.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="563.17,-288 563.17,-310.8 681.23,-310.8 681.23,-288 563.17,-288"/>
<text xml:space="preserve" text-anchor="start" x="566.17" y="-295.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets shipping cost</text>
</g>
</g>
</svg>
`;case"database":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1358pt" height="1022pt"
 viewBox="0.00 0.00 1358.00 1022.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1007.05)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#0f4460" stroke="#0d374e" points="8,-8 8,-984 1320,-984 1320,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-971.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_db</title>
<polygon fill="#2c4e32" stroke="#1e3524" points="48,-48 48,-652 878,-652 878,-48 48,-48"/>
<text xml:space="preserve" text-anchor="start" x="56" y="-639.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#c2f0c2" fill-opacity="0.701961">BOUTIQUE DATABASE</text>
</g>
<!-- orders -->
<g id="node1" class="node">
<title>orders</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M520.02,-574.44C520.02,-583.47 448.3,-590.8 360,-590.8 271.7,-590.8 199.98,-583.47 199.98,-574.44 199.98,-574.44 199.98,-427.16 199.98,-427.16 199.98,-418.13 271.7,-410.8 360,-410.8 448.3,-410.8 520.02,-418.13 520.02,-427.16 520.02,-427.16 520.02,-574.44 520.02,-574.44"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M520.02,-574.44C520.02,-565.41 448.3,-558.07 360,-558.07 271.7,-558.07 199.98,-565.41 199.98,-574.44"/>
<text xml:space="preserve" text-anchor="start" x="276.43" y="-496.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="320.38" y="-505.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Orders</text>
<text xml:space="preserve" text-anchor="start" x="469.68" y="-496.6" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="320.38" y="-482.3" font-family="Arial" font-size="15.00" fill="#c2f0c2">Stores all order data.</text>
</g>
<!-- products -->
<g id="node2" class="node">
<title>products</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M838.02,-251.64C838.02,-260.67 766.3,-268 678,-268 589.7,-268 517.98,-260.67 517.98,-251.64 517.98,-251.64 517.98,-104.36 517.98,-104.36 517.98,-95.33 589.7,-88 678,-88 766.3,-88 838.02,-95.33 838.02,-104.36 838.02,-104.36 838.02,-251.64 838.02,-251.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M838.02,-251.64C838.02,-242.61 766.3,-235.27 678,-235.27 589.7,-235.27 517.98,-242.61 517.98,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="586.93" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="630.87" y="-183" font-family="Arial" font-size="20.00" fill="#f8fafc">Products</text>
<text xml:space="preserve" text-anchor="start" x="795.18" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="630.87" y="-159.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Stores all product data.</text>
</g>
<!-- users -->
<g id="node3" class="node">
<title>users</title>
<path fill="#428a4f" stroke="#2d5d39" stroke-width="2" d="M408.02,-251.64C408.02,-260.67 336.3,-268 248,-268 159.7,-268 87.98,-260.67 87.98,-251.64 87.98,-251.64 87.98,-104.36 87.98,-104.36 87.98,-95.33 159.7,-88 248,-88 336.3,-88 408.02,-95.33 408.02,-104.36 408.02,-104.36 408.02,-251.64 408.02,-251.64"/>
<path fill="none" stroke="#2d5d39" stroke-width="2" d="M408.02,-251.64C408.02,-242.61 336.3,-235.27 248,-235.27 159.7,-235.27 87.98,-242.61 87.98,-251.64"/>
<text xml:space="preserve" text-anchor="start" x="167.35" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="211.3" y="-183" font-family="Arial" font-size="20.00" fill="#f8fafc">Users</text>
<text xml:space="preserve" text-anchor="start" x="354.76" y="-173.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="211.3" y="-159.5" font-family="Arial" font-size="15.00" fill="#c2f0c2">Stores all user data.</text>
</g>
<!-- payments -->
<g id="node4" class="node">
<title>payments</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="541.3,-922.8 178.7,-922.8 178.7,-742.8 541.3,-742.8 541.3,-922.8"/>
<text xml:space="preserve" text-anchor="start" x="226.82" y="-828.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="270.76" y="-855.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Payment Service</text>
<text xml:space="preserve" text-anchor="start" x="519.29" y="-828.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="270.76" y="-832.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="270.76" y="-814.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="270.76" y="-796.3" font-family="Arial" font-size="15.00" fill="#b6ecf7">transaction ID.</text>
</g>
<!-- catalogue -->
<g id="node5" class="node">
<title>catalogue</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1280.02,-590.8 917.98,-590.8 917.98,-410.8 1280.02,-410.8 1280.02,-590.8"/>
<text xml:space="preserve" text-anchor="start" x="966.1" y="-496.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1010.04" y="-533.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Product Catalogue Service</text>
<text xml:space="preserve" text-anchor="start" x="1258.01" y="-496.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1010.04" y="-511.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Laravel</text>
<text xml:space="preserve" text-anchor="start" x="1010.04" y="-490.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides a list of products and</text>
<text xml:space="preserve" text-anchor="start" x="1010.04" y="-472.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">ability to search products and get</text>
<text xml:space="preserve" text-anchor="start" x="1010.04" y="-454.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">individual products.</text>
</g>
<!-- orders&#45;&gt;products -->
<g id="edge3" class="edge">
<title>orders&#45;&gt;products</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="1,5" d="M417.82,-409.88C437.45,-382.28 460.53,-352.71 484.53,-328 503.47,-308.5 525.06,-289.42 546.79,-271.77"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="548.23,-273.98 552.44,-267.23 544.95,-269.89 548.23,-273.98"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="484.53,-328 484.53,-350.8 580,-350.8 580,-328 484.53,-328"/>
<text xml:space="preserve" text-anchor="start" x="487.53" y="-335.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">many&#45;to&#45;many</text>
</g>
<!-- orders&#45;&gt;users -->
<g id="edge4" class="edge">
<title>orders&#45;&gt;users</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="1,5" d="M328.65,-410.01C314.36,-369.09 297.4,-320.49 282.72,-278.46"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="285.29,-277.84 280.34,-271.62 280.33,-279.57 285.29,-277.84"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="307.36,-328 307.36,-350.8 402.83,-350.8 402.83,-328 307.36,-328"/>
<text xml:space="preserve" text-anchor="start" x="310.36" y="-335.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">many&#45;to&#45;many</text>
</g>
<!-- payments&#45;&gt;orders -->
<g id="edge1" class="edge">
<title>payments&#45;&gt;orders</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M360,-742.93C360,-699.45 360,-646.94 360,-602.03"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="362.63,-602.21 360,-594.71 357.38,-602.21 362.63,-602.21"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="360,-660 360,-682.8 493.63,-682.8 493.63,-660 360,-660"/>
<text xml:space="preserve" text-anchor="start" x="363" y="-667.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates order status</text>
</g>
<!-- catalogue&#45;&gt;products -->
<g id="edge2" class="edge">
<title>catalogue&#45;&gt;products</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M982.29,-410.87C925.81,-367.83 858.01,-316.17 800.76,-272.54"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="802.36,-270.46 794.8,-268 799.17,-274.63 802.36,-270.46"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="901.12,-328 901.12,-350.8 991.17,-350.8 991.17,-328 901.12,-328"/>
<text xml:space="preserve" text-anchor="start" x="904.12" y="-335.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets products</text>
</g>
</g>
</svg>
`;case"catalogue":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="914pt" height="1006pt"
 viewBox="0.00 0.00 914.00 1006.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 991.05)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#0f4460" stroke="#0d374e" points="8,-8 8,-968 876,-968 876,-8 8,-8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-955.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<g id="clust2" class="cluster">
<title>cluster_db</title>
<polygon fill="#0d4b6c" stroke="#0b3c57" points="201,-48 201,-313.2 585,-313.2 585,-48 201,-48"/>
<text xml:space="preserve" text-anchor="start" x="209" y="-300.3" font-family="Arial" font-weight="bold" font-size="11.00" fill="#b6ecf7" fill-opacity="0.701961">BOUTIQUE DATABASE</text>
</g>
<!-- products -->
<g id="node1" class="node">
<title>products</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M553.02,-243.64C553.02,-252.67 481.3,-260 393,-260 304.7,-260 232.98,-252.67 232.98,-243.64 232.98,-243.64 232.98,-96.36 232.98,-96.36 232.98,-87.33 304.7,-80 393,-80 481.3,-80 553.02,-87.33 553.02,-96.36 553.02,-96.36 553.02,-243.64 553.02,-243.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M553.02,-243.64C553.02,-234.61 481.3,-227.27 393,-227.27 304.7,-227.27 232.98,-234.61 232.98,-243.64"/>
<text xml:space="preserve" text-anchor="start" x="301.93" y="-165.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="345.87" y="-175" font-family="Arial" font-size="20.00" fill="#f0f9ff">Products</text>
<text xml:space="preserve" text-anchor="start" x="510.18" y="-165.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="345.87" y="-151.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores all product data.</text>
</g>
<!-- cart -->
<g id="node2" class="node">
<title>cart</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="368.02,-906.8 47.98,-906.8 47.98,-726.8 368.02,-726.8 368.02,-906.8"/>
<text xml:space="preserve" text-anchor="start" x="97.58" y="-812.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="141.53" y="-849.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Cart Service</text>
<text xml:space="preserve" text-anchor="start" x="344.53" y="-812.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="141.53" y="-827.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="141.53" y="-806.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores the items in the user&#39;s</text>
<text xml:space="preserve" text-anchor="start" x="141.53" y="-788.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">shopping cart in Redis and</text>
<text xml:space="preserve" text-anchor="start" x="141.53" y="-770.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">retrieves it.</text>
</g>
<!-- frontend -->
<g id="node3" class="node">
<title>frontend</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="835.78,-906.8 478.22,-906.8 478.22,-726.8 835.78,-726.8 835.78,-906.8"/>
<text xml:space="preserve" text-anchor="start" x="526.34" y="-812.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="570.28" y="-840.6" font-family="Arial" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="813.77" y="-812.6" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="570.28" y="-818.9" font-family="Arial" font-size="13.00" fill="#b6ecf7">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="570.28" y="-797.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="570.28" y="-779.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">the web interface</text>
</g>
<!-- catalogue -->
<g id="node4" class="node">
<title>catalogue</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="574.02,-584 211.98,-584 211.98,-404 574.02,-404 574.02,-584"/>
<text xml:space="preserve" text-anchor="start" x="260.1" y="-489.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="304.04" y="-526.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Product Catalogue Service</text>
<text xml:space="preserve" text-anchor="start" x="552.01" y="-489.8" font-family="Arial" font-size="14.00" fill="#f8fafc"> </text>
<text xml:space="preserve" text-anchor="start" x="304.04" y="-505.1" font-family="Arial" font-size="13.00" fill="#c2f0c2">Laravel</text>
<text xml:space="preserve" text-anchor="start" x="304.04" y="-483.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">Provides a list of products and</text>
<text xml:space="preserve" text-anchor="start" x="304.04" y="-465.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">ability to search products and get</text>
<text xml:space="preserve" text-anchor="start" x="304.04" y="-447.7" font-family="Arial" font-size="15.00" fill="#c2f0c2">individual products.</text>
</g>
<!-- cart&#45;&gt;catalogue -->
<g id="edge1" class="edge">
<title>cart&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M259.29,-726.87C283.3,-685.23 311.96,-635.52 336.58,-592.83"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="338.79,-594.26 340.26,-586.45 334.24,-591.64 338.79,-594.26"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="306.05,-644 306.05,-666.8 420.23,-666.8 420.23,-644 306.05,-644"/>
<text xml:space="preserve" text-anchor="start" x="309.05" y="-651.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- frontend&#45;&gt;catalogue -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;catalogue</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M583.81,-726.87C549.26,-684.88 507.96,-634.69 472.63,-591.76"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="474.82,-590.29 468.03,-586.17 470.76,-593.63 474.82,-590.29"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="532.92,-644 532.92,-666.8 647.1,-666.8 647.1,-644 532.92,-644"/>
<text xml:space="preserve" text-anchor="start" x="535.92" y="-651.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets product data</text>
</g>
<!-- catalogue&#45;&gt;products -->
<g id="edge3" class="edge">
<title>catalogue&#45;&gt;products</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M393,-404.16C393,-362.97 393,-313.84 393,-271.32"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="395.63,-271.48 393,-263.98 390.38,-271.48 395.63,-271.48"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="393,-321.2 393,-344 483.05,-344 483.05,-321.2 393,-321.2"/>
<text xml:space="preserve" text-anchor="start" x="396" y="-328.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">gets products</text>
</g>
</g>
</svg>
`;case"place-order":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="3772pt" height="1553pt"
 viewBox="0.00 0.00 3772.00 1553.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1537.85)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#454545" stroke="#313131" points="607.14,-8 607.14,-1484 3073.54,-1484 3073.54,-8 607.14,-8"/>
<text xml:space="preserve" text-anchor="start" x="615.14" y="-1471.1" font-family="Arial" font-weight="bold" font-size="11.00" fill="#d4d4d4" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="320.04,-803 0,-803 0,-623 320.04,-623 320.04,-803"/>
<text xml:space="preserve" text-anchor="start" x="116.68" y="-707" font-family="Arial" font-size="20.00" fill="#f8fafc">Customer</text>
</g>
<!-- frontend -->
<g id="node2" class="node">
<title>frontend</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1004.69,-803 647.14,-803 647.14,-623 1004.69,-623 1004.69,-803"/>
<text xml:space="preserve" text-anchor="start" x="695.25" y="-708.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="739.2" y="-736.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Frontend</text>
<text xml:space="preserve" text-anchor="start" x="982.69" y="-708.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="739.2" y="-715.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Vue.js / TypeScript</text>
<text xml:space="preserve" text-anchor="start" x="739.2" y="-693.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Provides access to the services via</text>
<text xml:space="preserve" text-anchor="start" x="739.2" y="-675.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">the web interface</text>
</g>
<!-- cart -->
<g id="node3" class="node">
<title>cart</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="1626.92,-642 1306.88,-642 1306.88,-462 1626.92,-462 1626.92,-642"/>
<text xml:space="preserve" text-anchor="start" x="1356.48" y="-547.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1400.42" y="-584.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Cart Service</text>
<text xml:space="preserve" text-anchor="start" x="1603.43" y="-547.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="1400.42" y="-563.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="1400.42" y="-541.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores the items in the user&#39;s</text>
<text xml:space="preserve" text-anchor="start" x="1400.42" y="-523.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">shopping cart in Redis and</text>
<text xml:space="preserve" text-anchor="start" x="1400.42" y="-505.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">retrieves it.</text>
</g>
<!-- checkout -->
<g id="node4" class="node">
<title>checkout</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="2320.22,-864 1958.45,-864 1958.45,-684 2320.22,-684 2320.22,-864"/>
<text xml:space="preserve" text-anchor="start" x="2006.57" y="-769.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2050.51" y="-806.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="2298.21" y="-769.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2050.51" y="-785.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="2050.51" y="-763.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="2050.51" y="-745.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="2050.51" y="-727.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">and email notifications.</text>
</g>
<!-- db -->
<g id="node5" class="node">
<title>db</title>
<path fill="#0284c7" stroke="#0369a1" stroke-width="2" d="M3016.03,-308.64C3016.03,-317.67 2941.5,-325 2849.75,-325 2758,-325 2683.47,-317.67 2683.47,-308.64 2683.47,-308.64 2683.47,-161.36 2683.47,-161.36 2683.47,-152.33 2758,-145 2849.75,-145 2941.5,-145 3016.03,-152.33 3016.03,-161.36 3016.03,-161.36 3016.03,-308.64 3016.03,-308.64"/>
<path fill="none" stroke="#0369a1" stroke-width="2" d="M3016.03,-308.64C3016.03,-299.61 2941.5,-292.27 2849.75,-292.27 2758,-292.27 2683.47,-299.61 2683.47,-308.64"/>
<text xml:space="preserve" text-anchor="start" x="2731.58" y="-230.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2775.53" y="-258.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Boutique Database</text>
<text xml:space="preserve" text-anchor="start" x="2994.02" y="-230.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2775.53" y="-237.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="2775.53" y="-215.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Stores all products, orders, and</text>
<text xml:space="preserve" text-anchor="start" x="2775.53" y="-197.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">user data.</text>
</g>
<!-- shipping -->
<g id="node6" class="node">
<title>shipping</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3033.54,-710 2665.96,-710 2665.96,-530 3033.54,-530 3033.54,-710"/>
<text xml:space="preserve" text-anchor="start" x="2714.08" y="-615.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2758.02" y="-652.8" font-family="Arial" font-size="20.00" fill="#f0f9ff">Shipping Service</text>
<text xml:space="preserve" text-anchor="start" x="3011.53" y="-615.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2758.02" y="-631.1" font-family="Arial" font-size="13.00" fill="#b6ecf7">.NET Service</text>
<text xml:space="preserve" text-anchor="start" x="2758.02" y="-609.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">Gives shipping cost estimates based</text>
<text xml:space="preserve" text-anchor="start" x="2758.02" y="-591.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">on the shopping cart. Ships items</text>
<text xml:space="preserve" text-anchor="start" x="2758.02" y="-573.7" font-family="Arial" font-size="15.00" fill="#b6ecf7">to the given address.</text>
</g>
<!-- email -->
<g id="node7" class="node">
<title>email</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3029.05,-1051 2670.45,-1051 2670.45,-871 3029.05,-871 3029.05,-1051"/>
<text xml:space="preserve" text-anchor="start" x="2788.62" y="-975" font-family="Arial" font-size="20.00" fill="#f0f9ff">Email Service</text>
<text xml:space="preserve" text-anchor="start" x="2690.5" y="-951.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Sends emails to customers using templates and</text>
<text xml:space="preserve" text-anchor="start" x="2800.14" y="-933.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">customer data.</text>
</g>
<!-- payments -->
<g id="node8" class="node">
<title>payments</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="3031.05,-1374 2668.45,-1374 2668.45,-1194 3031.05,-1194 3031.05,-1374"/>
<text xml:space="preserve" text-anchor="start" x="2716.57" y="-1279.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2760.51" y="-1307" font-family="Arial" font-size="20.00" fill="#f0f9ff">Payment Service</text>
<text xml:space="preserve" text-anchor="start" x="3009.04" y="-1279.8" font-family="Arial" font-size="14.00" fill="#f0f9ff"> </text>
<text xml:space="preserve" text-anchor="start" x="2760.51" y="-1283.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="2760.51" y="-1265.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="2760.51" y="-1247.5" font-family="Arial" font-size="15.00" fill="#b6ecf7">transaction ID.</text>
</g>
<!-- payment&#45;gateway -->
<g id="node9" class="node">
<title>payment&#45;gateway</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="3742.06,-1374 3399.31,-1374 3399.31,-1194 3742.06,-1194 3742.06,-1374"/>
<text xml:space="preserve" text-anchor="start" x="3488.98" y="-1298.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Payment Gateway</text>
<text xml:space="preserve" text-anchor="start" x="3553.71" y="-1277.1" font-family="Arial" font-size="13.00" fill="#cbd5e1">Stripe</text>
<text xml:space="preserve" text-anchor="start" x="3419.37" y="-1255.7" font-family="Arial" font-size="15.00" fill="#cbd5e1">3rd&#45;party Platform to processonline payments</text>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge1" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M319.96,-745.5C340.11,-748.59 360.5,-751.23 380.04,-753 471.71,-761.3 495.41,-760.66 587.14,-753 603.53,-751.63 620.49,-749.74 637.45,-747.52"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="637.36,-750.18 644.44,-746.58 636.66,-744.98 637.36,-750.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="397.05,-761.99 397.05,-794.79 421.05,-794.79 421.05,-761.99 397.05,-761.99"/>
<text xml:space="preserve" text-anchor="start" x="405.16" y="-775.19" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="424.05,-761.99 424.05,-794.79 570.12,-794.79 570.12,-761.99 424.05,-761.99"/>
<text xml:space="preserve" text-anchor="start" x="427.05" y="-774.19" font-family="Arial" font-size="14.00" fill="#c6c6c6">places products in cart</text>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge3" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M319.93,-692.06C340.13,-690.06 360.55,-688.34 380.04,-687.2 471.92,-681.81 495.23,-682.23 587.14,-687.2 603.27,-688.07 620,-689.28 636.77,-690.69"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="636.49,-693.3 644.19,-691.34 636.94,-688.07 636.49,-693.3"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="383.04,-690.2 383.04,-723 407.04,-723 407.04,-690.2 383.04,-690.2"/>
<text xml:space="preserve" text-anchor="start" x="391.15" y="-703.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="410.04,-690.2 410.04,-723 584.14,-723 584.14,-690.2 410.04,-690.2"/>
<text xml:space="preserve" text-anchor="start" x="413.04" y="-702.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">enters shipping information</text>
</g>
<!-- customer&#45;&gt;frontend -->
<g id="edge5" class="edge">
<title>customer&#45;&gt;frontend</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M320,-634.55C339.82,-627.44 360.13,-621.36 380.04,-617.2 470.13,-598.36 496.78,-599.68 587.14,-617.2 603.75,-620.42 620.68,-624.8 637.46,-629.92"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="636.49,-632.37 644.44,-632.11 638.07,-627.36 636.49,-632.37"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="396.66,-620.2 396.66,-653 420.66,-653 420.66,-620.2 396.66,-620.2"/>
<text xml:space="preserve" text-anchor="start" x="404.77" y="-633.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">5</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="423.66,-620.2 423.66,-653 570.52,-653 570.52,-620.2 423.66,-620.2"/>
<text xml:space="preserve" text-anchor="start" x="426.66" y="-632.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">enters payment details</text>
</g>
<!-- frontend&#45;&gt;cart -->
<g id="edge2" class="edge">
<title>frontend&#45;&gt;cart</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M914.75,-623.19C956.38,-586.94 1009.13,-549.27 1064.69,-530.4 1138.18,-505.44 1223.58,-506.25 1296.65,-515.16"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1296.11,-517.73 1303.88,-516.08 1296.77,-512.53 1296.11,-517.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1067.69,-533.4 1067.69,-573 1091.69,-573 1091.69,-533.4 1067.69,-533.4"/>
<text xml:space="preserve" text-anchor="start" x="1075.8" y="-550" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1094.69,-533.4 1094.69,-573 1243.88,-573 1243.88,-533.4 1094.69,-533.4"/>
<text xml:space="preserve" text-anchor="start" x="1097.69" y="-557.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">creates or updates cart</text>
<text xml:space="preserve" text-anchor="start" x="1103.92" y="-540.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">POST /shopping&#45;cart</text>
</g>
<!-- frontend&#45;&gt;cart -->
<g id="edge4" class="edge">
<title>frontend&#45;&gt;cart</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1004.48,-668.26C1095.88,-645.23 1206.72,-617.3 1296.86,-594.59"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1297.34,-597.18 1303.97,-592.8 1296.06,-592.09 1297.34,-597.18"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1067.69,-654.66 1067.69,-694.26 1091.69,-694.26 1091.69,-654.66 1067.69,-654.66"/>
<text xml:space="preserve" text-anchor="start" x="1075.8" y="-671.26" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1094.69,-654.66 1094.69,-694.26 1243.88,-694.26 1243.88,-654.66 1094.69,-654.66"/>
<text xml:space="preserve" text-anchor="start" x="1097.69" y="-678.66" font-family="Arial" font-size="14.00" fill="#c6c6c6">creates or updates cart</text>
<text xml:space="preserve" text-anchor="start" x="1103.92" y="-661.86" font-family="Arial" font-size="14.00" fill="#c6c6c6">POST /shopping&#45;cart</text>
</g>
<!-- frontend&#45;&gt;checkout -->
<g id="edge6" class="edge">
<title>frontend&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1004.37,-722.02C1178.25,-730.77 1450.79,-744.26 1686.92,-755 1772.68,-758.9 1867.62,-762.94 1948.21,-766.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1947.84,-768.89 1955.45,-766.58 1948.06,-763.65 1947.84,-768.89"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1397.87,-755.04 1397.87,-794.64 1421.87,-794.64 1421.87,-755.04 1397.87,-755.04"/>
<text xml:space="preserve" text-anchor="start" x="1405.98" y="-771.64" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">6</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1424.87,-755.04 1424.87,-794.64 1535.93,-794.64 1535.93,-755.04 1424.87,-755.04"/>
<text xml:space="preserve" text-anchor="start" x="1427.87" y="-779.04" font-family="Arial" font-size="14.00" fill="#c6c6c6">initiates payment</text>
<text xml:space="preserve" text-anchor="start" x="1429.43" y="-762.24" font-family="Arial" font-size="14.00" fill="#c6c6c6">POST /checkout</text>
</g>
<!-- cart&#45;&gt;checkout -->
<g id="edge10" class="edge">
<title>cart&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1636.51,-607.83C1734.77,-640.37 1858.63,-681.38 1958.71,-714.52"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1637.6,-605.43 1629.66,-605.56 1635.95,-610.41 1637.6,-605.43"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1689.92,-692.41 1689.92,-725.21 1733.17,-725.21 1733.17,-692.41 1689.92,-692.41"/>
<text xml:space="preserve" text-anchor="start" x="1697.92" y="-705.61" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">10.1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1736.17,-692.41 1736.17,-725.21 1895.45,-725.21 1895.45,-692.41 1736.17,-692.41"/>
<text xml:space="preserve" text-anchor="start" x="1739.17" y="-704.61" font-family="Arial" font-size="14.00" fill="#c6c6c6">marks cart as purchased</text>
</g>
<!-- checkout&#45;&gt;db -->
<g id="edge7" class="edge">
<title>checkout&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2143.82,-684.24C2154.83,-540.26 2199.66,-261.19 2380.22,-136.2 2471.51,-73 2595.08,-102.64 2692.4,-145.45"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2691.05,-147.73 2698.97,-148.4 2693.2,-142.93 2691.05,-147.73"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2425.24,-139.2 2425.24,-172 2449.24,-172 2449.24,-139.2 2425.24,-139.2"/>
<text xml:space="preserve" text-anchor="start" x="2433.34" y="-152.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">7</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2452.24,-139.2 2452.24,-172 2560.94,-172 2560.94,-139.2 2452.24,-139.2"/>
<text xml:space="preserve" text-anchor="start" x="2455.24" y="-151.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">writes new order</text>
</g>
<!-- checkout&#45;&gt;db -->
<g id="edge19" class="edge">
<title>checkout&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2167.02,-684.43C2200.74,-587.02 2268.28,-433.92 2380.22,-349.2 2463.79,-285.94 2577.67,-257.24 2672.23,-244.43"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2672.39,-247.06 2679.48,-243.49 2671.71,-241.85 2672.39,-247.06"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2403.15,-352.2 2403.15,-385 2446.4,-385 2446.4,-352.2 2403.15,-352.2"/>
<text xml:space="preserve" text-anchor="start" x="2411.15" y="-365.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">15.3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2449.4,-352.2 2449.4,-385 2583.03,-385 2583.03,-352.2 2449.4,-352.2"/>
<text xml:space="preserve" text-anchor="start" x="2452.4" y="-364.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates order status</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge8" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2177.04,-684.14C2214.9,-604.75 2282.27,-494.08 2380.22,-444.2 2469.62,-398.68 2510.51,-413.27 2605.96,-444.2 2656.66,-460.63 2705.66,-492.05 2746.2,-523.84"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2744.32,-525.7 2751.82,-528.32 2747.59,-521.59 2744.32,-525.7"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2419.4,-447.2 2419.4,-480 2443.4,-480 2443.4,-447.2 2419.4,-447.2"/>
<text xml:space="preserve" text-anchor="start" x="2427.51" y="-460.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">8</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2446.4,-447.2 2446.4,-480 2566.78,-480 2566.78,-447.2 2446.4,-447.2"/>
<text xml:space="preserve" text-anchor="start" x="2449.4" y="-459.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">reserves inventory</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge9" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2241.73,-677.66C2281.72,-645.94 2330.06,-614.61 2380.22,-598.2 2471.35,-568.38 2577.77,-570.61 2666.14,-581.71"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2240.14,-675.57 2235.95,-682.32 2243.44,-679.66 2240.14,-675.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2383.22,-601.2 2383.22,-634 2407.22,-634 2407.22,-601.2 2383.22,-601.2"/>
<text xml:space="preserve" text-anchor="start" x="2391.33" y="-614.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">9</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2410.22,-601.2 2410.22,-634 2602.96,-634 2602.96,-601.2 2410.22,-601.2"/>
<text xml:space="preserve" text-anchor="start" x="2413.22" y="-613.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">confirms inventory reservation</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge17" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2320.01,-734.94C2422.66,-712.63 2551.39,-684.64 2656.12,-661.87"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2656.45,-664.49 2663.22,-660.33 2655.34,-659.36 2656.45,-664.49"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2408.61,-722.79 2408.61,-755.59 2451.85,-755.59 2451.85,-722.79 2408.61,-722.79"/>
<text xml:space="preserve" text-anchor="start" x="2416.61" y="-735.99" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">15.1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2454.85,-722.79 2454.85,-755.59 2577.57,-755.59 2577.57,-722.79 2454.85,-722.79"/>
<text xml:space="preserve" text-anchor="start" x="2457.85" y="-734.99" font-family="Arial" font-size="14.00" fill="#c6c6c6">requests fulfillment</text>
</g>
<!-- checkout&#45;&gt;email -->
<g id="edge11" class="edge">
<title>checkout&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2320.01,-821.43C2424.05,-848.89 2554.88,-883.43 2660.36,-911.27"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2659.64,-913.8 2667.56,-913.17 2660.98,-908.72 2659.64,-913.8"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2389.93,-898.18 2389.93,-930.98 2433.17,-930.98 2433.17,-898.18 2389.93,-898.18"/>
<text xml:space="preserve" text-anchor="start" x="2397.93" y="-911.38" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">10.2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2436.17,-898.18 2436.17,-930.98 2596.25,-930.98 2596.25,-898.18 2436.17,-898.18"/>
<text xml:space="preserve" text-anchor="start" x="2439.17" y="-910.38" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends order confirmation</text>
</g>
<!-- checkout&#45;&gt;email -->
<g id="edge18" class="edge">
<title>checkout&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2226.5,-863.98C2268.79,-901.69 2322.92,-941.3 2380.22,-961 2469.01,-991.52 2572.99,-994.52 2660.4,-988.61"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2660.4,-991.24 2667.69,-988.08 2660.02,-986 2660.4,-991.24"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2408.21,-994.07 2408.21,-1026.87 2451.46,-1026.87 2451.46,-994.07 2408.21,-994.07"/>
<text xml:space="preserve" text-anchor="start" x="2416.21" y="-1007.27" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">15.2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2454.46,-994.07 2454.46,-1026.87 2577.96,-1026.87 2577.96,-994.07 2454.46,-994.07"/>
<text xml:space="preserve" text-anchor="start" x="2457.46" y="-1006.27" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends confirmation</text>
</g>
<!-- checkout&#45;&gt;payments -->
<g id="edge12" class="edge">
<title>checkout&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2201.23,-863.92C2245.52,-924.28 2309.84,-1002.45 2380.22,-1057 2464.05,-1121.98 2569.47,-1175.09 2659.08,-1213.55"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2657.82,-1215.87 2665.75,-1216.39 2659.88,-1211.04 2657.82,-1215.87"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2415.22,-1189.79 2415.22,-1222.59 2458.46,-1222.59 2458.46,-1189.79 2415.22,-1189.79"/>
<text xml:space="preserve" text-anchor="start" x="2423.22" y="-1202.99" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">10.3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2461.46,-1189.79 2461.46,-1222.59 2570.96,-1222.59 2570.96,-1189.79 2461.46,-1189.79"/>
<text xml:space="preserve" text-anchor="start" x="2464.46" y="-1201.99" font-family="Arial" font-size="14.00" fill="#c6c6c6">creates payment</text>
</g>
<!-- checkout&#45;&gt;payments -->
<g id="edge16" class="edge">
<title>checkout&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M2159.66,-873.89C2187.3,-986.91 2249.93,-1166.46 2380.22,-1253 2463.83,-1308.53 2575.39,-1317.82 2668.68,-1312.5"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="2162.26,-873.47 2157.96,-866.79 2157.15,-874.69 2162.26,-873.47"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="2477.3,-1313.24 2477.3,-1346.04 2508.87,-1346.04 2508.87,-1313.24 2477.3,-1313.24"/>
<text xml:space="preserve" text-anchor="start" x="2485.3" y="-1326.44" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">14</text>
</g>
<!-- payments&#45;&gt;payment&#45;gateway -->
<g id="edge13" class="edge">
<title>payments&#45;&gt;payment&#45;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3030.78,-1284C3140.17,-1284 3279.39,-1284 3388.92,-1284"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3388.89,-1286.63 3396.39,-1284 3388.89,-1281.38 3388.89,-1286.63"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3135.44,-1287 3135.44,-1319.8 3167.02,-1319.8 3167.02,-1287 3135.44,-1287"/>
<text xml:space="preserve" text-anchor="start" x="3143.44" y="-1300.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">11</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3170.02,-1287 3170.02,-1319.8 3297.41,-1319.8 3297.41,-1287 3170.02,-1287"/>
<text xml:space="preserve" text-anchor="start" x="3173.02" y="-1299.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">processes payment</text>
</g>
<!-- payments&#45;&gt;payment&#45;gateway -->
<g id="edge15" class="edge">
<title>payments&#45;&gt;payment&#45;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3040.81,-1227.4C3058.51,-1223.67 3076.28,-1220.5 3093.54,-1218.2 3201.82,-1203.79 3231.14,-1203.05 3339.31,-1218.2 3358.98,-1220.95 3379.33,-1224.97 3399.42,-1229.68"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3040.71,-1224.74 3033.94,-1228.89 3041.82,-1229.87 3040.71,-1224.74"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3096.54,-1221.2 3096.54,-1254 3128.11,-1254 3128.11,-1221.2 3096.54,-1221.2"/>
<text xml:space="preserve" text-anchor="start" x="3104.54" y="-1234.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">13</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3131.11,-1221.2 3131.11,-1254 3336.31,-1254 3336.31,-1221.2 3131.11,-1221.2"/>
<text xml:space="preserve" text-anchor="start" x="3134.11" y="-1233.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">confirms payment with webnook</text>
</g>
<!-- payment&#45;gateway&#45;&gt;payment&#45;gateway -->
<g id="edge14" class="edge">
<title>payment&#45;gateway&#45;&gt;payment&#45;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M3509.09,-1373.98C3493.94,-1430.28 3514.47,-1484 3570.69,-1484 3623.5,-1484 3644.82,-1436.58 3634.65,-1384.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="3637.22,-1383.64 3632.97,-1376.93 3632.1,-1384.83 3637.22,-1383.64"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3444.58,-1487 3444.58,-1519.8 3476.15,-1519.8 3476.15,-1487 3444.58,-1487"/>
<text xml:space="preserve" text-anchor="start" x="3452.58" y="-1500.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">12</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="3479.15,-1487 3479.15,-1519.8 3696.79,-1519.8 3696.79,-1487 3479.15,-1487"/>
<text xml:space="preserve" text-anchor="start" x="3482.15" y="-1499.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">processes payment with customer</text>
</g>
</g>
</svg>
`;case"order-fulfillment":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 14.0.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="1690pt" height="1634pt"
 viewBox="0.00 0.00 1690.00 1634.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1619.45)">
<g id="clust1" class="cluster">
<title>cluster_boutique</title>
<polygon fill="#3e4651" stroke="#2d333d" points="8,-298.8 8,-1596.4 1242,-1596.4 1242,-298.8 8,-298.8"/>
<text xml:space="preserve" text-anchor="start" x="16" y="-1583.5" font-family="Arial" font-weight="bold" font-size="11.00" fill="#cbd5e1" fill-opacity="0.701961">ONLINE BOUTIQUE SYSTEM</text>
</g>
<!-- customer -->
<g id="node1" class="node">
<title>customer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="1141.02,-180 820.98,-180 820.98,0 1141.02,0 1141.02,-180"/>
<text xml:space="preserve" text-anchor="start" x="937.66" y="-84" font-family="Arial" font-size="20.00" fill="#f8fafc">Customer</text>
</g>
<!-- payment&#45;gateway -->
<g id="node2" class="node">
<title>payment&#45;gateway</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="1593.37,-180 1250.63,-180 1250.63,0 1593.37,0 1593.37,-180"/>
<text xml:space="preserve" text-anchor="start" x="1340.3" y="-104.8" font-family="Arial" font-size="20.00" fill="#f8fafc">Payment Gateway</text>
<text xml:space="preserve" text-anchor="start" x="1405.02" y="-83.1" font-family="Arial" font-size="13.00" fill="#cbd5e1">Stripe</text>
<text xml:space="preserve" text-anchor="start" x="1270.68" y="-61.7" font-family="Arial" font-size="15.00" fill="#cbd5e1">3rd&#45;party Platform to processonline payments</text>
</g>
<!-- payments -->
<g id="node3" class="node">
<title>payments</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="1002.3,-1535.2 639.7,-1535.2 639.7,-1355.2 1002.3,-1355.2 1002.3,-1535.2"/>
<text xml:space="preserve" text-anchor="start" x="687.82" y="-1441" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="731.76" y="-1468.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Payment Service</text>
<text xml:space="preserve" text-anchor="start" x="980.29" y="-1441" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="731.76" y="-1444.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">Charges the given credit card info</text>
<text xml:space="preserve" text-anchor="start" x="731.76" y="-1426.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">with the given amount and returns a</text>
<text xml:space="preserve" text-anchor="start" x="731.76" y="-1408.7" font-family="Arial" font-size="15.00" fill="#bfdbfe">transaction ID.</text>
</g>
<!-- checkout -->
<g id="node4" class="node">
<title>checkout</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="895.88,-1196.4 534.12,-1196.4 534.12,-1016.4 895.88,-1016.4 895.88,-1196.4"/>
<text xml:space="preserve" text-anchor="start" x="582.23" y="-1102.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="626.18" y="-1139.2" font-family="Arial" font-size="20.00" fill="#eff6ff">Checkout Service</text>
<text xml:space="preserve" text-anchor="start" x="873.88" y="-1102.2" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="626.18" y="-1117.5" font-family="Arial" font-size="13.00" fill="#bfdbfe">Node.js</text>
<text xml:space="preserve" text-anchor="start" x="626.18" y="-1096.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">Retrieves user cart, prepares order</text>
<text xml:space="preserve" text-anchor="start" x="626.18" y="-1078.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">and orchestrates payment, shipping</text>
<text xml:space="preserve" text-anchor="start" x="626.18" y="-1060.1" font-family="Arial" font-size="15.00" fill="#bfdbfe">and email notifications.</text>
</g>
<!-- shipping -->
<g id="node5" class="node">
<title>shipping</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="803.79,-857.6 436.21,-857.6 436.21,-677.6 803.79,-677.6 803.79,-857.6"/>
<text xml:space="preserve" text-anchor="start" x="484.33" y="-763.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="528.27" y="-800.4" font-family="Arial" font-size="20.00" fill="#eff6ff">Shipping Service</text>
<text xml:space="preserve" text-anchor="start" x="781.78" y="-763.4" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="528.27" y="-778.7" font-family="Arial" font-size="13.00" fill="#bfdbfe">.NET Service</text>
<text xml:space="preserve" text-anchor="start" x="528.27" y="-757.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Gives shipping cost estimates based</text>
<text xml:space="preserve" text-anchor="start" x="528.27" y="-739.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">on the shopping cart. Ships items</text>
<text xml:space="preserve" text-anchor="start" x="528.27" y="-721.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">to the given address.</text>
</g>
<!-- email -->
<g id="node6" class="node">
<title>email</title>
<polygon fill="#3b82f6" stroke="#2563eb" stroke-width="0" points="550.3,-518.8 191.7,-518.8 191.7,-338.8 550.3,-338.8 550.3,-518.8"/>
<text xml:space="preserve" text-anchor="start" x="309.87" y="-442.8" font-family="Arial" font-size="20.00" fill="#eff6ff">Email Service</text>
<text xml:space="preserve" text-anchor="start" x="211.75" y="-419.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">Sends emails to customers using templates and</text>
<text xml:space="preserve" text-anchor="start" x="321.39" y="-401.3" font-family="Arial" font-size="15.00" fill="#bfdbfe">customer data.</text>
</g>
<!-- db -->
<g id="node7" class="node">
<title>db</title>
<path fill="#3b82f6" stroke="#2563eb" stroke-width="2" d="M1169.28,-502.44C1169.28,-511.47 1094.75,-518.8 1003,-518.8 911.25,-518.8 836.72,-511.47 836.72,-502.44 836.72,-502.44 836.72,-355.16 836.72,-355.16 836.72,-346.13 911.25,-338.8 1003,-338.8 1094.75,-338.8 1169.28,-346.13 1169.28,-355.16 1169.28,-355.16 1169.28,-502.44 1169.28,-502.44"/>
<path fill="none" stroke="#2563eb" stroke-width="2" d="M1169.28,-502.44C1169.28,-493.41 1094.75,-486.07 1003,-486.07 911.25,-486.07 836.72,-493.41 836.72,-502.44"/>
<text xml:space="preserve" text-anchor="start" x="884.84" y="-424.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="928.78" y="-452.6" font-family="Arial" font-size="20.00" fill="#eff6ff">Boutique Database</text>
<text xml:space="preserve" text-anchor="start" x="1147.28" y="-424.6" font-family="Arial" font-size="14.00" fill="#eff6ff"> </text>
<text xml:space="preserve" text-anchor="start" x="928.78" y="-430.9" font-family="Arial" font-size="13.00" fill="#bfdbfe">PostgreSQL</text>
<text xml:space="preserve" text-anchor="start" x="928.78" y="-409.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">Stores all products, orders, and</text>
<text xml:space="preserve" text-anchor="start" x="928.78" y="-391.5" font-family="Arial" font-size="15.00" fill="#bfdbfe">user data.</text>
</g>
<!-- payment&#45;gateway&#45;&gt;payments -->
<g id="edge3" class="edge">
<title>payment&#45;gateway&#45;&gt;payments</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1422,-179.99C1422,-247.89 1422,-343.75 1422,-427.8 1422,-1107.4 1422,-1107.4 1422,-1107.4 1422,-1298.35 1188.26,-1382.13 1012.31,-1418.13"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1011.94,-1415.53 1005.1,-1419.58 1012.97,-1420.68 1011.94,-1415.53"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1425,-751.2 1425,-784 1449,-784 1449,-751.2 1425,-751.2"/>
<text xml:space="preserve" text-anchor="start" x="1433.11" y="-764.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1452,-751.2 1452,-784 1657.2,-784 1657.2,-751.2 1452,-751.2"/>
<text xml:space="preserve" text-anchor="start" x="1455" y="-763.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">confirms payment with webnook</text>
</g>
<!-- payments&#45;&gt;checkout -->
<g id="edge4" class="edge">
<title>payments&#45;&gt;checkout</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M793.01,-1355.27C778.58,-1309.42 760.94,-1253.37 746.09,-1206.17"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="748.63,-1205.5 743.87,-1199.13 743.62,-1207.07 748.63,-1205.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="774.18,-1259.4 774.18,-1292.2 798.18,-1292.2 798.18,-1259.4 774.18,-1259.4"/>
<text xml:space="preserve" text-anchor="start" x="782.29" y="-1272.6" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">4</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="801.18,-1259.4 801.18,-1292.2 971.38,-1292.2 971.38,-1259.4 801.18,-1259.4"/>
<text xml:space="preserve" text-anchor="start" x="804.18" y="-1271.6" font-family="Arial" font-size="14.00" fill="#c6c6c6">confirms pending payment</text>
</g>
<!-- checkout&#45;&gt;shipping -->
<g id="edge5" class="edge">
<title>checkout&#45;&gt;shipping</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M689.92,-1016.47C676.98,-970.62 661.17,-914.57 647.86,-867.37"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="650.44,-866.86 645.88,-860.36 645.39,-868.29 650.44,-866.86"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="673.35,-920.6 673.35,-953.4 708.81,-953.4 708.81,-920.6 673.35,-920.6"/>
<text xml:space="preserve" text-anchor="start" x="681.35" y="-933.8" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">5.1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="711.81,-920.6 711.81,-953.4 834.53,-953.4 834.53,-920.6 711.81,-920.6"/>
<text xml:space="preserve" text-anchor="start" x="714.81" y="-932.8" font-family="Arial" font-size="14.00" fill="#c6c6c6">requests fulfillment</text>
</g>
<!-- checkout&#45;&gt;email -->
<g id="edge6" class="edge">
<title>checkout&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M534.14,-1067.29C420.62,-1033.01 282.94,-970.06 213.04,-857.6 147.88,-752.78 220.65,-616.99 287.52,-526.82"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="289.54,-528.5 291.95,-520.93 285.35,-525.35 289.54,-528.5"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="216.04,-751.2 216.04,-784 251.5,-784 251.5,-751.2 216.04,-751.2"/>
<text xml:space="preserve" text-anchor="start" x="224.04" y="-764.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">5.2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="254.5,-751.2 254.5,-784 378,-784 378,-751.2 254.5,-751.2"/>
<text xml:space="preserve" text-anchor="start" x="257.5" y="-763.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends confirmation</text>
</g>
<!-- checkout&#45;&gt;db -->
<g id="edge7" class="edge">
<title>checkout&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M815.36,-1016.55C833.28,-997.81 850.74,-977.33 865,-956.4 957.29,-820.87 977.87,-778.18 1011,-617.6 1016.81,-589.42 1017.67,-558.37 1016.3,-529.78"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1018.93,-529.72 1015.88,-522.39 1013.69,-530.02 1018.93,-529.72"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1000.18,-751.2 1000.18,-784 1035.64,-784 1035.64,-751.2 1000.18,-751.2"/>
<text xml:space="preserve" text-anchor="start" x="1008.18" y="-764.4" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">5.3</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1038.64,-751.2 1038.64,-784 1172.27,-784 1172.27,-751.2 1038.64,-751.2"/>
<text xml:space="preserve" text-anchor="start" x="1041.64" y="-763.4" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates order status</text>
</g>
<!-- shipping&#45;&gt;email -->
<g id="edge9" class="edge">
<title>shipping&#45;&gt;email</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M436.42,-683.01C412.83,-664.73 391.79,-643.06 376.99,-617.6 361.68,-591.25 356.75,-559.11 356.66,-528.93"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="359.28,-529.34 356.76,-521.8 354.03,-529.26 359.28,-529.34"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="379.99,-581.8 379.99,-614.6 415.46,-614.6 415.46,-581.8 379.99,-581.8"/>
<text xml:space="preserve" text-anchor="start" x="387.99" y="-595" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">6.2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="418.46,-581.8 418.46,-614.6 598,-614.6 598,-581.8 418.46,-581.8"/>
<text xml:space="preserve" text-anchor="start" x="421.46" y="-594" font-family="Arial" font-size="14.00" fill="#c6c6c6">sends shipping confirmation</text>
</g>
<!-- shipping&#45;&gt;db -->
<g id="edge8" class="edge">
<title>shipping&#45;&gt;db</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M721.13,-677.67C774.47,-630.76 839.95,-573.18 894.37,-525.33"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="895.8,-527.57 899.69,-520.64 892.33,-523.63 895.8,-527.57"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="825.98,-581.8 825.98,-614.6 861.45,-614.6 861.45,-581.8 825.98,-581.8"/>
<text xml:space="preserve" text-anchor="start" x="833.98" y="-595" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">6.1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="864.45,-581.8 864.45,-614.6 980.96,-614.6 980.96,-581.8 864.45,-581.8"/>
<text xml:space="preserve" text-anchor="start" x="867.45" y="-594" font-family="Arial" font-size="14.00" fill="#c6c6c6">updates inventory</text>
</g>
<!-- db&#45;&gt;customer -->
<g id="edge1" class="edge">
<title>db&#45;&gt;customer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M962.48,-288.75C961.92,-285.41 961.41,-282.09 960.96,-278.8 956.51,-246.64 958.5,-211.27 962.61,-179.98"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="959.84,-288.91 963.75,-295.82 965.01,-287.98 959.84,-288.91"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="963.96,-243 963.96,-275.8 987.96,-275.8 987.96,-243 963.96,-243"/>
<text xml:space="preserve" text-anchor="start" x="972.07" y="-256.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">1</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="990.96,-243 990.96,-275.8 1074,-275.8 1074,-243 990.96,-243"/>
<text xml:space="preserve" text-anchor="start" x="993.96" y="-255.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">places order</text>
</g>
<!-- db&#45;&gt;payment&#45;gateway -->
<g id="edge2" class="edge">
<title>db&#45;&gt;payment&#45;gateway</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M1127.96,-298.8C1149.65,-278.4 1172.47,-258.08 1194.95,-240 1218.05,-221.41 1243.5,-202.96 1268.76,-185.71"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="1270.07,-187.99 1274.81,-181.6 1267.13,-183.64 1270.07,-187.99"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1197.95,-243 1197.95,-275.8 1221.95,-275.8 1221.95,-243 1197.95,-243"/>
<text xml:space="preserve" text-anchor="start" x="1206.05" y="-256.2" font-family="Arial" font-weight="bold" font-size="14.00" fill="#c6c6c6">2</text>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="1224.95,-243 1224.95,-275.8 1336,-275.8 1336,-243 1224.95,-243"/>
<text xml:space="preserve" text-anchor="start" x="1227.95" y="-255.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">initiates payment</text>
</g>
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{t as dotSource,n as svgSource};
