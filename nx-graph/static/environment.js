window.exclude = [];
  window.watch = false;
  window.environment = 'release';
  window.localMode = 'build';

  window.appConfig = {
    showDebugger: false,
    showExperimentalFeatures: false,
    projectGraphs: [
      {
        id: 'local',
        label: 'local',
        url: 'projectGraph.json',
      }
    ],
    defaultProjectGraph: 'local',
  };
  window.projectGraphResponse = {"hash":"47298895247fbfba7903240c2e4ac9be641c47d5b4800e91f2e3802fd0afd304","projects":[{"name":"internal-client-e2e","type":"e2e","data":{"tags":[],"root":"apps/internal-client-e2e","files":[{"file":"apps/internal-client-e2e/.eslintrc.json","hash":"4c5989b23b5aa8cc7aba2a07d1ae7daee19c1555"},{"file":"apps/internal-client-e2e/cypress.json","hash":"2a015ac2b9909e534c93d554d7991fef3ef93ba3"},{"file":"apps/internal-client-e2e/project.json","hash":"0a9df00cda8d2f3d7c02828f502fba89089f0db2"},{"file":"apps/internal-client-e2e/src/fixtures/example.json","hash":"294cbed6ce9e0b948b787452e8676aee486cb3be"},{"file":"apps/internal-client-e2e/src/integration/app.spec.ts","hash":"1710cbb4ee2505c4512a970700b963a65865848f"},{"file":"apps/internal-client-e2e/src/support/app.po.ts","hash":"32934246969c2ecb827ac05677785933a707a54d"},{"file":"apps/internal-client-e2e/src/support/commands.ts","hash":"e030c94e05481be3e3d1fec712a079876a19b312"},{"file":"apps/internal-client-e2e/src/support/index.ts","hash":"3d469a6b6cf31eb66117d73e278bcf74f398f1db"},{"file":"apps/internal-client-e2e/tsconfig.json","hash":"c4f818ecd40fbce82c3e08bf25cde3043970f8f3"}]}},{"name":"common-react-e2e","type":"e2e","data":{"tags":[],"root":"apps/common-react-e2e","files":[{"file":"apps/common-react-e2e/.eslintrc.json","hash":"696cb8b12127425419f6d2809c5f15a5963d86de"},{"file":"apps/common-react-e2e/cypress.json","hash":"825c17c116c9f7a0ea4829814cd2407cbd3eb0dd"},{"file":"apps/common-react-e2e/project.json","hash":"c606cf8f25e472bd7334efd1c8129d717ec8e455"},{"file":"apps/common-react-e2e/src/fixtures/example.json","hash":"294cbed6ce9e0b948b787452e8676aee486cb3be"},{"file":"apps/common-react-e2e/src/integration/header-bar/header-bar.spec.ts","hash":"fb70171cbddea8b12f6cfe1d5b1eba4f669c454d"},{"file":"apps/common-react-e2e/src/support/commands.ts","hash":"dbd96261c756f1021f18bf6d25c766326497167b"},{"file":"apps/common-react-e2e/src/support/index.ts","hash":"3d469a6b6cf31eb66117d73e278bcf74f398f1db"},{"file":"apps/common-react-e2e/tsconfig.json","hash":"c4f818ecd40fbce82c3e08bf25cde3043970f8f3"}]}},{"name":"internal-client","type":"app","data":{"tags":[],"root":"apps/internal-client","files":[{"file":"apps/internal-client/.babelrc","hash":"61641ec8ac3659e204441c80bb06defe323e3110"},{"file":"apps/internal-client/.browserslistrc","hash":"f1d12df4faa25ab7f0f03196105e957395f609af"},{"file":"apps/internal-client/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"apps/internal-client/jest.config.ts","hash":"fa61a71e0cafcbb175e1732923f3ab5faee34005"},{"file":"apps/internal-client/project.json","hash":"b55b56ab0b6af9578360edb0f52b7c1ed389ee01"},{"file":"apps/internal-client/proxy.conf.json","hash":"a394ee591f1afb4184ca23d20b9e6f49caa94076"},{"file":"apps/internal-client/README.md","hash":"b3e681c07ee60ffec51ba74d18e551cac30a8342"},{"file":"apps/internal-client/src/app/app.spec.tsx","hash":"92b16280fcf4eba63a70bec46a18441f3de7d015","deps":["npm:@testing-library/react","npm:react-router-dom"]},{"file":"apps/internal-client/src/app/app.tsx","hash":"02cc29296a456ed9e114d4375cb5949ccaa96fad","deps":["npm:@mui/material","common-react","npm:react","npm:react-router-dom"]},{"file":"apps/internal-client/src/app/pages/dashboard-page/dashboard-page.module.scss","hash":"45c2aa47e9879fa033c0d1f266154dd6106c2201"},{"file":"apps/internal-client/src/app/pages/dashboard-page/dashboard-page.spec.tsx","hash":"a39f6eaf24193263fed9012f7946752c2d92e8d8","deps":["npm:@testing-library/react","npm:react-dom"]},{"file":"apps/internal-client/src/app/pages/dashboard-page/dashboard-page.tsx","hash":"fe66b9b06c2618885c829c2cd9e4001ce1698903","deps":["npm:@mui/material","npm:@mui/icons-material","common-react","npm:react"]},{"file":"apps/internal-client/src/app/pages/not-found-page/not-found-page.module.scss","hash":"45c2aa47e9879fa033c0d1f266154dd6106c2201"},{"file":"apps/internal-client/src/app/pages/not-found-page/not-found-page.spec.tsx","hash":"33fd2bbe065efe2ccd29cd7414659922bcd463b4","deps":["npm:@testing-library/react"]},{"file":"apps/internal-client/src/app/pages/not-found-page/not-found-page.tsx","hash":"d69a55311e09d9fd84962ef59bd4c5692ec2b79c","deps":["npm:@mui/material"]},{"file":"apps/internal-client/src/assets/.gitkeep","hash":"e69de29bb2d1d6434b8b29ae775ad8c2e48c5391"},{"file":"apps/internal-client/src/environments/environment.prod.ts","hash":"c9669790be176ac85a5d8c11278875c2f52dc507"},{"file":"apps/internal-client/src/environments/environment.ts","hash":"7ed83767fff25adfed19d52b2821a432f8ed18b1"},{"file":"apps/internal-client/src/favicon.ico","hash":"317ebcb2336e0833a22dddf0ab287849f26fda57"},{"file":"apps/internal-client/src/index.html","hash":"5993f153d7968ed4ebe5035e94838d1b1e77cf5b"},{"file":"apps/internal-client/src/main.tsx","hash":"c852631dd2aefae514f1db230b4fa32738027024","deps":["npm:react","npm:react-dom","npm:react-router-dom"]},{"file":"apps/internal-client/src/polyfills.ts","hash":"2adf3d05b6fcf479dd61c74f6bda95d9edb6ac6b","deps":["npm:core-js","npm:regenerator-runtime"]},{"file":"apps/internal-client/src/styles.scss","hash":"9100733a293a67946e22b270f95b3d0eaac977bd"},{"file":"apps/internal-client/tsconfig.app.json","hash":"af84f21cfc8066d0302f5772b7c157e81d418617"},{"file":"apps/internal-client/tsconfig.json","hash":"9657042e495d5b69d338455a91b5fcaae1bddff3"},{"file":"apps/internal-client/tsconfig.spec.json","hash":"b8a950754b6152f8b12188ac8bd1d289ccbf57ce"}]}},{"name":"storybook-e2e","type":"e2e","data":{"tags":[],"root":"apps/storybook-e2e","files":[{"file":"apps/storybook-e2e/.eslintrc.json","hash":"696cb8b12127425419f6d2809c5f15a5963d86de"},{"file":"apps/storybook-e2e/cypress.json","hash":"cdcf7a4471f1f4a9747728d743da4e72866edfea"},{"file":"apps/storybook-e2e/project.json","hash":"79e3d5597a4675e1ee8e467b4484b4f6a619391e"},{"file":"apps/storybook-e2e/src/fixtures/example.json","hash":"294cbed6ce9e0b948b787452e8676aee486cb3be"},{"file":"apps/storybook-e2e/src/integration/storybook/storybook.spec.ts","hash":"790f612c4a37e13e2983d12af9438a08caa9e17c"},{"file":"apps/storybook-e2e/src/support/commands.ts","hash":"dd92f50a34a243dc6c08abff77dc7db99ad39b93"},{"file":"apps/storybook-e2e/src/support/index.ts","hash":"3d469a6b6cf31eb66117d73e278bcf74f398f1db"},{"file":"apps/storybook-e2e/tsconfig.json","hash":"c4f818ecd40fbce82c3e08bf25cde3043970f8f3"}]}},{"name":"common-react","type":"lib","data":{"tags":[],"root":"libs/common-react","files":[{"file":"libs/common-react/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/common-react/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/common-react/.storybook/main.js","hash":"b17a4cd6ebe5e3b9bf8f3b47328cfa969bc0fef5"},{"file":"libs/common-react/.storybook/tsconfig.json","hash":"7a1170995999ff179ae31ea7b87133b1c2161bc2"},{"file":"libs/common-react/jest.config.ts","hash":"b59a0a99ecbe1f0f88b49e3267d438b75f245568"},{"file":"libs/common-react/package.json","hash":"ed719279901add78918764ca6e682e5347ae0276"},{"file":"libs/common-react/project.json","hash":"a1c46a9a88168639e377aff3bdf62583e003af4e"},{"file":"libs/common-react/README.md","hash":"f351f7ff8075ea3a997a7e45950bfe94141af6df"},{"file":"libs/common-react/src/index.ts","hash":"8fb871412a1eebf1e6f9d6e2128ab11108bf5d67"},{"file":"libs/common-react/src/lib/components/header-bar/header-bar-context.ts","hash":"0677e6b9daddd842b49751c2ee94f3f64f3aa532","deps":["npm:react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.spec.tsx","hash":"e7b2f6b49ce9dacea72c24862f46f3d58b4c12ae","deps":["npm:@testing-library/react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.stories.tsx","hash":"f96c6496b0df7ae21f4e8438feb82b8deb3f9330","deps":["npm:@mui/material","npm:@mui/icons-material","npm:@storybook/react"]},{"file":"libs/common-react/src/lib/components/header-bar/header-bar.tsx","hash":"dd37a253333ef0109de8459df0cfa1bc74b86bcb","deps":["npm:@mui/icons-material","npm:@mui/material","npm:react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.spec.tsx","hash":"bd89a59660cf03e8cd28252a21d958be65295502","deps":["npm:@testing-library/react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.stories.tsx","hash":"2d939604e03b5b1857074fc9686220c6fa1ce2eb","deps":["npm:@mui/material","npm:@storybook/react"]},{"file":"libs/common-react/src/lib/components/side-nav/side-nav.tsx","hash":"b150c7377635b2c11d666e4901737c77c96bb39e","deps":["npm:@mui/material","npm:@mui/icons-material","npm:react"]},{"file":"libs/common-react/src/lib/hooks/index.ts","hash":"c1213d81a6fb13cdeb43b0b29faebcfd60170c8b"},{"file":"libs/common-react/src/lib/hooks/use-config.ts","hash":"77aab219f00359a5d780e998e864deff6ffc253b","deps":["npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-local-forage.ts","hash":"911fa73943b7cf3544d75b5e7d92d46b6a9ec94a","deps":["npm:localforage","npm:react"]},{"file":"libs/common-react/src/lib/hooks/use-nx-graph.ts","hash":"0cb1027798878aa5b6e2b4667bb974c4640aed70","deps":["npm:react"]},{"file":"libs/common-react/src/lib/types/base-config.ts","hash":"5648d8afc499d735be0b82653fd3120e882276a3"},{"file":"libs/common-react/src/lib/types/index.ts","hash":"237f6b6a13bf4305f6e59a3c3b4fbc02cea5ae3b"},{"file":"libs/common-react/src/lib/utils/combine-components.tsx","hash":"6e13194af9442ef6c8e506b8240596ee89c73deb","deps":["npm:react"]},{"file":"libs/common-react/src/lib/utils/get-config.ts","hash":"221f2ce1a2b265237d219f6091e62b8a073ee0ba"},{"file":"libs/common-react/src/lib/utils/get-nx-graph.ts","hash":"9c87613999586cf84dd4dcfdfa6ebb6fcb5e79e8"},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.spec.ts","hash":"573db404eb241631ca259c521bf5a906dd8b520d"},{"file":"libs/common-react/src/lib/utils/get-projects-by-target.ts","hash":"0b8a3e7fdb9092e8827c2f6c96b8d4b62487ef6f"},{"file":"libs/common-react/src/lib/utils/index.ts","hash":"d39a90a988a6155d294de5e57515d1c88e58991d"},{"file":"libs/common-react/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/common-react/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/common-react/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}},{"name":"neows-common","type":"lib","data":{"tags":[],"root":"libs/neows-common","files":[{"file":"libs/neows-common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/neows-common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/neows-common/jest.config.ts","hash":"0c0142b3bb2686c0b77fa43325484be40ba8eec8"},{"file":"libs/neows-common/package.json","hash":"d15ee95d3841caef057842ea26bbd43a25864eab"},{"file":"libs/neows-common/project.json","hash":"0d3678471b8fdbf40d5106ac57b6cac914fdf17d"},{"file":"libs/neows-common/README.md","hash":"a7f28c39dc4b007e4e22001a141a6ea36a87620e"},{"file":"libs/neows-common/src/index.ts","hash":"568a89cea132b05294f045ebec663db8501fc4fe"},{"file":"libs/neows-common/src/lib/models/feed-request.ts","hash":"74cf2d16338023ff42ef40dc1f39a1f465337b6e"},{"file":"libs/neows-common/src/lib/models/feed-response.ts","hash":"aa686c26f2c3a0e24448c83e8017f2975db8b8e0"},{"file":"libs/neows-common/src/lib/models/index.ts","hash":"8975574edf44027a870e1abe6b826e16d617209f"},{"file":"libs/neows-common/src/lib/models/lookup-request.ts","hash":"9cfb8fe34f6e83e0f0693d21255a4da4f1d0dfc4"},{"file":"libs/neows-common/src/lib/models/lookup-response/index.ts","hash":"6d3526684ed429a991a10cd5d3722c04968cc349"},{"file":"libs/neows-common/src/lib/models/lookup-response/lookup-close-approach-data.ts","hash":"71896ef0e978f65ea64a5e9e1c5c540b7e4ccdca"},{"file":"libs/neows-common/src/lib/models/lookup-response/lookup-estimated-diameter.ts","hash":"d71be30e69c0b536712d2373cabe8fbce1c77d4b"},{"file":"libs/neows-common/src/lib/models/lookup-response/lookup-orbital-data.ts","hash":"47130c15bdc322870b77a04a9c4ccbd56c0b52e0"},{"file":"libs/neows-common/src/lib/models/lookup-response/lookup-response.ts","hash":"4b971d79791b53edd7ed8cea1fd3f179651862fb"},{"file":"libs/neows-common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/neows-common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/neows-common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}},{"name":"apod-common","type":"lib","data":{"tags":[],"root":"libs/apod-common","files":[{"file":"libs/apod-common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/apod-common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/apod-common/jest.config.ts","hash":"5b6b61efda77e0af5a260b752113531c29865950"},{"file":"libs/apod-common/package.json","hash":"8570c15d288e8e738b8aa73056a104635713ff28"},{"file":"libs/apod-common/project.json","hash":"566bc34a85df49fe65e62b28e5c03dea82278b2b"},{"file":"libs/apod-common/README.md","hash":"080fe54d6cf57159cc7e2501460ac7373994a555"},{"file":"libs/apod-common/src/index.ts","hash":"30d31ebcaa7069ad5b4d489e6499893ad7afa26f"},{"file":"libs/apod-common/src/lib/models/apod-request-params.ts","hash":"ed068ae67c09c45fcf6d9847cce5f4300122fac6"},{"file":"libs/apod-common/src/lib/models/apod-response.ts","hash":"e567a357f33c76dff39a9259d4e36333ce910489"},{"file":"libs/apod-common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/apod-common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/apod-common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}},{"name":"nivl-common","type":"lib","data":{"tags":[],"root":"libs/nivl-common","files":[{"file":"libs/nivl-common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/nivl-common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/nivl-common/jest.config.ts","hash":"83bbfa623fa24ec6027b5866dd56e43a4c3555ff"},{"file":"libs/nivl-common/package.json","hash":"b2f272b1e8960d81810ee1f26cac474d0b60b74f"},{"file":"libs/nivl-common/project.json","hash":"986b0d2e650186ccccc203965ca84106a0488922"},{"file":"libs/nivl-common/README.md","hash":"e301c9654a9bafbe3dec165ef6dbb6505394f142"},{"file":"libs/nivl-common/src/index.ts","hash":"556f49ebf28bb8da1bd7bab2a50b176f92c68400"},{"file":"libs/nivl-common/src/lib/nivl-common.spec.ts","hash":"0cca8773600fcf0e110d9b5b4ea1c5b331884a57"},{"file":"libs/nivl-common/src/lib/nivl-common.ts","hash":"7eeb0ae03f0faaf1202db9056d902d1338ff63fd"},{"file":"libs/nivl-common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/nivl-common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/nivl-common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}},{"name":"storybook","type":"lib","data":{"tags":[],"root":"libs/storybook","files":[{"file":"libs/storybook/.babelrc","hash":"ccae900be42788285eb6e1b3a2af4b81f56f14fe"},{"file":"libs/storybook/.eslintrc.json","hash":"734ddaceea447738208c9519158ad6b3062f3929"},{"file":"libs/storybook/.storybook/main.js","hash":"b274f2bef88b29d7aa5fc0f4b63c1fb83b8aba96"},{"file":"libs/storybook/.storybook/preview-head.html","hash":"31db416a9aabb1122a1a6e59418a61272abebc0c"},{"file":"libs/storybook/.storybook/tsconfig.json","hash":"5236331a19174caa1865949505d8ce05a8163da9"},{"file":"libs/storybook/jest.config.ts","hash":"d6e42f3cbe680e87312920043cf29c1665fabe9b"},{"file":"libs/storybook/package.json","hash":"1f030c64f2bf441f12bd8b21015a4b4936dfb101"},{"file":"libs/storybook/project.json","hash":"2ddbff2605317e748f2e13a3a0431d89bd389f81"},{"file":"libs/storybook/README.md","hash":"c306e6e0eae27e2bfc81452ae718cc3303644c2f"},{"file":"libs/storybook/src/index.ts","hash":"fb1481ec27960d4ff8714ef327c02b3939c32312"},{"file":"libs/storybook/src/lib/storybook-landing.spec.tsx","hash":"cf98d24b844457a1a5d303f3d685a8cbf561d14d","deps":["npm:@testing-library/react"]},{"file":"libs/storybook/src/lib/storybook-landing.stories.tsx","hash":"1077d8f56b34ca2b9f8e07a33947ddfb279b71fa","deps":["npm:@mui/material","npm:@storybook/react"]},{"file":"libs/storybook/src/lib/storybook-landing.tsx","hash":"a96abdad9b66b78a33e24d7eb76a10745314fa5e","deps":["npm:@mui/material","npm:react"]},{"file":"libs/storybook/tsconfig.json","hash":"9fff9cc2db0cca15bc96bf1cde3e27146d3922f2"},{"file":"libs/storybook/tsconfig.lib.json","hash":"2e54c51309bc084f59acb6b55604a4803b3fb238"},{"file":"libs/storybook/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}},{"name":"common","type":"lib","data":{"tags":[],"root":"libs/common","files":[{"file":"libs/common/.babelrc","hash":"cf7ddd99c615a064ac18eb3109eee4f394ab1faf"},{"file":"libs/common/.eslintrc.json","hash":"9d9c0db55bb1e91c5f2e7b64a02bc6bf69fc7cb5"},{"file":"libs/common/jest.config.ts","hash":"43acc9da0efabd776fc72123e32ef2199372a264"},{"file":"libs/common/package.json","hash":"4e5232467c62a9b748b0ad85f65a3b2101117865"},{"file":"libs/common/project.json","hash":"d8b79654a44cb780085f76ef09900ceedac3b999"},{"file":"libs/common/README.md","hash":"0246461f2c49545e5963fdbb5798244091246ac2"},{"file":"libs/common/src/index.ts","hash":"efb36b5cbe0761ecb2c5317b79268e110d295175"},{"file":"libs/common/src/lib/models/document-with-id.ts","hash":"2e9e79933c5773b6e0422aff32ac7b94acbbac43"},{"file":"libs/common/src/lib/models/index.ts","hash":"dbc33d1d2e816fe7dcb1493604af1b4d9f597b7f"},{"file":"libs/common/src/lib/utils/common-logger.spec.ts","hash":"22f06f1c9eef62f3606def8be8d85781d29c36ca"},{"file":"libs/common/src/lib/utils/common-logger.ts","hash":"05e25683cdb8adea808b885ca271941d9955a9d5"},{"file":"libs/common/src/lib/utils/index.ts","hash":"97e7cd56dd8a44356ad42e260984b5ba73cd2efe"},{"file":"libs/common/tsconfig.json","hash":"e258886ffc933cca0326ceb2ee4fde881378131b"},{"file":"libs/common/tsconfig.lib.json","hash":"0e2a172abd561482f8c5e4d9ad900e03a9e48260"},{"file":"libs/common/tsconfig.spec.json","hash":"ff08addd60ff581234ec9423d2bb90f31d8166e8"}]}}],"dependencies":{"internal-client-e2e":[{"source":"internal-client-e2e","target":"internal-client","type":"implicit"}],"common-react-e2e":[{"source":"common-react-e2e","target":"common-react","type":"implicit"}],"internal-client":[{"source":"internal-client","target":"common","type":"implicit"},{"source":"internal-client","target":"common-react","type":"implicit"}],"storybook-e2e":[{"source":"storybook-e2e","target":"storybook","type":"implicit"}],"common-react":[],"neows-common":[],"apod-common":[],"nivl-common":[],"storybook":[],"common":[]},"layout":{"appsDir":"apps","libsDir":"libs"},"affected":[],"focus":null,"groupByFolder":false,"exclude":[]};