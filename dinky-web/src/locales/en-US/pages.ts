/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default {
  //-------------------------------- common --------------------------------
  'layouts.userLayout.title': 'Dinky Real-time Platform ',
  'login.error': 'Login failed, please try again! Reason：{msg}',
  'login.result': '{msg}\t\t{time}',
  'login.notbindtenant':
    'You have not bound a tenant, please contact the administrator',
  'login.username.placeholder': 'Username',
  'login.username.required': 'Please input your username!',
  'login.chooseTenant': 'Please Choose Tenant',
  'login.chooseTenantFailed': 'Tenant selection failed, please check. . . ',
  'login.chooseTenantSuccess':
    '{msg}, Use [ {tenantCode} ] to enter the system, loading. . .',
  'login.password.placeholder': 'Password',
  'login.password.required': 'Please input your password!',
  'login.rememberMe': 'Remember me',
  'login.ldapLogin': 'LDAP Login',
  'about.Community':
    'Welcome to join the Dinky Official Community, Build a win-win situation',
  'about.QQcode': 'QQ Official Community Group',
  'about.wechatCode': 'Wechat Official Account',
  'about.dingTalkCode': 'DingTalk Official Community Group',
  'about.wechatApply':
    'WeChat user community group: recommendation, add wechat wenmo_ai to invite into the group (application notes Dinky + company name + position, no approval will not be written)`',
  'about.precautions': 'Precautions',
  'about.usingHelp': 'Using Help',
  'about.communityRules': 'Community Rules',
  'about.communityRules.1':
    'It is forbidden to publish or discuss content that is irrelevant or inappropriate to the subject of this group, once found it will be kicked immediately. ',
  'about.communityRules.2':
    'For bug feedback and feature improvements or suggestions, please use issue, please read the issue document requirements. ',
  'about.communityRules.3':
    'Please read the Readme, official account articles, official website documents, and Bilibili videos carefully before deployment and use. ',
  'about.communityRules.4':
    'Please be polite and explain [version, execution mode, operation description, screenshot] when asking questions in the group. ',
  'about.communityRules.5':
    ' Register who is using Dinky, and can enter the enterprise user group to provide technical support. ',

  //-------------------------------- Home --------------------------------
  'home.job.metrics': 'Job Monitoring',
  'home.job.running.status': 'Current Job Running Status',
  'home.server.load': 'Server Load',
  'home.job.running': 'Currently Running',
  'home.job.finished': 'Completed Today',
  'home.job.recovery': 'Recovery Today',
  'home.job.online': 'Online Today',
  'home.job.failed': 'Failed Today',
  'home.job.recovery.rate': 'Recovery Rate',
  'home.job.running.dayonday': 'Day on Day Ratio',
  'home.job.instance': 'Task Instance',
  'home.server.load.excellent': 'Excellent',
  'home.server.load.good': 'Good',
  'home.server.load.bad': 'Bad',
  'home.job.failed.unhandle': 'Currently Unhandled Failure',
  'home.job.failed.handle': 'Handled',
  'home.job.failed.rank': 'Rank',
  'home.job.failed.name': 'Job Name',
  'home.job.failed.time': 'Abnormal Time',
  'home.develop': 'Data Develop',
  'home.job.batch': 'Batch Job',
  'home.job.stream': 'Streaming Job',
  'home.job.total': 'Number of Jobs',
  'home.job.onlineRate': 'Number of Jobs Online Rate',
  'home.job.type': 'Job Type',
  'home.job.rate': 'Proportion of Jobs',
  'home.develop.re.ci': 'Flink Cluster Instance',
  'home.develop.re.cc': 'Cluster Configuration',
  'home.develop.re.ds': 'Data Source',
  'home.develop.re.gv': 'Global Variables',
  'home.develop.re.ai': 'Alarm Instance',
  'home.develop.re.ag': 'Alarm Group',
  'home.develop.re.git': 'Git Project',

  //-------------------------------- devops --------------------------------
  // devops

  'devops.joblist.joblist': 'JobList',
  'devops.joblist.history': 'History',
  'devops.joblist.detail': 'Job Detail',

  'devops.jobinfo.savepoint.trigger': 'SavePoint Triggers',
  'devops.jobinfo.savepoint.stop': 'SavePoint Pause',
  'devops.jobinfo.savepoint.cancel': 'SavePoint Stop',
  'devops.jobinfo.savepoint.canceljob': 'Normal Stop',
  'devops.jobinfo.localenv': 'Local Environment',
  'devops.jobinfo.offline': 'Offline',
  'devops.jobinfo.smart_stop': 'Smart Stop',
  'devops.jobinfo.reonline': 'Re-Online',
  'devops.jobinfo.reonlineJob': 'Re-online Job',
  'devops.jobinfo.reonlineJobConfirm':
    'Are you sure you want to re-launch this job? ',
  'devops.jobinfo.reonline.success': 'Re-online successfully',
  'devops.jobinfo.reonline.failed': 'Failed to re-online',
  'devops.jobinfo.restart': 'Restart',
  'devops.jobinfo.stopJob': 'Stop job',
  'devops.jobinfo.stopJobConfirm':
    'Are you sure to just stop this job without SavePoint operation? ',
  'devops.jobinfo.canceljob.success': 'Normal stop succeeded',
  'devops.jobinfo.canceljob.failed': 'Normal stop failed',
  'devops.jobinfo.job.key': '{key} Job',
  'devops.jobinfo.job.key.success': '{key} Success',
  'devops.jobinfo.job.keyConfirm': '{key} this Job？',

  'devops.jobinfo.config.JobInfo': 'Job Info',
  'devops.jobinfo.config.JobLogs': 'Job Logs',
  'devops.jobinfo.config.JobVersion': 'History Info',
  'devops.jobinfo.config.JobCheckpoints': 'Checkpoints Info',
  'devops.jobinfo.config.JobMonitor': 'Monitor',
  'devops.jobinfo.config.JobLineage': 'Lineage',
  'devops.jobinfo.config.JobAlert': 'Alert',
  'devops.jobinfo.config.OperatorGraph': 'Operator Graph',
  'devops.jobinfo.config.JobBaseInfo': 'Job Base Info',
  'devops.jobinfo.config.UserCustomConf': 'Custom Config',
  'devops.jobinfo.config.taskId': 'Dinky Job ID',
  'devops.jobinfo.config.JobId': 'Flink Job ID',
  'devops.jobinfo.config.submitType': 'Submit Mode',
  'devops.jobinfo.config.execmode': 'Exec Mode',
  'devops.jobinfo.config.ClusterInstanceName': 'Flink Instance',
  'devops.jobinfo.config.ClusterConfigName': 'Cluster Config',
  'devops.jobinfo.config.useSqlFragment': 'Sql Fragment',
  'devops.jobinfo.config.JobType': 'Job Type',
  'devops.jobinfo.config.startFromSavePoint': 'Start from SavePoint',
  'devops.jobinfo.config.savePointPath': 'savePoint path',
  'devops.jobinfo.config.RestartStrategy': 'RestartStrategy',
  'devops.jobinfo.config.JobParallelism': 'JobParallelism',

  'devops.jobinfo.version.versionList': 'Job Version',
  'devops.jobinfo.version.latestVersion': 'Current Version',
  'devops.jobinfo.version.delete': 'Delete Version',
  'devops.jobinfo.version.delete.sure':
    'Are you sure you want to remove this version？V{version}',

  'devops.jobinfo.ck.id': 'ID',
  'devops.jobinfo.ck.taskid': 'Task ID',
  'devops.jobinfo.ck.status': 'Status',
  'devops.jobinfo.ck.name': 'Name',
  'devops.jobinfo.ck.duration': 'Duration',
  'devops.jobinfo.ck.checkpoint_type': 'Type',
  'devops.jobinfo.ck.external_path': 'Storage Location',
  'devops.jobinfo.ck.latest_ack_timestamp': 'Last Response Time',
  'devops.jobinfo.ck.state_size': 'State Size',
  'devops.jobinfo.ck.trigger_timestamp': 'Trigger Time',
  'devops.jobinfo.ck.recovery': 'Recovering from Checkpoint! ',
  'devops.jobinfo.ck.recoveryConfirm':
    'Are you sure to Recover from Checkpoint [{path}]?',
  'devops.jobinfo.ck.recovery.success': 'Recovery job succeeded',
  'devops.jobinfo.ck.recovery.failed': 'Recovery job failed',
  'devops.jobinfo.ck.recovery.recoveryTo': 'Recovery Here',

  'devops.baseinfo.taskid': 'Task Id',
  'devops.baseinfo.name': 'Job Name',
  'devops.baseinfo.status': 'Status',
  'devops.baseinfo.readbytes': 'Receive Bytes',
  'devops.baseinfo.readrecords': 'Receive Records',
  'devops.baseinfo.writebytes': 'Send Bytes',
  'devops.baseinfo.writerecords': 'Send Records',
  'devops.baseinfo.parallelism': 'Parallelism',
  'devops.baseinfo.tasks': 'Operator',
  'devops.baseinfo.restart_number': 'Number of Restarts',

  //-------------------------------- auth center --------------------------------
  // user
  'user.manager': 'User Management',
  'user.username': 'User Name',
  'user.jobnumber': 'Job Number',
  'user.phone': 'Phone Number',
  'user.status': 'Is Deleted',
  'user.type': 'User Type',
  'user.nickname': 'Nick Name',
  'user.superAdminFlag': 'Super Admin',
  'user.tenantAdminFlag': 'Tenant Admin',
  'user.create': 'Create User',
  'user.update': 'Modify User',
  'user.assignRole': 'Assign Role',
  'user.delete': 'Delete User',
  'user.deleteConfirm': 'Are you sure delete this User？',
  'user.recovery': 'Are you sure to Recover this User?',
  'user.reset': 'Are you sure to Reset this User Password?',
  'user.usernamePlaceholder': 'Please enter user name',
  'user.jobnumberPlaceholder': 'Please enter job number',
  'user.nicknamePlaceholder': 'Please enter nickname',
  'user.phonePlaceholder': 'Please enter phone number',
  'user.oldpwd': 'Old Password',
  'user.newpwd': 'New Password',
  'user.repeatpwd': 'Repeat New Password',
  'user.oldpwdPlaceholder': 'Please enter old password',
  'user.newpwdPlaceholder': 'Please enter new password',
  'user.repeatpwdPlaceholder': 'Please enter repeat new password',
  'user.oldNewPwdNoMatch': 'The new passwords do not match',
  'user.login.status.code': 'Code',
  'user.login.status.msg': 'Message',
  'user.login.accesstime': 'Login Time',
  'user.login.ip': 'Login IP',
  'user.op.time': 'Operation Time',
  'user.op.type': 'Type',
  'user.op.name': 'User',
  'user.op.module': 'Module',
  'user.op.method': 'Method',
  'user.request.type': 'Type',
  'user.op.params': 'Params',
  'user.op.result': 'Result',
  'user.op.url': 'URL',
  'user.op.ip': 'IP',
  'user.op.status': 'Status',
  'user.op.error.msg': 'Error Message',

  // --  personal info
  'user.info': 'Personal Info',
  'user.tenant': 'Tenant',
  'user.role': 'Role',
  'user.op': 'Operation',
  'user.loginlog': 'Login Log',
  'user.current.tenant': 'Current Tenant',

  // tenant
  'tenant.TenantManager': 'Tenant Management',
  'tenant.TenantCode': 'Tenant Code',
  'tenant.AssignUser': 'Assign Users',
  'tenant.assignUser.pleaseHolder': 'Please enter username/nickname Search',
  'tenant.create': 'Create Tenant',
  'tenant.update': 'Update Tenant',
  'tenant.EnterTenantCode': 'Please enter Tenant Code!',
  'tenant.EnterTenantNote': 'Please enter Tenant Note!',
  'tenant.delete': 'Delete Tenant',
  'tenant.deleteConfirm': 'Are you sure you want to delete this Tenant？',
  'tenant.set.admin': 'Set Tenant Admin',
  'tenant.cancel.admin': 'Cancel Tenant Admin',
  'tenant.user.list': 'User List',

  // role
  'role.roleManagement': 'Role Management',
  'role.roleCode': 'Role Code',
  'role.roleName': 'Role Name',
  'role.namespaceIds': 'Namespace',
  'role.belongTenant': 'Belong Tenant',
  'role.create': 'Create Role',
  'role.update': 'Update Role',
  'role.EnterRoleCode': 'Please enter Role Code!',
  'role.EnterRoleName': 'Please enter Role Name!',
  'role.selectNameSpace': 'Please select NameSpace!',
  'role.EnterNote': 'Please enter Role Note!',
  'role.delete': 'Delete Role',
  'role.deleteConfirm': 'Are you sure you want to delete this Role？',
  'role.assignMenu': 'Role: [{roleName}] Assign Permissions',
  'role.assign': 'Assign Permissions',
  'role.user.list': 'Role of User List',

  // menu
  'menu.management': 'Menu Management',
  'menu.name': 'Menu name',
  'menu.namePlaceholder': 'Please enter the Menu name',
  'menu.parentId': 'Parent Menu',
  'menu.parentIdPlaceholder': 'Please select the parent menu',
  'menu.path': 'Path',
  'menu.pathPlaceholder': 'Please enter the path',
  'menu.icon': 'Icon',
  'menu.iconPlaceholder': 'Please enter an icon',
  'menu.component': 'Component',
  'menu.componentPlaceholder': 'Please enter the component',
  'menu.orderNum': 'Sort',
  'menu.orderNumPlaceholder': 'Please enter the sort value',
  'menu.type': 'Menu Type',
  'menu.typePlaceholder': 'Please select the menu type',
  'menu.perms': 'Permission ID',
  'menu.permsPlaceholder': 'Please enter the permission ID',
  'menu.icon.reference': 'Icon reference',

  'menu.type.dir': 'Directory',
  'menu.type.menu': 'Menu',
  'menu.type.button': 'Button',
  'menu.edit': 'Edit Menu',
  'menu.tips.1':
    'Modify Menu: click on the node you want to modify in the tree view on the left, and render the modification form here',
  'menu.tips.2':
    'Add Root Menu: click the button in the upper right corner of the tree view to add',
  'menu.tips.3':
    'Add/Delete SubMenu: Right-click on the tree view to add/delete',

  // rowPermissions
  'rowPermissions.management': 'Row Permissions Management',
  'rowPermissions.tableName': 'Table name',
  'rowPermissions.tableNamePlaceholder': 'Please enter table name',
  'rowPermissions.expression': 'Expression',
  'rowPermissions.expressionPlaceholder': 'Please enter expression',
  'rowPermissions.deleteConfirm':
    'Are you sure you want to delete this row permissions',
  'rowPermissions.roleName': 'Role Name',
  'rowPermissions.roleNamePlaceholder': 'Please select an role',
  'rowPermissions.create': 'Create Row Permissions',
  'rowPermissions.update': 'Update Row Permissions',

  //-------------------------------- register center --------------------------------
  'rc.ci.management': 'Cluster Instance Management',
  'rc.ci.name': 'Name',
  'rc.ci.alias': 'Alias',
  'rc.ci.type': 'Type',
  'rc.ci.version': 'Version',
  'rc.ci.jma': 'JobManger Address',
  'rc.ci.ar': 'Auto Registration',
  'rc.ci.status': 'Status',
  'rc.ci.jmha': 'JobManger HA Address',
  'rc.ci.create': 'Create Cluster Instance',
  'rc.ci.modify': 'Modify cluster Instance',
  'rc.ci.deleteConfirm': 'Are you sure to delete this Flink Cluster instance? ',
  'rc.ci.recycle': 'Recycle Flink Cluster Instances',
  'rc.ci.heartbeat': 'Heartbeat Detection',
  'rc.ci.recycleConfirm':
    'Are you sure to recycle all automatically created and expired Flink instances? ',
  'rc.ci.jmha.validate.slash':
    'Does not comply with the rules! Cannot contain /',
  'rc.ci.jmha.validate.port':
    'Does not meet the rules! Port number range [0-65535]',
  'rc.ci.jmha.tips':
    'Add the RestApi address of the JobManager of the Flink cluster. In HA mode, the addresses are separated by commas, for example: 192.168.123.101:8081,192.168.123.102:8081,192.168.123.103:8081',
  'rc.ci.jmhaPlaceholder': 'Please enter the JobManager HA address!',
  'rc.ci.typePlaceholder': 'Please select a cluster type!',
  'rc.ci.namePlaceholder': 'Please enter a name!',
  'rc.ci.aliasPlaceholder': 'Please enter an alias!',

  // configuration
  'rc.cc.management': 'Cluster Config Management',
  'rc.cc.name': 'Cluster Config Name',
  'rc.cc.namePlaceholder': 'Please enter the cluster configuration name!',
  'rc.cc.type': 'Type',
  'rc.cc.typePlaceholder': 'Please select the cluster configuration type!',
  'rc.cc.create': 'Create Cluster Config',
  'rc.cc.modify': 'Modify Cluster Config',
  'rc.cc.delete': 'Delete Cluster Config',
  'rc.cc.deleteConfirm': 'Are you sure to delete this cluster configuration? ',
  'rc.cc.start': 'Start Session Cluster',
  'rc.cc.baseConfig': 'Basic Config',
  'rc.cc.hadoopConfig': 'Hadoop Config',
  'rc.cc.hadoop.defineConfig': 'Hadoop Custom Config (high priority)',
  'rc.cc.hadoopConfigPath': 'Hadoop Config file path',
  'rc.cc.hadoopConfigPathPlaceholder':
    'Please enter the hadoop configuration file path, such as /etc/hadoop/conf! ',
  'rc.cc.hadoopConfigPathHelp':
    'Specify the configuration file path (without / at the end), the following files need to be included: core-site.xml, hdfs-site.xml, yarn-site.xml! ',
  'rc.cc.libPath': 'Flink Lib Path',
  'rc.cc.libPathPlaceholder':
    'Please enter the hdfs path of lib! Values such as hdfs:///flink/lib',
  'rc.cc.libPathHelp':
    'Specify the hdfs path of lib (without / at the end), which needs to include the dependencies of Flink runtime',
  'rc.cc.flinkConfig': 'Flink Config',
  'rc.cc.flink.defineConfig': 'Flink Custom Config (high priority)',
  'rc.cc.flinkConfigPath': 'Flink Config File Path',
  'rc.cc.flinkConfigPathPlaceholder':
    'Please enter the flink-conf.yaml path! Values such as /opt/module/flink/conf ',
  'rc.cc.flinkConfigPathHelp':
    'Please enter flink-conf.yaml path! Values such as /opt/module/flink/conf ',
  'rc.cc.addConfig': 'Add Config item',
  'rc.cc.deleteConfig': 'Delete configuration item',
  'rc.cc.key': 'Config Key',
  'rc.cc.value': 'Config Value',
  'rc.cc.submitSqlConfig':
    'Submit FlinkSQL Config items (required in Application mode)',
  'rc.cc.sqlSubmitJarPath': 'Jar File Path',
  'rc.cc.sqlSubmitJarPathHelp':
    'Please enter the Jar file path! eg: hdfs:///dlink/jar/dlink-app.jar',
  'rc.cc.defineConfig': 'Flink Default Config (high priority)',
  'rc.cc.jmMem': 'JobManager Memory',
  'rc.cc.jmMemHelp':
    'Please enter the JobManager memory size! This parameter configuration item is: jobmanager.memory.process.size eg: 1024MB',
  'rc.cc.tmMem': 'TaskManager Memory',
  'rc.cc.tmMemHelp':
    'Please enter the TaskManager memory size! This parameter configuration item is: taskmanager.memory.process.size eg: 1024MB',
  'rc.cc.tmHeap': 'TaskManager Heap Memory',
  'rc.cc.tmHeapHelp':
    'Please enter the TaskManager heap memory size! This parameter configuration item is: taskmanager.memory.framework.heap.size eg: 1024MB',
  'rc.cc.tsNum': 'Number of Slots',
  'rc.cc.tsNumHelp': 'Please enter the number of TaskSlot! eg: 1',
  'rc.cc.spDir': 'SavePoint Path',
  'rc.cc.spDirHelp':
    'Please enter the savepoint path! This parameter configuration item is: tate.savepoints.dir eg: hdfs:///dinky/sp',
  'rc.cc.ckpDir': 'CheckPoint Path',
  'rc.cc.ckpDirHelp':
    'Please enter the checkpoint path! This parameter configuration item is: state.checkpoints.dir eg: hdfs:///dinky/ckp',
  'rc.cc.dockerConfig': 'Docker Config',
  'rc.cc.docker.dinky.addr': 'Dinky Remote Address',
  'rc.cc.docker.dinky.addrHelp': 'Dinky remote address! eg: 127.0.0.1:8888',
  'rc.cc.docker.instance': 'Docker Instance',
  'rc.cc.docker.instanceHelp':
    'Docker instance! eg: local: unix:///var/run/docker.sock or remote: tcp://remoteIp:2375',
  'rc.cc.docker.url': 'DockerHub Container Address',
  'rc.cc.docker.urlHelp':
    'DockerHub container address! eg: (Aliyun, docker.io, harbor) registry.cn-hangzhou.aliyuncs.com/dlink/dlink:1.0.0',
  'rc.cc.docker.username': 'DockerHub Username',
  'rc.cc.docker.usernameHelp': 'DockerHub username! eg: dinky',
  'rc.cc.docker.password': 'DockerHub Password',
  'rc.cc.docker.passwordHelp': 'DockerHub password! eg: dinky',
  'rc.cc.docker.tag': 'Docker Tag Version',
  'rc.cc.docker.tagHelp': 'Docker Tag version! eg: 1.0.0',
  'rc.cc.docker.file': 'Docker Image File',
  'rc.cc.docker.fileHelp':
    'Docker image file! eg: /opt/module/dinky/docker/Dockerfile',
  'rc.cc.k8sConfig': 'Kubernetes Config',
  'rc.cc.k8s.preConfig': 'Kubernetes preset configuration',
  'rc.cc.k8s.defineConfig': 'Kubernetes default configuration',
  'rc.cc.k8s.namespace': 'Kubernetes Namespace',
  'rc.cc.k8s.namespaceHelp': 'Kubernetes namespace! eg: default',
  'rc.cc.k8s.image': 'Flink Image Address',
  'rc.cc.k8s.imageHelp':
    'Flink image address! eg: registry.cn-hangzhou.aliyuncs.com/flink/flink:1.17.0',
  'rc.cc.k8s.exposed': 'Exposed Port Type',
  'rc.cc.k8s.exposedHelp': 'Exposed port type! eg: NodePort',
  'rc.cc.k8s.jmCpu': 'JobManager CPU Config',
  'rc.cc.k8s.jmCpuHelp': 'JobManager CPU configuration! eg: 10',
  'rc.cc.k8s.tmCpu': 'TaskManager CPU Config',
  'rc.cc.k8s.tmCpuHelp': 'TaskManager CPU configuration! eg: 10',
  'rc.cc.k8s.configFile': 'Kube File Path',
  'rc.cc.k8s.configFileHelp':
    'Default ~/.kube/config, fill in the kube file path, which can be used as a remote connection! eg: /opt/module/kube/config',
  'rc.cc.k8s.account': 'K8s Submit Account',
  'rc.cc.k8s.accountHelp':
    'The account submitted by K8s, default default! eg: default',
  'rc.cc.k8s.podTemplate': 'K8s Pod Template',
  'rc.cc.k8s.podTemplateHelp':
    'K8s Pod template! Fill in your own pod template!',
  'rc.cc.k8sOp.version': 'Flink Version',
  'rc.cc.k8sOp.versionHelp': 'Please select the Flink version!',
  'rc.cc.k8sOp.unSupportBatch': ' (UnSupport Batch)',

  // datasource
  'rc.ds.management': 'DataSource Management',
  'rc.ds.name': 'Name',
  'rc.ds.groupName': 'Group Type',
  'rc.ds.type': 'DataSource Type',
  'rc.ds.url': 'Database URL',
  'rc.ds.username': 'Username',
  'rc.ds.password': 'Password',
  'rc.ds.flinkConfig': 'Flink Connection Config',
  'rc.ds.flinkTemplate': 'Flink Connection Template',
  'rc.ds.create': 'Create DataSource',
  'rc.ds.modify': 'Modify DataSource',
  'rc.ds.delete': 'Delete DataSource',
  'rc.ds.deleteConfirm': 'Are you sure to delete this DataSource? ',
  'rc.ds.namePlaceholder': 'Please enter a name!',
  'rc.ds.groupNamePlaceholder': 'Please select a group type!',
  'rc.ds.typePlaceholder':
    'Please select the DataSource type! Enter keywords to search',
  'rc.ds.urlPlaceholder': 'Please enter a properly formatted url link!',
  'rc.ds.usernamePlaceholder': 'Please enter username!',
  'rc.ds.passwordPlaceholder': 'Please enter password!',
  'rc.ds.flinkConfigPlaceholder':
    'Please specify the default configuration of Flink With!',
  'rc.ds.flinkConfigTooltip':
    'Avoid disclosure of private information, and reuse the connection configuration as a global variable. In FlinkSQL, you can use `variable reference method` to load the connection configuration. Explanation: The reference name refers to the unique identifier, which is the `name` in this form. Note that you need to enable global variables (the original fragment mechanism)',
  'rc.ds.flinkTemplatePlaceholder':
    'Please specify the generation template of Flink With!',
  'rc.ds.flinkTemplateTooltip':
    'Flink connection template is an extended function for generating FlinkSQL DDL. Among them, the schemaName in `variable reference method` refers to dynamically obtaining the database, and the tableName in `variable reference method` refers to dynamically obtaining the table name',
  'rc.ds.source': 'Source',
  'rc.ds.warehouse': 'Data Warehouse',
  'rc.ds.application': 'Application',
  'rc.ds.backup': 'Backup',
  'rc.ds.other': 'Other',
  'rc.ds.enter':
    'Click the icon picture in the list to enter the details page of the DataSource! Support viewing the database & table information of the DataSource, and timely query',
  'rc.ds.enter.error':
    'The DataSource status is abnormal and cannot be entered, only after the heartbeat is normal!',

  // datasource of schema info page
  // tags
  'rc.ds.detail.tag.desc': 'Description',
  'rc.ds.detail.tag.query': 'Query',
  'rc.ds.detail.tag.gensql': 'Generate SQL',
  'rc.ds.detail.tag.console': 'Console',

  // tips
  'rc.ds.detail.tips':
    'Click on the table on the left to get relevant information',

  // columns info
  'rc.ds.no': 'No.',
  'rc.ds.columnName': 'Field Name',
  'rc.ds.columnType': 'Type',
  'rc.ds.comment': 'Comment',
  'rc.ds.primarykey': 'Primary Key',
  'rc.ds.autoIncrement': 'Autoincrement',
  'rc.ds.isNull': 'Not Null',
  'rc.ds.null': 'Nullable',
  'rc.ds.default': 'Default Value',
  'rc.ds.length': 'Length',
  'rc.ds.precision': 'Precision',
  'rc.ds.decimalDigits': 'Decimal Range',
  'rc.ds.character': 'Character Set',
  'rc.ds.collationRule': 'Collation Rule',
  'rc.ds.javaType': 'Java Type',

  // console sql
  'rc.ds.console.exec': 'Execute',
  'rc.ds.console.running': 'Running...',

  // alert instance
  'rc.ai.management': 'Alert Instance Management',
  'rc.ai.name': 'Name',
  'rc.ai.namePleaseHolder': 'please enter Alert instance name',
  'rc.ai.type': 'Type',
  'rc.ai.delete': 'Delete the Alert Instance ',
  'rc.ai.create': 'Create Alert Instance',
  'rc.ai.modify': 'Modify Alert Instance',
  'rc.ai.deleteConfirm': 'Are you sure to delete the selected Alert Instance? ',
  'rc.ai.dingTalk': 'DingTalk',
  'rc.ai.email': 'Email',
  'rc.ai.feishu': 'FeiShu',
  'rc.ai.wechat': 'WeChat',
  'rc.ai.sms': 'Sms',
  'rc.ai.webhookPleaseHolder': 'please enter webhook url',
  'rc.ai.keywordPleaseHolder': 'please enter keyword',
  'rc.ai.secretPleaseHolder': 'please enter secret',
  'rc.ai.proxyPleaseHolder': 'enter proxy',
  'rc.ai.portPleaseHolder': 'enter port',
  'rc.ai.userPleaseHolder': 'enter user',
  'rc.ai.atUsersPleaseHolder':
    'Please enter the user ID (user ID of FeiShu background is required), separated by multiple commas!',
  'rc.ai.passwordPleaseHolder': 'please enter password',
  'rc.ai.atMobilesPleaseHolder':
    'Please enter the members that need @, multiple use, separated by numbers',
  'rc.ai.msgtypePleaseHolder': 'please choose message Send Type`',
  'rc.ai.corpIdPleaseHolder': 'Please enter CorpId',
  'rc.ai.wechatAtUsersPleaseHolder':
    'Please enter the @user ID (enterprise and micro user name spelled out), separated by multiple commas!',
  'rc.ai.sendTypePleaseHolder': 'Please choose Send Type',
  'rc.ai.agentIdPleaseHolder': 'Please enter AgentId',
  'rc.ai.receiversPleaseHolder':
    'Please enter recipient email address! Separate multiple commas',
  'rc.ai.receiverCcsPleaseHolder':
    'Please enter the receiverCcs email address! Separate multiple commas!',
  'rc.ai.serverHostPleaseHolder': 'Mail server host',
  'rc.ai.serverPortPleaseHolder': 'Please enter the mail server port',
  'rc.ai.senderPleaseHolder': 'Please enter the mail server sender Nickname',
  'rc.ai.emailUserPleaseHolder': 'Please enter your email username',
  'rc.ai.emailPasswordPleaseHolder':
    'Please enter the email password! Note: the password is the authorization code',
  'rc.ai.smtpSslTrustPleaseHolder': 'Please enter a trusted domain',
  'rc.ai.xls.file.pathPleaseHolder':
    'Please enter the XLS storage directory! The default is /tmp/xls',
  'rc.ai.webhook': 'WebHook Url',
  'rc.ai.keyword': 'KeyWord',
  'rc.ai.secret': 'Secret',
  'rc.ai.isEnableProxy': 'IsEnableProxy',
  'rc.ai.proxy': 'Proxy',
  'rc.ai.port': 'Port',
  'rc.ai.user': 'User',
  'rc.ai.password': 'Password',
  'rc.ai.isAtAll': 'IsAtAll',
  'rc.ai.corpId': 'CorpId',
  'rc.ai.atMobiles': 'At Mobiles',
  'rc.ai.sendType': 'Send Type',
  'rc.ai.agentId': 'AgentId',
  'rc.ai.atUsers': 'At Users',
  'rc.ai.receivers': 'Receivers',
  'rc.ai.receiverCcs': 'ReceiverCcs',
  'rc.ai.serverHost': 'Mail server Host',
  'rc.ai.serverPort': 'Mail server Port',
  'rc.ai.sender': 'Sender Nickname',
  'rc.ai.enableSmtpAuth': 'Enable SmtpAuth',
  'rc.ai.emailUser': 'Email user',
  'rc.ai.emailPassword': 'Email password',
  'rc.ai.starttlsEnable': 'Start Tls Enable',
  'rc.ai.sslEnable': 'Ssl Enable',
  'rc.ai.smtpSslTrust': 'Smtp Ssl Trust',
  'rc.ai.xls.file.path': 'XLS storage directory',
  'rc.ai.msgtype': 'Send Message Type',
  'rc.ai.sendType.app': 'Application',
  'rc.ai.sendType.wechat': 'WeChat',
  'rc.ai.markdown': 'MarkDown',
  'rc.ai.text': 'Text',
  'rc.ai.post': 'Post',
  'rc.ai.table': 'Table',
  'rc.ai.attachment': 'Attachment',
  'rc.ai.tableAttachment': 'Table And Attachment',
  'rc.ai.manufacturers': 'SMS manufacturers',
  'rc.ai.manufacturersPleaseHolder': 'Please select a SMS manufacturer',
  'rc.ai.signature': 'SMS signature',
  'rc.ai.signaturePleaseHolder': 'Please enter the SMS signature',
  'rc.ai.accessKeyId': 'AccessKeyId',
  'rc.ai.accessKeyIdPleaseHolder': 'Please enter AccessKeyId',
  'rc.ai.accessKeySecret': 'AccessKeySecret',
  'rc.ai.accessKeySecretPleaseHolder': 'Please enter AccessKeySecret',
  'rc.ai.templateId': 'SMS Template ID',
  'rc.ai.templateIdPleaseHolder': 'Please enter the SMS template ID',
  'rc.ai.templateName': 'Template variable',
  'rc.ai.templateNamePleaseHolder': 'Please enter the SMS template variable',
  'rc.ai.requestUrl': 'Request URL',
  'rc.ai.requestUrlPleaseHolder': 'Please enter the request URL',
  'rc.ai.regionId': 'Regional Information',
  'rc.ai.regionIdPleaseHolder': 'Please enter the region information',
  'rc.ai.action': 'Interface method',
  'rc.ai.actionPleaseHolder': 'Please enter the interface method',
  'rc.ai.version': 'version number',
  'rc.ai.versionPleaseHolder': 'Please enter the version number',
  'rc.ai.appKey': 'App Key',
  'rc.ai.appKeyPleaseHolder': 'Please enter App Key',
  'rc.ai.appSecret': 'App Secret',
  'rc.ai.appSecretPleaseHolder': 'Please enter App Secret',
  'rc.ai.senders': 'Domestic SMS signature channel number',
  'rc.ai.sendersPleaseHolder':
    'Please enter the domestic SMS signature channel number',
  'rc.ai.url': 'APP access address',
  'rc.ai.urlPleaseHolder':
    'Please enter the APP access address, the address obtained after creating the SMS application',
  'rc.ai.statusCallBack': 'Domestic SMS status report destination',
  'rc.ai.statusCallBackPleaseHolder':
    'Please enter the recipient of the domestic SMS status report',
  'rc.ai.apikey': 'Account unique identifier',
  'rc.ai.apikeyPleaseHolder': 'Please enter the unique ID of the account',
  'rc.ai.callbackUrl': 'Official callback address',
  'rc.ai.callbackUrlPleaseHolder': 'Please enter the official callback address',
  'rc.ai.sdkAppId': 'Account unique ID',
  'rc.ai.sdkAppIdPleaseHolder': 'Please enter the unique ID of the account',
  'rc.ai.connTimeout': 'Request timeout',
  'rc.ai.connTimeoutPleaseHolder': 'Please enter the request timeout',
  'rc.ai.isSimple': 'Is Simple Mode',
  'rc.ai.isSimple.yes': 'Yes',
  'rc.ai.isSimple.no': 'No',
  'rc.ai.appId': 'App ID',
  'rc.ai.appIdPleaseHolder': 'Please enter the application ID',
  'rc.ai.baseUrl': 'REST API Base URL',
  'rc.ai.baseUrlPleaseHolder': 'Please enter the REST API Base URL',
  'rc.ai.secretKey': 'Access key secret',
  'rc.ai.secretKeyPleaseHolder': 'Please enter the access key secret',
  'rc.ai.mf.alibaba': 'Aliyun SMS',
  'rc.ai.mf.huawei': 'Huawei Cloud Domestic SMS',
  'rc.ai.mf.yunpian': 'Yunpian SMS',
  'rc.ai.mf.tencent': 'Tencent Cloud SMS',
  'rc.ai.mf.uni': 'Uni SMS',
  'rc.ai.mf.jdcloud': 'JD Cloud Domestic SMS',
  'rc.ai.mf.cloopen': 'CloOpen cloud domestic SMS',
  'rc.ai.mf.emay': 'Emay Softcom Domestic SMS',
  'rc.ai.mf.ctyun': 'Tianyi Cloud SMS',

  // alert group
  'rc.ag.management': 'Alert Group Management ',
  'rc.ag.name': 'Alert Group Name',
  'rc.ag.groupid': 'Alert group ID ',
  'rc.ag.alertInstanceIds': 'Alert instance',
  'rc.ag.chooseAlertInstanceIds': 'please choose Alert Instance',
  'rc.ag.inputName': 'please input Alert group name',
  'rc.ag.create': 'Create Alert Group',
  'rc.ag.modify': 'Modify Alert Group',
  'rc.ag.delete': 'Delete the Alert group ',
  'rc.ag.deleteConfirm': 'Are you sure to delete this Alert group? ',
  'rc.ag.alertCount': 'Alert Count: {count}',

  // doc
  'rc.doc.management': 'Document Management',
  'rc.doc.name': 'Name',
  'rc.doc.id': 'Document ID',
  'rc.doc.category': 'Document Type',
  'rc.doc.functionType': 'Function Type',
  'rc.doc.subFunctionType': 'SubType',
  'rc.doc.description': 'Description',
  'rc.doc.fillValue': 'Fill Value',
  'rc.doc.version': 'Version',
  'rc.doc.create': 'Create Document',
  'rc.doc.modify': 'Modify Document',
  'rc.doc.delete': 'Delete Document',
  'rc.doc.deleteConfirm': 'Are you sure you want to delete the this Document? ',
  'rc.doc.namePlaceholder': 'Please enter a name!',
  'rc.doc.versionPlaceholder':
    'Please select the version this Document belongs to!',
  'rc.doc.fillValuePlaceholder':
    'Please enter the fill value, use the name in the editor to trigger the prompt eg: If you want to input parameters in the function LTRIM(parms), the syntax is: LTRIM(${1:}) At this time The 1 represents the first cursor. If you need multiple numbers + 1, you can switch the cursor with the tab key; if you don`t need parameters, directly enter the desired fill value',
  'rc.doc.fillValueHelp': 'Please enter the fill value',
  'rc.doc.descriptionPlaceholder':
    'Please enter the Document description information!',
  'rc.doc.typePlaceholder':
    'Please select the function type this Document belongs to!',
  'rc.doc.subTypePlaceholder':
    'Please select the function type this Document belongs to!',
  'rc.doc.categoryPlaceholder': 'Please select the type of this Document!',

  // global variable
  'rc.gv.Management': 'Global Variable Management',
  'rc.gv.id': 'Global Variable ID',
  'rc.gv.name': 'Name',
  'rc.gv.value': 'Value',
  'rc.gv.create': 'Create Global Variable',
  'rc.gv.modify': 'Modify Global Variables',
  'rc.gv.delete': 'Delete Global Variable',
  'rc.gv.deleteConfirm':
    'Are you sure you want to delete this Global Variable? ',
  'rc.gv.namePlaceholder': 'Please enter a name!',
  'rc.gv.valuePlaceholder': 'Please enter the Global Variable value',

  // git project
  'rc.gp.management': 'GitProject Management(Beta)',
  'rc.gp.id': 'ID',
  'rc.gp.name': 'Name',
  'rc.gp.level': 'Level',
  'rc.gp.level.tooltip':
    'The smaller the number, the higher the priority, and the scanned UDF classes are repeatedly linked to the priority',
  'rc.gp.url': 'Project URL',
  'rc.gp.branch': 'Branch',
  'rc.gp.username': 'Username',
  'rc.gp.password': 'Password',
  'rc.gp.privateKey': 'Private Key Path',
  'rc.gp.pom': 'Pom File Path',
  'rc.gp.buildArgs': 'Build Arguments',
  'rc.gp.codeType': 'Code Type',
  'rc.gp.type': 'Clone Mode',
  'rc.gp.lastBuild': 'LastBuild Time',
  'rc.gp.buildState': 'Build State',
  'rc.gp.buildStep': 'Build Step',
  'rc.gp.udfClassList': 'UDF Class List',
  'rc.gp.ucl.jarPath': 'Jar Path',
  'rc.gp.ucl.orderLine': 'Jar Priority',
  'rc.gp.ucl.jarOrder': ' Jar Level Ordering',
  'rc.gp.ucl.projectOrder': 'Project Level Ordering',
  'rc.gp.ucl.orderLine.tooltip':
    'The smaller the number, the higher the priority of loading UDF in Jar',
  'rc.gp.create': 'Create Project',
  'rc.gp.modify': 'Modify Project',
  'rc.gp.delete': 'Delete Project',
  'rc.gp.deleteConfirm':
    'This operation will delete all downloaded codes under this project \nplease operate with caution \nthis operation is irreversible!! \nAre you sure to delete this Project? ',
  'rc.gp.namePlaceholder': 'Please enter Project name!',
  'rc.gp.urlPlaceholder': 'Please enter the project address!',
  'rc.gp.branchPlaceholder': 'Please select a branch!',
  'rc.gp.usernamePlaceholder': 'Please enter a username!',
  'rc.gp.passwordPlaceholder': 'Please enter a password!',
  'rc.gp.privateKeyPlaceholder': 'private key path, eg: ~/.ssh/id_rsa',
  'rc.gp.pomPlaceholder': 'Please enter the pom file path!',
  'rc.gp.buildArgsPlaceholder': 'Please enter build parameters!',
  'rc.gp.codeTypePlaceholder': 'Please select the code type!',
  'rc.gp.typePlaceholder': 'Please choose the Clone Mode!',
  'rc.gp.build': 'Build',
  'rc.gp.buildConfirm': 'Are you sure to start building this project? ',
  'rc.gp.log': 'Log',
  'rc.gp.codeTree': 'Show Code',
  'rc.gp.codeTree.clickShow': 'Click left file to view code',
  'rc.gp.codeTree.unSupportView': 'This file type does not support viewing',
  'rc.gp.build.step.0': 'No Build',
  'rc.gp.build.step.1': 'Check Env',
  'rc.gp.build.step.2': 'Git Clone',
  'rc.gp.build.step.3': 'Maven Build',
  'rc.gp.build.step.4': 'Get Jars',
  'rc.gp.build.step.5': 'Analysis UDF',
  'rc.gp.build.step.6': 'Finish',
  'rc.gp.buildSuccess': 'Build successfully',
  'rc.gp.buildFail': 'Build failed',
  'rc.gp.building': 'Building',
  'rc.gp.notBuild': 'Not built',
  'rc.gp.buildingTip': 'Building, please wait...',

  // udf template
  'rc.udf.management': 'UDF Template Management',
  'rc.template.name': 'Template Name',
  'rc.template.namePlaceholder': 'Please enter the template name! ',
  'rc.template.codeType': 'Code Type',
  'rc.template.codeTypePlaceholder': 'Please select code type! ',
  'rc.template.functionType': 'Function Type',
  'rc.template.functionTypePlaceholder': 'Please select function type! ',
  'rc.template.templateCodeLabel': 'Template Code( {language} )',
  'rc.template.templateCode': 'Template Code',
  'rc.template.templateCodePlaceholder': 'Please edit the template code! ',
  'rc.template.delete': 'Delete Template! ',
  'rc.template.deleteConfirm': 'Are you sure you want to delete this template?',
  'rc.template.create': 'Create UDF Template',
  'rc.template.modify': 'Modify UDF Template',

  // resource
  'rc.resource.click': 'Click left file to view details',
  'rc.resource.noResource':
    '\t\tNo resources\nPlease Click the button above to upload folders/files',
  'rc.resource.upload': 'Upload Files/Folders',

  //-------------------------------- setting center --------------------------------
  //setting
  'sys.setting.dinky': 'Dinky Env Configuration',
  'sys.setting.flink': 'Flink Configuration',
  'sys.setting.maven': 'Maven Configuration',
  'sys.setting.ds': 'DolphinScheduler Configuration',
  'sys.setting.ldap': 'LDAP Configuration',
  'sys.setting.metrics': 'Metrics Configuration',
  'sys.setting.resource': 'Resource Configuration',
  'sys.setting.dinky.tooltip':
    'Mainly modify system variables to ensure stable operation of basic functions',
  'sys.setting.flink.tooltip': 'Dinky docking Flink main parameters',
  'sys.setting.maven.tooltip': 'The main parameters of Maven compilation',
  'sys.setting.ds.tooltip':
    'DolphinScheduler plug-in settings that allow you to push dinky tasks to the DolphinScheduler workflow',
  'sys.setting.ldap.tooltip':
    'Unified authentication service LDAP docking configuration',
  'sys.setting.metrics.tooltip':
    'Monitor monitoring page settings, adjust Metrics detection',
  'sys.setting.resource.tooltip': 'Resource storage settings',
  'sys.setting.modify': 'Modify Settings {key}',
  'sys.env.settings.pythonHome': 'Python Env variables',
  'sys.env.settings.pythonHome.note': 'Python Env variables',
  'sys.setting.tag.extend': 'Extended Configuration',
  'sys.setting.tag.core': 'Core Configuration',
  'sys.setting.tag.integration': 'Integration Configuration',
  'sys.setting.tag.system': 'System Configuration',
  'sys.env.settings.dinkyAddr': 'Dinky Address',
  'sys.env.settings.dinkyAddr.note':
    'The address must be the same as the address configured in the Dinky Application background url',
  'sys.flink.settings.useRestAPI': 'Use Rest API',
  'sys.flink.settings.useRestAPI.note':
    'Whether to use RestAPI when operating and maintaining Flink tasks',
  'sys.flink.settings.sqlSeparator': 'SQL Separator',
  'sys.flink.settings.sqlSeparator.note': 'SQL Separator',
  'sys.flink.settings.jobIdWait': 'Job submission waiting time',
  'sys.flink.settings.jobIdWait.note':
    'Maximum waiting time (seconds) for obtaining Job ID when submitting Application or PerJob tasks',
  'sys.maven.settings.settingsFilePath': 'Maven configuration file path',
  'sys.maven.settings.settingsFilePath.note':
    'Maven configuration file path, eg: /opt/maven/conf/settings.xml , please fill in the full path, including the settings.xml file name',
  'sys.maven.settings.repository': 'Maven warehouse address',
  'sys.maven.settings.repository.note': 'Maven warehouse address',
  'sys.maven.settings.repositoryUser': 'Maven warehouse user name',
  'sys.maven.settings.repositoryUser.note':
    'Maven private server authentication user name',
  'sys.maven.settings.repositoryPassword': 'Maven warehouse password',
  'sys.maven.settings.repositoryPassword.note':
    'Maven private server authentication password, please note: For security reasons, the password will not be displayed in plain text, and it has been desensitized when it returns',
  'sys.dolphinscheduler.settings.enable': 'Whether to enable DolphinScheduler',
  'sys.dolphinscheduler.settings.enable.note':
    'Whether to enable DolphinScheduler, the relevant functions of DolphinScheduler can only be used after it is enabled, please ensure that the relevant configuration of DolphinScheduler is correct',
  'sys.dolphinscheduler.settings.url': 'DolphinScheduler address',
  'sys.dolphinscheduler.settings.url.note':
    'The address must be consistent with the address configured in the DolphinScheduler background, eg: http://127.0.0.1:12345/dolphinscheduler',
  'sys.dolphinscheduler.settings.token': 'DolphinScheduler Token',
  'sys.dolphinscheduler.settings.token.note':
    'DolphinScheduler‘s Token, please create a token in DolphinScheduler’s Security Center->Token Management, and fill in the configuration',
  'sys.dolphinscheduler.settings.projectName': 'DolphinScheduler project name',
  'sys.dolphinscheduler.settings.projectName.note':
    'The project name specified in DolphinScheduler, case insensitive',

  //LDAP
  'sys.ldap.settings.enable': 'Whether to enable the ldap',
  'sys.ldap.settings.enable.note': 'Turn the LDAP login function on',
  'sys.ldap.settings.url': 'ldap address of service',
  'sys.ldap.settings.url.note':
    'ldap address of service，eg：ldap://192.168.111.1:389 ',
  'sys.ldap.settings.userDn': 'Login User name (DN)',
  'sys.ldap.settings.userDn.note':
    'User name for connecting to the ldap service, or the administrator DN',
  'sys.ldap.settings.userPassword': 'login password',
  'sys.ldap.settings.userPassword.note':
    'Password used to connect to the ldap service',
  'sys.ldap.settings.timeLimit': 'Connection Timeout',
  'sys.ldap.settings.timeLimit.note':
    'The maximum time to connect to the ldap service is disconnected',
  'sys.ldap.settings.baseDn': 'BaseDn',
  'sys.ldap.settings.baseDn.note':
    'Dinky will conduct a user search on this base dn,eg：ou=users,dc=dinky,dc=com',
  'sys.ldap.settings.filter': 'User filtering rules',
  'sys.ldap.settings.filter.note':
    'User filtering by using the filter syntax of the ldap，eg: (&(objectClass=inetOrgPerson))',
  'sys.ldap.settings.autoload': 'User atically map users when logging in',
  'sys.ldap.settings.autoload.note':
    'When turned on, when a user logs in with LDAP, if there is no corresponding Dinky user mapping, the LDAP information is automatically pulled to create a Dinky user mapping to it. If this feature is closed, you will not be able to log in for unimported LDAP users',
  'sys.ldap.settings.castUsername': 'The LDAP user-name segment',
  'sys.ldap.settings.castUsername.note':
    'It is necessary to fill in the attribute field of the user in an LDAP to correspond to the Dinky user. Generally, cn or uid indicates the unique identity of the user',
  'sys.ldap.settings.castNickname': 'The LDAP nickname field',
  'sys.ldap.settings.castNickname.note':
    'Need to fill in the attribute field of the user in an LDAP to correspond to the Dinky nickname, must be filled in, generally selected as sn or other identification, not required unique',
  'sys.ldap.settings.defaultTeant': 'The LDAP imports the default tenant code',
  'sys.ldap.settings.defaultTeant.note':
    'After opening the automatic import of users, the new user login needs a default tenant code, otherwise it cannot log in',

  'sys.ldap.settings.testConnect': 'Test Connect',
  'sys.ldap.settings.testConnect.success':
    'Test Connect Successful, {count} users were obtained',
  'sys.ldap.settings.testLogin': 'Test Login',
  'sys.ldap.settings.loadUser': 'Load User',
  'sys.ldap.settings.loadable': 'Whether it can be imported',

  // Metrics
  'sys.metrics.settings.sys.enable': 'Dinky JVM Monitor switch',
  'sys.metrics.settings.sys.enable.note':
    'This switch is related to Dinky JVM Monitor, which determines the display of Dinky Server in the monitoring page and the collection of JVM Metrics',
  'sys.metrics.settings.sys.gatherTiming':
    'Dinky JVM Metrics collection time granularity',
  'sys.metrics.settings.sys.gatherTiming.note':
    'Dinky JVM Metrics collection time granularity, timed task interval trigger',
  'sys.metrics.settings.flink.gatherTiming':
    'Flink Metrics collection time granularity',
  'sys.metrics.settings.flink.gatherTiming.note':
    'Flink Metrics collection time granularity, scheduled task interval trigger',
  'sys.metrics.settings.flink.gatherTimeout':
    'Flink Metrics collection time granularity, scheduled task interval trigger',
  'sys.metrics.settings.flink.gatherTimeout.note':
    'Flink Metrics collection timeout period, scheduled task interval trigger (this configuration item should be smaller than Flink Metrics collection time granularity)',

  // process
  'sys.process.id': 'Process ID',
  'sys.process.name': 'Process Name',
  'sys.process.taskId': 'Job ID',
  'sys.process.type': 'Type',
  'sys.process.status': 'Status',
  'sys.process.startTime': 'Start Time',
  'sys.process.endTime': 'End Time',
  'sys.process.duration': 'Duration',
  'sys.process.operator': 'Operator',
  'sys.process.viewInfoLog': 'View Info Level Log',
  'sys.process.viewErrorLog': 'View Error Level Log',
  'sys.process.subStep.status': 'Step Status',
  'sys.process.subStep.info': 'Step Info',
  'sys.process.subStep.error': 'Step Error',

  // system info of log
  'sys.info.logList.tips': 'Click left log file to viewing',

  // Resource
  'sys.resource.settings.enable': 'Whether to enable Resource',
  'sys.resource.settings.enable.note':
    'Enable the resource management function. If you switch the storage mode, you need to turn off this switch. After the relevant configuration is completed, turn it on again.',
  'sys.resource.settings.upload.base.path':
    'The root path of the upload directory',
  'sys.resource.settings.upload.base.path.note':
    'resource store on HDFS/OSS path, resource file will store to this base path, self configuration, please make sure the directory exists on hdfs and have read write permissions. /dinky is recommended',
  'sys.resource.settings.model': 'Storage mode: support HDFS, OSS',
  'sys.resource.settings.model.note':
    'Storage mode: support HDFS, OSS, it will take effect after switching the option, and migrate resource files at the same time',
  'sys.resource.settings.hdfs.root.user': 'HDFS operation user name',
  'sys.resource.settings.hdfs.root.user.note': 'HDFS operation user name',
  'sys.resource.settings.hdfs.fs.defaultFS': 'HDFS defaultFS',
  'sys.resource.settings.hdfs.fs.defaultFS.note':
    'fs.defaultFS configuration items, such as remote: hdfs://localhost:9000, local: file:///',
  'sys.resource.settings.oss.endpoint': 'URL of the object storage service',
  'sys.resource.settings.oss.endpoint.note':
    'The URL of the object storage service, for example: https://oss-cn-hangzhou.aliyuncs.com',
  'sys.resource.settings.oss.accessKey':
    'Access key is like a user ID, which can uniquely identify your account',
  'sys.resource.settings.oss.accessKey.note':
    'Access key is like a user ID, which can uniquely identify your account',
  'sys.resource.settings.oss.secretKey': 'Secret key is your account password',
  'sys.resource.settings.oss.secretKey.note':
    'Secret key is your account password',
  'sys.resource.settings.oss.bucketName': 'default bucket name',
  'sys.resource.settings.oss.bucketName.note': 'default bucket name',
  'sys.resource.settings.oss.region': 'region',
  'sys.resource.settings.oss.region.note': 'region',

  // metrics
  // server
  'metrics.filter.60seconds': '60 Seconds',
  'metrics.filter.5minutes': '5 Minutes',
  'metrics.filter.10minutes': '10 Minutes',
  'metrics.filter.1hour': '1 Hours',
  'metrics.filter.2hours': '2 Hours',
  'metrics.filter.5hours': '5 Hours',
  'metrics.filter.custom': 'Custom',
  'metrics.filter.custom.range': 'DateTime Range',

  // flink job
  'metrics.flink.job.name': 'Job Name',
  'metrics.flink.job.placeholder': 'Please select a job name',
  'metrics.flink.jobId': 'Flink Job ID',
  'metrics.flink.taskId': 'Dinky Job ID',
  'metrics.flink.subTask': 'SubTask',
  'metrics.flink.subTask.placeholder': 'Please select a SubTask Name',
  'metrics.flink.metrics.name': 'Metric Name',
  'metrics.flink.metrics.placeholder':
    'Please select the Metric Name (multiple choices)',

  // metadata
  'pages.metadata.NoDatabaseSelected': 'No database selected',
  'pages.metadata.Application': 'Application',
  'pages.metadata.TableInfo': 'Table Info',
  'pages.metadata.Description': 'Description',
  'pages.metadata.DataSearch': 'Data Search',
  'pages.metadata.GenerateSQL': 'Generate SQL',
  'pages.metadata.FieldInformation': 'Field Info',
  'pages.metadata.catalogSelect': 'Select Catalog & Database',
  'pages.metadata.catalogRefresh': 'Refresh Catalog',
  'pages.metadata.catalogRefreshSuccess': 'Refresh Catalog Success',
  'pages.metadata.selectDatabase': 'Select Database',

  // data-studio
  'pages.datastudio.label.jobConfig': 'Job Config',
  'pages.datastudio.label.jobConfig.cluster': 'Flink cluster',
  'pages.datastudio.label.jobConfig.cluster.tip': 'Select Flink cluster',
  'pages.datastudio.label.jobConfig.clusterConfig': 'Flink cluster Config',
  'pages.datastudio.label.jobConfig.clusterConfig.tip1':
    'Select Flink cluster Config for remote submission tasks in [{type}] mode',
  'pages.datastudio.label.jobConfig.clusterConfig.tip2':
    'Select Flink cluster Config',
  'pages.datastudio.label.jobConfig.jar': 'Executable Jar',
  'pages.datastudio.label.jobConfig.jar.tip1':
    'Select executable Jar for remote submission of Jar tasks in [{type}] mode. When the parameter item has a value, only the executable Jar will be submitted.',
  'pages.datastudio.label.jobConfig.jar.tip2':
    'Select executable Jar, not required',
  'pages.datastudio.label.jobConfig.execmode.tip':
    'Specify the execution mode of the Flink task, the default is Local',
  'pages.datastudio.label.jobConfig.execmode.k8s.tip':
    'Specify the execution mode of the Flink task, the default is KUBERNETES_APPLICATION',
  'pages.datastudio.label.jobConfig.flinksql.env': 'FlinkSQL environment',
  'pages.datastudio.label.jobConfig.flinksql.env.tip1':
    'Select the FlinkSQL execution environment of the current task, and the environment statement will be executed in advance. The default is none. ',
  'pages.datastudio.label.jobConfig.flinksql.env.tip2':
    'Select FlinkSQL environment, optional',
  'pages.datastudio.label.jobConfig.parallelism': 'Parallelism',
  'pages.datastudio.label.jobConfig.parallelism.tip':
    'Set the parallelism of Flink tasks, the minimum is 1',
  'pages.datastudio.label.jobConfig.insert': 'Insert StatementSet',
  'pages.datastudio.label.jobConfig.insert.tip':
    '[Enhanced Features] Enable the statement set mechanism, multiple Insert statements will be combined into one JobGraph before submission, and the Select statement is invalid',
  'pages.datastudio.label.jobConfig.fragment': 'Global variables',
  'pages.datastudio.label.jobConfig.fragment.tip':
    '[Enhanced Features] Enable FlinkSql global variables, use ":=" to define (end with ";"), to call',
  'pages.datastudio.label.jobConfig.batchmode': 'Batch Mode',
  'pages.datastudio.label.jobConfig.batchmode.tip': 'Use batch mode',
  'pages.datastudio.label.jobConfig.checkPoint': 'Checkpoint interval',
  'pages.datastudio.label.jobConfig.checkPoint.tip':
    'Set the checkpoint step size of the Flink task, 0 means not enabled',
  'pages.datastudio.label.jobConfig.savePointStrategy': 'SavePointStrategy',
  'pages.datastudio.label.jobConfig.savePointStrategy.tip':
    'Specify the SavePoint strategy, the default is disabled',
  'pages.datastudio.label.jobConfig.savePointpath': 'SavePointpath',
  'pages.datastudio.label.jobConfig.savePointpath.tip1':
    'Restore Flink task from SavePointPath',
  'pages.datastudio.label.jobConfig.savePointpath.tip2': 'hdfs://...',
  'pages.datastudio.label.jobConfig.alertGroup': 'Alarm Group',
  'pages.datastudio.label.jobConfig.alertGroup.tip': 'Select alert group',
  'pages.datastudio.label.jobConfig.other': 'Other Config',
  'pages.datastudio.label.jobConfig.other.tip':
    'Other Config items will be applied to the execution environment, such as pipeline.name',
  'pages.datastudio.label.jobConfig.addConfig': 'Add Config item',
  'pages.datastudio.label.jobConfig.addConfig.params': 'parameters',
  'pages.datastudio.label.jobConfig.addConfig.value': 'value',

  'pages.datastudio.label.jobInfo.id': 'Job ID',
  'pages.datastudio.label.jobInfo.name': 'job name',
  'pages.datastudio.label.jobInfo.dialect': 'Dialect',
  'pages.datastudio.label.jobInfo.versionId': 'version number',

  'pages.datastudio.label.execConfig': 'Execution Config',
  'pages.datastudio.label.execConfig.selectDatabase': 'Select DataSource',
  'pages.datastudio.label.execConfig.selectDatabase.tip':
    'Select the data source for Sql statement execution',
  'pages.datastudio.label.execConfig.preview.result': 'Preview Result',
  'pages.datastudio.label.execConfig.preview.result.tip':
    'Open the preview result, it will run synchronously and return the data result',
  'pages.datastudio.label.execConfig.changelog': 'Print ChangeLog',
  'pages.datastudio.label.execConfig.changelog.tip':
    'Open the print stream, it will run synchronously and return the ChangeLog containing op information, it is not enabled by default and returns the final result Table',
  'pages.datastudio.label.execConfig.maxrow': 'Maximum number of rows',
  'pages.datastudio.label.execConfig.maxrow.tip':
    'The maximum number of rows of preview data',
  'pages.datastudio.label.execConfig.autostop': 'AutoStop',
  'pages.datastudio.label.execConfig.autostop.tip':
    'Enable autostop, it will automatically stop the task after capturing the maximum number of records',

  'pages.datastudio.label.savepoint': 'Savepoint',
  'pages.task.savePointPath': 'SavePoint Path',

  'pages.datastudio.label.version': 'Version History',
  'pages.datastudio.label.version.id': 'Version ID',
  'pages.datastudio.label.version.diff': 'Version Diff',
  'pages.datastudio.label.version.rollback': 'Rollback',
  'pages.datastudio.label.version.rollback.flinksql':
    'Rollback Flink SQL Version',
  'pages.datastudio.label.version.rollback.flinksqlConfirm':
    'Are you sure to RollBack the Flink SQL version to [{versionId}]? ',
  'pages.datastudio.label.version.diff.tip':
    'Only compare with the content in the current editor',
  'pages.datastudio.label.version.leftTitle':
    'Version number: [{versionId}] Creation time: [{createTime}]',
  'pages.datastudio.label.version.rightTitle':
    'Version number: [current edited version] creation time: [{createTime}] last update time: [{updateTime}]',

  'pages.datastudio.editor.execute.warn':
    'The execution mode of this task is [{type}], which does not support SQL query, please save it manually and use the button on the right - job submission',
  'pages.datastudio.editor.submiting': 'The new task [{jobName}] is executing',
  'pages.datastudio.editor.exec.success': 'Execution succeeded',
  'pages.datastudio.editor.exec.error': 'Task [jobName}] execution failed',
  'pages.datastudio.editor.async.submit': 'Submit jobs asynchronously',
  'pages.datastudio.editor.async.submiting':
    'The task [{jobName}] is submitting asynchronously',
  'pages.datastudio.editor.async.submitConfirm':
    'Are you sure to asynchronously submit the job [{jobName}] to its configured cluster? Please make sure your work has been saved! ',
  'pages.datastudio.editor.async.success': 'Asynchronous submission succeeded',
  'pages.datastudio.editor.async.error': 'Asynchronous submission failed',
  'pages.datastudio.editor.query.explan.error':
    'Failed to get job execution plan, reason:\n{msg}',
  'pages.datastudio.editor.query.ds.error':
    'Failed to get dolphin data, reason:\n{msg}',
  'pages.datastudio.editor.release.job': 'Release job',
  'pages.datastudio.editor.release.jobConfirm':
    'Are you sure to release the job [{jobName}]? Please make sure your work has been saved! ',
  'pages.datastudio.editor.release.job.success':
    'Release job [{jobName}] succeeded',
  'pages.datastudio.editor.release.job.error': 'Publish job [{jobName}] failed',
  'pages.datastudio.editor.edit.job': 'Maintenance job',
  'pages.datastudio.editor.edit.jobConfirm':
    'Confirm the maintenance job [{jobName}]? ',
  'pages.datastudio.editor.edit.job.success':
    'Maintenance job [{jobName}] succeeded',
  'pages.datastudio.editor.online.job': 'Online job',
  'pages.datastudio.editor.online.jobConfirm':
    'Are you sure you want to go online with [{jobName}]? ',
  'pages.datastudio.editor.online.job.success':
    'Online job [{jobName}] succeeded',
  'pages.datastudio.editor.online.job.error':
    'Online job [{jobName}] failed, reason:\n {msg}',
  'pages.datastudio.editor.stop.job': 'Stop job',
  'pages.datastudio.editor.stop.jobConfirm':
    'Are you sure to stop the job [{jobName}]? ',
  'pages.datastudio.editor.stop.job.success':
    'Stop job [{jobName}] successfully',
  'pages.datastudio.editor.stop.job.error':
    'Stop job [{jobName}] failed, reason:\n {msg}',
  'pages.datastudio.editor.offline.job': 'Offline job',
  'pages.datastudio.editor.offline.jobConfirm':
    'Are you sure about offline job [{jobName}]? ',
  'pages.datastudio.editor.offline.job.success':
    'Offline job [{jobName}] succeeded',
  'pages.datastudio.editor.offline.job.error':
    'Offline job [{jobName}] failed, reason:\n {msg}',
  'pages.datastudio.editor.delete.job': 'Delete job',
  'pages.datastudio.editor.delete.jobConfirm':
    'Are you sure to cancel the job [{jobName}]? ',
  'pages.datastudio.editor.delete.job.success':
    'Logout job [{jobName}] succeeded',
  'pages.datastudio.editor.delete.job.error':
    'Delete job [{jobName}] failed, reason:\n {msg}',
  'pages.datastudio.editor.recovery.job': 'Recovery Job',
  'pages.datastudio.editor.recovery.jobConfirm':
    'Are you sure to restore job [{jobName}]? ',
  'pages.datastudio.editor.recovery.job.success':
    'The recovery job [{jobName}] succeeded',
  'pages.datastudio.editor.api.doc': 'API Manual',
  'pages.datastudio.editor.usehelp': 'Use help',
  'pages.datastudio.editor.clearConsole': 'Clear Console',
  'pages.datastudio.editor.fullScreen': 'FullScreen Development',
  'pages.datastudio.editor.fullScreen.exit': 'Exit FullScreen',
  'pages.datastudio.editor.save': 'Save the current FlinkSql and Config',
  'pages.datastudio.editor.export': 'Export the current Sql and Config',
  'pages.datastudio.editor.check': 'Check current FlinkSql',
  'pages.datastudio.editor.explan': 'Get the current FlinkSql execution graph',
  'pages.datastudio.editor.explan.tip': 'JobPlan for FlinkSQL',
  'pages.datastudio.editor.exec': 'Execute',
  'pages.datastudio.editor.exec.tip':
    'Submit the current job to the cluster, please save it manually before submitting',
  'pages.datastudio.editor.push.ds': 'Push to dolphin scheduler',
  'pages.datastudio.editor.push.ds.query.error':
    'Failed to get dolphin task definition set, reason:\n{msg}',
  'pages.datastudio.editor.push.ds.timeout.strategy': 'Timeout strategy',
  'pages.datastudio.editor.push.ds.timeout.alarm': 'Timeout warning',
  'pages.datastudio.editor.push.ds.timeout.error': 'Timeout failed',
  'pages.datastudio.editor.push.ds.timeout.strategy.tip':
    'A timeout strategy must be selected',
  'pages.datastudio.editor.push.ds.add.job.error':
    'Failed to create job, reason:\n{msg}',
  'pages.datastudio.editor.push.ds.prejob': 'Pre-job',
  'pages.datastudio.editor.push.ds.prejob.tip': 'Select prejob task',
  'pages.datastudio.editor.push.ds.job.priority': 'Priority',
  'pages.datastudio.editor.push.ds.errortry.count': 'Number of failed retries',
  'pages.datastudio.editor.push.ds.errortry.min':
    'Failure retry interval (minutes)',
  'pages.datastudio.editor.push.ds.delayed.time':
    'Delayed execution time (minutes)',
  'pages.datastudio.editor.push.ds.timeout.min':
    'Timeout alarm duration (minutes)',
  'pages.datastudio.editor.push.ds.running.tag': 'running flag',
  'pages.datastudio.editor.stop': 'Stop',
  'pages.datastudio.editor.release':
    'Release, will not be able to modify after release',
  'pages.datastudio.editor.edit':
    'Maintenance, click to enter the editing state',
  'pages.datastudio.editor.online':
    'Online, automatic recovery, alarms, etc. will take effect after online',
  'pages.datastudio.editor.offline':
    'Offline, will enter the latest release status',
  'pages.datastudio.editor.delete': 'Logout, will enter the recycle bin',
  'pages.datastudio.editor.recovery': 'Recovery, will enter maintenance mode',
  'pages.datastudio.editor.api': 'View API',
  'pages.datastudio.editor.help': 'View usage help',
  'pages.datastudio.sql.query': 'SQL query',
  'pages.datastudio.submit.job': 'Submit job',

  'pages.datastudio.help.sqlChanged': 'Sql context or configure changed',
  'pages.datastudio.help.sqlChangedPrompt':
    'the remote context corresponding to the current sql has changed, will the data be flushed?',

  'pages.datastudio.explain.validate.msg': 'FlinkSql Syntax and logic check',
  'pages.datastudio.explain.validate': 'Validating...',
  'pages.datastudio.explain.validate.allright': 'All Right',
  'pages.datastudio.explain.validate.error':
    'There are errors, a total of {errorCount}',
  'pages.datastudio.explain.validate.grammar.right': 'Grammar Right',
  'pages.datastudio.explain.validate.grammar.error': 'Grammar Error',
  'pages.datastudio.explain.validate.logic.right': 'Logical Right',
  'pages.datastudio.explain.validate.logic.error': 'Logical Error',

  // footer
  'pages.datastudio.footer.memDetails':
    'Maximum heap size: {max}\nUsed:   {used}M',
  'pages.datastudio.footer.codeType': 'Code Type: ',
  'pages.datastudio.footer.lineSeparator': 'Line Separator: ',
  'pages.datastudio.footer.codeEncoding': 'File Encoding: ',
  'pages.datastudio.footer.codePosition': 'Ln {Ln}:Col {Col} ',
  'pages.datastudio.label.result.query.latest.data': 'Get the latest data',

  'datastudio.middle.qg': 'Quick Guide',
  'datastudio.middle.qg.clusterInstance': 'Register Session Cluster',
  'datastudio.middle.qg.clusterConfiguration': 'Register Cluster Configuration',
  'datastudio.middle.qg.database': 'Register DataSource',
  'datastudio.middle.qg.alertInstance': 'Register Alert Instance',
  'datastudio.middle.qg.alertGroup': 'Register Alert Group',
  'datastudio.middle.qg.fragment': 'Global Variables',
  'datastudio.middle.qg.document': 'Document',
  'datastudio.middle.qg.gitprojects': 'Git Projects',
  'datastudio.middle.qg.udf': 'UDF',
  'datastudio.middle.qg.resource': 'Resource',

  // project
  'datastudio.project.create.rootFolder': 'Create Root Folder',
  'datastudio.project.create.folder.name': 'Folder Name',
  'datastudio.project.create.folder.name.placeholder':
    'Please enter the folder name',
  'datastudio.project.create.folder.tip':
    'No job, please click the new directory in the upper left corner',
  'datastudio.project.delete.job': 'Delete [{type}] Job [{name}]',
  'datastudio.project.delete.job.confirm':
    'This operation will delete the execution history of the task and all information of the task. \nPlease operate with caution! This operation is irreversible!!!  \n\t\t\t\tConfirm to delete?',

  'catalog.name': 'Job Name',
  'catalog.name.placeholder': 'Please enter the job name',
  'catalog.name.tip':
    'This name can be used as the JobName of the FlinkSql task (pipeline.name configuration item)',
  'catalog.type': 'Job Type',
  'catalog.type.placeholder': 'Please select the job type',
  'catalog.type.tip':
    'The job type determines the execution method of the job, please choose carefully, once selected, it cannot be modified',
  'catalog.udf.templateId': 'UDF Template',
  'catalog.udf.templateId.placeholder': 'Please select UDF template',
  'catalog.udf.className': 'Class/Method Name',
  'catalog.udf.className.placeholder': 'Please enter the class or method name',
};
