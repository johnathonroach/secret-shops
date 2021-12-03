import Appwrite from "node-appwrite";

const appEndpoint = "http://192.168.12.20/v1";
const appProject = "5f5132208d851";
const appKey = "3dae41cc1924c7440c741b46e26a2865dad9180a17ee57037d4beb30f38f2fb61197fb46e6a2534448fc4ff117c291e2235c9a2145a063f5277473d34833f603d4919be27cad75f5a8b784e8c22e543b9f3bc209cf82f2837d1826e046260bbb8392e34af74ab23fe7ea404449643a787a64a37f51373fa8e30ac1c373a8cab5";

/*appwrite
    .setEndpoint('http://192.168.12.20/v1')
    .setProject('5f5132208d851');*/



const sdk = new Appwrite();

sdk.setEndpoint(appEndpoint).setProject(appProject).setKey(appKey);

export default sdk;






let client = new sdk.Client();
let users = new sdk.Users(client);

client
    .setEndpoint('http://192.168.12.20/v1')
    .setProject('5f5132208d851')
    .setKey('3dae41cc1924c7440c741b46e26a2865dad9180a17ee57037d4beb30f38f2fb61197fb46e6a2534448fc4ff117c291e2235c9a2145a063f5277473d34833f603d4919be27cad75f5a8b784e8c22e543b9f3bc209cf82f2837d1826e046260bbb8392e34af74ab23fe7ea404449643a787a64a37f51373fa8e30ac1c373a8cab5');