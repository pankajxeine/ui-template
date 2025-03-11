export default {
  CPANEL_USER_LIST:
    "fields[root]=id,username,firstname,lastname,email,phone,mobile,status,role_id&fields[role]=id,name",
  USER_DETAIL:
    "fields[root]=id,name,role_id,username,firstname,lastname,image,email,phone,mobile,status,access,is_admin,receive_alert,user_type,is_omnna_user,is_default_user,created_by,updated_by,alert_priority,created_at&fields[crm_user_modules][root]=id,user_id,module_id,permission,userId&fields[crm_user_modules][crm_user_module_blocks]=id,block_id,crm_user_module_id,crmUserModuleId,permission&fields[user_branches][root]=id,user_id,branch_id,userId,branchId&fields[user_branches][branch]=id,name,status&fields[user_alerts_type][root]=id,alert_type_id,user_id&fields[user_alerts_type][service_ticket_type]=id,name,status&fields[user_service_ticket_types][root]=id,user_id,service_ticket_type_id,serviceTicketTypeId,userId&fields[user_service_ticket_types][service_ticket_type]=id,name,status&fields[user_customer_status][root]=id,user_id,customer_status_id,customerStatusId,userId&fields[user_customer_status][customer_status]=id,name,status&fields[user_sales_agents][root]=id,user_id,sales_agent_id,salesAgentId,userId&fields[user_sales_agents][sales_agent]=id,name,status",
  CUSTOMER_LIST:
    "fields[root]=id,status,name,contact_title,contact_name,customer_type,customer_status_id,customer_number,customer_email,client_email,dba,contract_start_date,contract_expire_date,type,has_sub&fields[customer_status]=id,name,status",
  CPANEL_MODULE_LIST: "fields[root]=id,name,module_key",
  CUSTOMER_DETAIL:
    "fields[root]=id,allow_package_upgrade,name,status,contact_title,contact_name,customer_type,customer_status_id,customer_number,customer_email,client_email,dba,contract_start_date,contract_expire_date,cost_center,city,state_id,country_id,branch_id,postal_code,phone_number,hours_elapsed,minutes_elapsed,type,status,street_address,chain_number,sic_code&fields[customer_status]=id,name&fields[state]=id,name&fields[country]=id,name&fields[branch]=id,name&fields[customer_sales_agents][root]=id,sales_agent_id,customer_id&fields[customer_sales_agents][sales_agent]=id,name&fields[customer_devices][root]=id,customer_id,device_id&fields[customer_devices][device]=id,name",
  INDUSTRY_LIST: "fields[root]=id,code,name,description,port",
  INDUSTRY_WISE_PACKAGE_LIST:
    "fields[root]=id,name,additional_store_price,allowed_multiple_stores,max_products,max_users,permission_based_on,price,status",
  PACKAGE_LIST: "fields[root]=id,name",
  PACKGE_GET:
    "fields[root]=id,name,industry_id,price,max_products,max_users,allowed_multiple_stores,additional_store_price,status&fields[industry]=id,name",
  SUB_DOMAIN_LIST:
    "fields[root]=id,name,shortname,protocol,subdomain,package_id,status,bundle_retail_price,site_created,billing_frequency,&fields[industry]=id,name,code&fields[package]=id,name,&fields[language]=id,name,&fields[currency]=id,name",
  USER_LIST:
    "fields[root]=id,access,email,mobile,phone,lastname,firstname,username,status,updated_at,created_at,deleted_at",
  SYSTEM_UPDATE_LIST:
    "fields[root]=id,created_at,description,publish_date,status,subject,updated_at",
  SERVICE_TICEKT_DETAIL:
    "fields[root]=priority,followup_date,followup_time,email_followup,customer_id,caller_name,call_direction,notes,description,st_status,subject,is_new_client,id,created_at,hours_lapsed,firstname,lastname,service_ticket_number&fields[user]=username&fields[primary_service_request]=name&fields[service_ticket_type]=name&fields[customer]=type,name",
  SERVICE_TICKET_LIST:
    "fields[root]=id,service_ticket_number,subject,priority,created_at,hours_elapsed,st_status,customer_id,service_ticket_type_id,user_id&fields[service_ticket_type]=name&fields[user]=username&fields[customer]=id",
  BUNDLE_IN_MARKET_GRAPH_GET: "fields[root]=id,name,package_counts",
  OPEN_CUSTOMER_TICKET_GRAPH_GET: "fields[root]=id,name,ticket_counts",
  CUSTOMER_STATUS_GRAPH_GET: "fields[root]=id,name,counts",
  CUSTOMER_IN_FLIGHT_GET: "fields[root]=id,name,customer_counts",
  ALA_CARTE_UPGRADE_GRAPH_GET:
    "fields[root]=sub_cnt,feature_id&fields[module]=id,name",
  SERVICE_TICKET_IN_FLIGHT_GRAPH: "fields[root]=id,name,serice_ticket_counts",
  SERVICE_TICKET_SLA_GRAPH: "fields[root]=id,name,tickets_count",
  SEVRICE_TICKET_TYPE_LIST:
    "fields[root]=id,name,hours,sequence,created_at,status",
  CUSTOMER_STATUS_LIST: "fields[root]=id,name,hours,sequence,created_at,status",
  LIVE_CUSTOMER_REPORT_TEMPLATE_LIST:
    "fields[customer_export_templates_fields]=label,value,sequence,module",
  SERVICE_TICKET_DETAIL:
    "fields[root]=id,customer_id,service_ticket_type_id,subject,st_status,user_id,priority,followup_date,followup_time,email_followup,caller_name,call_direction,primary_service_request_id,notes,description,status,hours_elapsed,minutes_elapsed,is_new_client,service_ticket_number,created_at,litepos_users,industry,sub_id&fields[customer]=id,name,type&fields[service_ticket_type]=all&fields[user]=all&fields[primary_service_request]=all&fields[service_ticket_user_contents]=customer_id,content",
  PRIMARY_SERVICE_LIST: "fields[root]=id,name,status",
  GET_ALL_BRANCH: "fields[root]=id,name",
  GET_ALL_SALES_AGENT: "fields[root]=id,name",
  BRANCH_LIST:
    "fields[root]=id,name,notes,postal_code,status,state_id,city,country_id,address1,address2,created_at&fields[country]=id,name,status&fields[state]=id,name,status",
  SALES_AGENT_LIST:
    "fields[root]=id,name,notes,postal_code,status,state_id,contact_first_name,contact_last_name,email_address,phone_number,city,country_id,address1,address2,created_at&fields[country]=id,name,status&fields[state]=id,name,status",
  BUSINESS_HOURS: "fields[root]=id,day,closing_time,opening_time",
  EMAIL_MODULE:
    "fields[root]=id,email_template_id,field_name,id,field_short_code",
  EMAIL_TEMPLATE_DETAILS:
    "fields[root]=description,email_message,email_subject,id,name,email_images",
  EMAIL_TEMPLATE_LIST:
    "fields[root]=description,email_message,email_subject,name,id",
  RESOURCE_LIST:
    "fields[root]=folder_name,id,parent_folder_id&fields[crm_resource_files][root]=id,folder_id,file_description,file_name,file_origional_name,file_type,file_size",
  BUNDLE_IN_MARKET_REPORT:
    "fields[root]=id,industry_id,subdomain,customer_id,package_id&fields[industry]=id,name&fields[package]=name,id&fields[customer]=id,name,dba,customer_number,deleted_at",
  OPEN_CUSTOMER_TICKET_REPORT:
    "fields[root]=id,service_ticket_number,subject,priority,st_status,customer_id,service_ticket_type_id,created_by&fields[customer]=id,name,customer_number,deleted_at&fields[service_ticket_type]=id,name",
  SERVICE_TICKET_SLA_REPORT:
    "fields[root]=id,service_ticket_number,subject,priority,st_status,customer_id,service_ticket_type_id,created_by&fields[customer]=id,name,customer_number,deleted_at&fields[service_ticket_type]=id,name",
  IN_FLIGHT_SLA_REPORT:
    "fields[root]=id,service_ticket_number,subject,priority,st_status,customer_id,service_ticket_type_id,created_by&fields[customer]=id,name,customer_number,deleted_at&fields[service_ticket_type]=id,name",
  CUSTOMER_IN_FLIGHT_REPORT:
    "fields[root]=id,name,contact_title,customer_number,contact_name,hours_elapsed,customer_status_id,deleted_at&fields[customer_status]=id,name&fields[hardwares][root]=id,device_id,purchase_date&fields[hardwares][device]=id,name",
  LIVE_CUSTOMER_DETAIL_REPORT: `fields[root]=id,name,status,client_email,contact_title,customer_email,phone_number,contact_name,created_at,customer_number&fields[subs][root]=id,subdomain,product_count,order_count,protocol,status&fields[subs][sub_package]=package_id,package_name&fields[subs][hardwares][root]=id,software_id&fields[subs][hardwares][device]=id,name&filters[subs]=[{"t":"enum","n":"site_created","v":"Yes"},{"t":"enum","n":"status","v":"Active"}]&required[subs]=true`,
  CUSTOMER_IN_FLIGHT_PRINT:
    "fields[root]=id,name,contact_title,customer_number,contact_name,hours_elapsed,customer_status_id,deleted_at&fields[customer_status]=id,name&fields[hardwares][root]=id,device_id,purchase_date&fields[hardwares][device]=id,name&pagination=false",
  CUSTOMER_IN_FLIGHT_EXPORT:
    "fields[root]=id,name,contact_title,customer_number,contact_name,hours_elapsed,customer_status_id,deleted_at&fields[customer_status]=id,name&fields[hardwares][root]=id,device_id,purchase_date&fields[hardwares][device]=id,name&export=true",
  CUSTOMER_STATUS_REPORT:
    "fields[root]=id,name,contact_title,customer_number,contact_name,hours_elapsed,customer_status_id,deleted_at&fields[customer_status]=id,name",
  ALA_CARTE_UPGRADE_REPORT:
    "fields[root]=id,source_of_purchase,feature_id&fields[sub_package][root]=id,package_name&fields[sub_package][sub][root]=all&fields[sub_package][sub][industry]=id,name&fields[module]=all",
  UPGRADE_REPORT:
    "fields[root]=id,source_of_purchase,feature_id&fields[sub_package][root]=id,package_name&fields[sub_package][sub][root]=all&fields[sub_package][sub][industry]=id,name&fields[module]=all",
  INACTIVE_ACCOUNT_REPORT:
    "fields[root]=id,subdomain,package_id,industry_id,customer_id&fields[package]=id,name&fields[customer]=id,name,customer_number,deleted_at&fields[industry]=id,name",
  HARDWARE_LIST:
    "fields[root]=id,device_id,purchase_date,price,delivery_status,shipping_method_id,terminal_id,tracking_number,sold_by&fields[device]=id,name",
  HARDWARE_DETAILS:
    "fields[root]=id,device_id,terminal_type,terminal_status,timezone,store_number,terminal_number,purchase_date,price,delivery_status,shipping_method_id,terminal_id,sold_by,serial_number,tracking_number,notes,transaction_id,user_id,api_key,hash_key,location_id,created_by,mid,virtual_terminal,user_name,password,device_id_value,customer_id,software_id,store_id,developer_id,terminal_name,is_store_address&fields[device]=id,name,device_type_code&fields[hardware_shipping_address]=address1,country_id,state_id,city,postal_code",
  DEVCIE_LIST: "fields[root]=id,name,device_type,device_type_code,status",
  CUSTOMET_NOTE_LIST:
    "fields[root]=id,assignee_id,description,subject,created_at,customer_id,created_by&fields[created_user]=id,username&fields[assignee_user]=id,username",
  CUSTOMET_NOTE_DETAIL:
    "fields[root]=id,assignee_id,description,subject,created_at,customer_id,created_by&fields[created_user]=id,username&fields[assignee_user]=id,username",
  DOCUMENT_TYPE_LIST: "fields[root]=id,name,status",
  CUSTOMER_DOCUMENT_LIST:
    "fields[root]=id,customer_id,document_name,document_type_id,file_name&fields[document_type]=id,name,status",
  CUSTOMER_LOG_LIST:
    "fields[root]=id,customer_status_id,customer_id,created_by,hours_lapsed,created_at&fields[customer_status]=id,name&fields[user]=id,username",
  INDUSTRY_WISE_ENVIRONMENT:
    "fields[root]=id,industry_id,environment_id,configuration",
  SOFTWARE_DETAIL:
    "fields[root]=id,subdomain,protocol,name,customer_id,industry_id,package_id,database_name,environment_id,status,language_id,currency_id,billing_frequency,bundle_retail_price,source_of_creation,site_created&fields[industry]=id,name&fields[customer]=id,name&fields[language]=id,name&fields[currency]=id,name&fields[package]=id,name&fields[sub_company][root]=id,sub_id,name,email,customer_id,timezone_id,address1,address2,country_id,state_id,city,postal_code,phone,website&fields[sub_company][country]=id,name&fields[sub_company][state]=id,name&fields[sub_company][timezone]=id,name&fields[sub_company][sub_store_details]=id,store_name,is_primary_store,mid,routing_number,virtual_terminal,account_number,ach_company,bank_account_type,receiving_account,store_sequance&source=crm",
  USER_TIER:
    "fields[root]=all&fields[package_user_tier]=id,user_tier_id,package_id,cost_price,price,status",
  ALL_PACKAGE_FEATURE:
    "fields[root]=id,videos,images,additional_store_price,feature_id,full_description,package_id,primary_store_price,short_description,tags,trial_period_days&fields[module]=id,module_key,name,permission_option",
  SERVICE_TICEKT_LOGS:
    "fields[root]=id,service_ticket_type_id,hours_lapsed,minutes_lapsed,created_by,created_at,updated_at&fields[service_ticket_type]=name&fields[user]=username",
  SERVICE_TICKET_COMMENT:
    "fields[root]=id,service_ticket_id,user_comment,user_id,updated_at,created_at&fields[user]=username,firstname,image",
  SERVICE_TICKET_ALERTS:
    "fields[root]=id,service_ticket_id,customer_id,alert_type_id,summary,alert_priority,primary_service_request_id,alert_status,created_by&fields[customer]=name",
  CRM_MODULES: "fields[crm_module_blocks]=all",
  COMPANY_DETAIL:
    "fields[root]=id,logo,name,date_format_id,timezone_id,address1,address2,country_id,state_id,postal_code,city,phone,state_id,email,favicon_icon,theme_json,loading_icon&fields[date_format]=id,date_format&fields[timezone]=id,name",

  MAIN_PACKAGE_LIST:
    "fields[root]=id,name,price,max_users,max_products,industry_id,status,&fields[industry]=id,name",

  PACKAGE_DETAILS:
    "fields[root]=id,name,package_type,additional_store_cost_price,additional_store_price,allowed_multiple_stores,industry_id,max_products,max_users,permission_based_on,cost_price,price,status,test_package" +
    "&fields[industry][root]=id,name,type,port,code,image" +
    "&fields[industry][industry_modules][root]=id,module_id,industry_id" +
    "&fields[industry][industry_modules][module][root]=id,name,module_key,permission_option" +
    "&fields[industry][industry_modules][module][module_blocks][root]=id,name,block_key" +
    "&fields[industry][industry_modules][module][module_blocks][feature_fields]=id,field_name,field_key,is_required" +
    "&fields[package_discount][root]=start_date,end_date,duration,discount",

  PACKAGE_DETAILS_SPLIT_PACKAGE_SECOND:
    "fields[root]=id" +
    "&fields[package_features][root]=id,additional_store_cost_price,additional_store_price,feature_id,feature_type,feature_type,images,package_id,primary_store_cost_price,primary_store_price,short_description,tags,trial_period_days,video_description,full_description,videos" +
    "&fields[package_features][package_feature_blocks][root]=id,package_feature_id,block_id" +
    "&fields[package_features][package_feature_blocks][package_feature_block_fields]=id,package_feature_block_id,field_id",

  PACKAGE_ROLES:
    "fields[root]=id,package_role_key,package_role_name,status,created_at,updated_at",

  PACKAGE_FIELDS:
    "fields[root]=id,name&fields[industry_modules][root]=module_id&fields[industry_modules][module][root]=id,name,module_key,permission_option&fields[industry_modules][module][module_blocks][root]=id,name,block_key&fields[industry_modules][module][module_blocks][feature_fields]=id,field_name,field_key,is_required&order_by[industry_modules][module][root]=name&order_by[industry_modules][module][module_blocks][root]=name&order_by[industry_modules][module][module_blocks][feature_fields][root]=field_name",

  PACKAGE_ROLE_PERMISSION:
    "fields[root]=id,package_role_id,package_id&fields[package_role]=id,package_role_name,package_role_key,status&fields[package_role_feature_permissions]=id,package_role_mapping_id,feature_id,permission",
  BILLING_HISTORY:
    "&fields[root]=all&fields[customer]=all&fields[sub_store_detail]=all",
  SHIPPING_METHOD: "",
  BILLING_REPORT:
    "fields[root]=all&fields[customer]=id,name,deleted_at&fields[sub_store_detail]=id,store_name&fields[sub][root]=id,name,subdomain,protocol,industry_id&fields[sub][industry]=id,code,name",

  EMAIL_SETTING_TYPE_LIST: "",
  EMAIL_SENT_LIST:
    "fields[root]=email_template_id,created_at,date_of_trigger,email,from_email,finish_date_time,finished,id,message,module_name,response,sub_id,subject,type,updated_at,user_id&fields[crm_email_templates]=id,name",
  SUB_USERS:
    'fields[root]=u.id,u.firstname,u.lastname,u.email,u.username&order_by[root]={ "u.firstname": "ASC"}',
  INDUSTRY_WISE_SUBS:
    "fields[root]=id,code,name&fields[subs]=id,name,subdomain,status,protocol",
  DATEFORMAT_LIST: "fields[root]=id,date_format",
  BILLING_APP_VIEW:
    "fields[root]=id,customer_id,item,price,price_per_month,type,purchased_date,billing_date,expiry_date,trial_period_days,description,sub_id&fields[customer]=id,name&fields[sub][root]=id,subdomain,protocol&fields[sub][industry]=id,name&fields[sub_store_detail]=id,store_name,mid,routing_number,account_number,is_primary_store,ach_company,bank_account_type,receiving_account",
  BILLING_BATCH_VIEW:
    "fields[root]=id,customer_id,item,price,cost_price,price_per_month,type,purchased_date,billing_date,expiry_date,trial_period_days,description,sub_id&fields[customer]=id,name,dba,street_address,phone_number,contract_start_date,contract_expire_date&fields[sub][root]=id,subdomain,protocol&fields[sub][industry]=id,name&fields[sub_store_detail]=id,store_name,mid,routing_number,account_number,is_primary_store,ach_company,bank_account_type,receiving_account",
  BLLING_APP_LIST:
    "fields[root]=id,sub_id,sub_store_id,customer_id,item,price,billing_date,billing_total&fields[customer]=id,name,customer_email&fields[sub][root]=id,subdomain,protocol,source_of_creation,industry_id&fields[sub][industry]=id,name&fields[sub_company][root]=id&fields[sub_company][sub_store_details]=id,store_name,mid,routing_number,account_number",
  SUB_STORES:
    "fields[root]=id,store_name,shipping_address1,shipping_country,shipping_state,shipping_city,shipping_postalcode,mid,virtual_terminal",
  MODULE_FILTER_LIST: "fields[root]=all&fields[filter_module]=all",
  MODULE_FIELD_LIST: "fields[root]=all&fields[filter_module_fields]=all",
  BILLING_EXPORT_PDF:
    "fields[root]=id,customer_id,item,price,cost_price,price_per_month,type,purchased_date,billing_date,expiry_date,trial_period_days,description,sub_id&fields[customer]=id,name&fields[sub][root]=id,subdomain,protocol&fields[sub][industry]=id,name&fields[sub_store_detail]=id,store_name,mid,routing_number,account_number,is_primary_store,ach_company,bank_account_type,receiving_account",
  SYSTEM_ALERT_LIST: "fields[root]=id,title,description,alert_type",
  SYSTEM_ALERT_DETAIL:
    "fields[root]=id,title,description,alert_type&fields[alert_system_detail]=id,sub_id"
};
