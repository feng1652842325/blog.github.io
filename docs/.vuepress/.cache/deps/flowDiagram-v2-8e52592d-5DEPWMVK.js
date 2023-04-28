import {
  flowRendererV2,
  flowStyles
} from "./chunk-XP7UBXES.js";
import "./chunk-MP42IM3M.js";
import {
  flowDb,
  parser$1
} from "./chunk-O7ZQHSPU.js";
import "./chunk-7AY6KLW3.js";
import "./chunk-XICROMOY.js";
import "./chunk-K2BFLQF5.js";
import "./chunk-MGEEX2YR.js";
import "./chunk-BCHOHA7S.js";
import "./chunk-3IJCC7FF.js";
import {
  require_dist
} from "./chunk-V2F7WNFF.js";
import {
  require_dayjs_min,
  setConfig
} from "./chunk-JOU24LKT.js";
import {
  __toESM
} from "./chunk-OZI5HTJH.js";

// node_modules/_mermaid@10.1.0@mermaid/dist/flowDiagram-v2-8e52592d.js
var import_sanitize_url = __toESM(require_dist(), 1);
var import_dayjs = __toESM(require_dayjs_min(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-8e52592d-5DEPWMVK.js.map
