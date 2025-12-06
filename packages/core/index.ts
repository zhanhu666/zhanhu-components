import { makeInstaller } from "@zhanhu-components/utils";
import components from "./components";
import '@zhanhu-components/theme/index.css';

const installer = makeInstaller(components);

export * from '@zhanhu-components/components';

export default installer

// 也就是使用这个包的人可以以plungin的形式使用，使用app.use挂在到vue实例上