interface goby {
  id: string;
  // 注册按钮
  registerCommand: (name: string, fn: Function) => void;
  // 显示Error提示消息
  showErrorMessage: (message: string) => void;
  // 显示Success提示消息
  showSuccessMessage: (message: string) => void;
  // 显示Warning提示消息
  showWarningMessage: (message: string) => void;
  // 显示iframe弹窗
  showIframeDia: (url: string, title: string, width: number | string, height: number | string) => void;
  // 关闭iframe弹窗
  closeIframeDia: () => void;
  // 最小化iframe弹窗
  minimizeIframeDia: () => void;
  // 获取taskId
  getTaskId: () => number | string | null | undefined;
  // 获取资产数据
  getAsset: (taskId: string | number, callback: (data: any) => void) => void;
  /**
   * 追加扫描ip
   * @param ips 
   * @param type 0: 追加 1：覆盖
   */
  addScanIps: (ips: string, type: 0 | 1) => void;
  /**
   * 追加扫描port
   * @param ports 
   * @param type 0: 追加 1：覆盖
   */
  addScanPorts: (ports: string, type: 0 | 1) => void;
  /**
   * 获取配置参数
   */
  getConfiguration: (key: string) => void;
  /**
   * 显示配置弹窗
   */
  showConfigurationDia: () => void;
  /**
   * 设置配置项
   */
  setConfiguration: (key: string, value: string | Record<string, string> | number | null | undefined) => void;
  /**
   * 插件跳转页面的url路径
   * @param url 
   * @param background 是否前台运行
   * @returns 
   */
  showPage: (url: string, background?: boolean) => void;
  /**
   * 插件修改Badge标记 placement位置暂时只有'toolbar' command为插件入口点的执行函数名 修改左侧插件入口点的标记数据
   * @param placement 
   * @param command 
   * @param content 
   * @returns 
   */
  changeBadge: (placement: 'toolbar', command: string, content?: string) => void;
  /**
   * 插件绑定事件
   * @param type 
   * @param fn 
   * @returns 
   */
  bindEvent: (type: string, fn: Function) => void;
  /**
   * 打开外链
   * @param url 
   * @returns 
   */
  openExternal: (url: string) => void;
  /**
   * 扫描状态
   * @returns 0未启动；1扫描中；2扫描完成；3扫描停止中；4扫描中止（暂停）；5扫描异常
   */
  getScanState: () => 0 | 1 | 2 | 3 | 4 | 5;
  /**
   * 开始一个扫描任务
   * @param options 
   * @returns 
   */
  startScan: (options: {
    ip: string,
    port: string,
    vulnerabilityType: 0 | 1,
    vulnerability: any,
    order?: string,
    taskName?: string,
    isEmptyScan: boolean
  }) => Promise<any>;
  /**
   * 结束当前扫描任务
   * @returns 
   */
  stopScan: () => Promise<any>;
  /** 
   * 获取端口列表
  */
  getPortList: () => Promise<any>;
  /**
   * 获取漏洞列表
   */
  getVulnerabilityList: () => Promise<any>;
  /**
   * 查询POC搜索结果
   * @param callback 
   * @param vultype 
   * @param vulcategory 
   * @param vullevel 
   * @param vulname 
   * @param reloadPocs 
   * @param page 
   * @param size 
   * @returns 
   */
  getPocSearch: (callback: Function, vultype: string, vulcategory: any, vullevel: string, vulname: string, reloadPocs: boolean, page: number, size: number) => void;
  /**
   * 获取排序方式列表 
   */
  getOrderList: () => Promise<any>;
  /**
   * 闪烁iframe
   * @param isFlash 
   * @returns 
   */
  flashFrame:(isFlash: boolean) => void;
  /**
   * 当前窗口是否获取焦点
   * @returns boolean
   */
  isFocused: () => boolean;
  /**
   * 获取当前语言
   * @returns 
   */
  getLang: () => string;
  /**
   * 获取服务信息
   * @returns 
   */
  getServer: () => any;
  /**
   * 添家服务器
   */
  addServer: (options: {
    /**
     * 0 新增分组 1 新增服务器
     */
    type: 0 | 1,
    name: string,
    host: string,
    port: string,
    username: string,
    password: string,
    parentId: string,
  }) => void;
  /**
   * 删除服务器
   * @param options 
   * @returns 
   */
  delServer: (options: {ids: string[]}) => void;
  /**
   * 设置服务器
   * @param server 
   * @returns 
   */
  setServer: (server: {
    id: string;
    host: string;
    port: string;
    username?: string;
    password?: string;
  }) => void;
  /**
   * 代理请求
   * @param callback 
   * @returns 
   */
  proxyRequest: (callback: Function) => {
    statusCode: 500 | 200;
    message: string;
  }
  /**
   * 关闭代理请求
   * @returns 
   */
  closeProxyRequest: () => {
    statusCode: 200,
    message: string;
  }
  /**
   * 插入数据
   * @returns 
   */
  insertData: (taskId: string,location: string,showType: boolean,dataType: string,data: any,callback: Function) => void;
  /**
   * 获取当前的exp信息
   */
  getCurrentExpInfo: (callback: Function) => void;
  clearInit: (options: { commit: Function, state: any}) => void;
  initToolbar: (options: { commit: Function, state: any}) => void;
  inithtmlpage: (options: { commit: Function, state: any}) => void;
  initMitm:  (options: { commit: Function, state: any}) => void;
}

interface Window {
  goby: goby;
}