let date = new Date();
let year = date.getFullYear();

const APPCONFIG = {
  brand: "Food Industry",
  title: "Child Service Support",
  logo: "",
  url: "",
  year: year,
  AutoCloseMobileNav: true, // Boolean: true, false. Automatically close sidenav on route change (Mobile only)
  customizer: true, // Boolean: true, false. Customizer will be removed completely when set to false
  showCustomizer: false, // Boolean: true, false. Customizer will be opened (visible) first time app was loaded if set to true
  color: {
    primary: "#1890ff",
    success: "#66BB6A",
    info: "#01BCD4",
    infoAlt: "#948aec",
    warning: "#ffc53d",
    danger: "#ff4d4f",
    text: "#3D4051",
    gray: "#EDF0F1"
  },
  settings: {
    layout: "1", // String: 1, 2, 3, 4 and add your own
    boxedLayout: false, // Boolean: true, false
    fixedSidenav: false, // Boolean: true, false
    fixedHeader: true, // Boolean: true, false
    collapsedNav: false, // Boolean: true, false
    offCanvasNav: false, // Boolean: true, false
    sidenavWidth: 240, // Number
    offCanvasMobileNav: true, // Boolean: true, false. Mobile only, by default, it's true (off canvas)
    colorOption: "22", // String: 11,12,13,14,15,16; 21,22,23,24,25,26; 31,32,33,34,35,36
    theme: "light", // (WIP) String: light, gray, dark
    width: window.innerWidth,
    height: window.innerHeight,
    mode:
      window.innerWidth < 768
        ? "Mobile"
        : window.innerWidth < 1024
          ? "Tablet"
          : "Desktop",
    subHeader: { breadcrumb: [], module: null, eventName: null }
  },
  paginationConfig: {
    pageSize: 100,
    pageSizeOptions: ["10", "25", "50", "100", "200"],
    position: "bottom" //Show paging on Table Top and Bottom
  },
  DECIMAL_DEFAULT_VALUE: "0.00",
  DECIMAL_POINTS: 2,
  MONETORY_FORMAT: "0,0,0.00",
  PERCENT_FORMAT: "0.00",
  MINUTES_UNITL_AUTO_LOGOUT: 10, // in mins
  CHECK_INTERVAL: 500, // in ms,
  STORE_KEY: "lastAction",
  default_image: "/assets/images-demo/no-image.png",
  default_product_image: "/assets/images-demo/no_image_600x600.png",
  default_uncategorised_image:
    "/assets/images-demo/uncategorised_image_600x600.png",
  default_featured_image: "/assets/images-demo/featured.png",
  //default_product_image: "/assets/images-demo/noimage1.jpg",
  valid_images: ["image/jpeg", "image/jpg", "image/png"],
  valid_favicon: ["image/x-icon"],
  max_file_upload_size: 2,
  module_titles: {
    default: `${process.env.REACT_APP_TITLE}`
  },
  valid_import_files: [".csv", ".xls", ".xlsx"],
  valid_import_files_extention: ["csv", "zip"],
  _valid_import_files: [
    "application/csv",
    "application/x-csv",
    "text/csv",
    "text/comma-separated-values",
    "text/x-comma-separated-values",
    "text/tab-separated-values",
    "text/plain",
    "application/vnd.ms-excel",
    "text/x-csv",
    "text/plain",
    "text/x-csv"
  ],
  MAX_CHARACTER_LENGTH: {
    NAME_FIELD: 100,
    PRICE_FIELD: 9,
    QTY_FIELD: 5,
    BARCODE_FIELD: 14,
    DESCRIPTION_FIELD: 300
  }
  // AWS_S3_BUCKET: "AWS_S3_BUCKET",
  // DIRECTORY: "product-images",
  // ACL: "public-read",
  // PUBLIC_URL: "https://XXXX.s3.amazonaws.com"
};

export default APPCONFIG;
