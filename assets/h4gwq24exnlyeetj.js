import{r as g,bN as w,m as e,ad as y,el as b,a5 as n,aw as N,d8 as G,em as k,a2 as C,bd as v,a3 as S,aN as V,dA as R}from"./eljox9y9liclbxjs.js";import{ag as M,a0 as z,cs as L,bw as F}from"./q02ioa5nz1msdn73.js";import{G as _}from"./hyxwkwiq2oxw44sy.js";import{b as B,w as T,m as A}from"./btkmfibrorj6h94u.js";import{G as O}from"./dn1fif1ik1l8seb7.js";import{B as D,D as E}from"./l0xkd1ou0a6b53wu.js";import{a4 as $,b0 as P,E as q}from"./mov0dqfy71k4mkbp.js";import{F as u,a as x,b as p,c as H,G as U}from"./ot39ij2rbh5whqm7.js";import"./ei22way1wz63smda.js";import"./gej2wzszabjtgedr.js";const W=({gizmoId:s,limit:t,cursor:o})=>N({queryFn:async()=>M.listVersions({gizmoId:s}),queryKey:["gizmo","versions",{gizmoId:s,limit:t,cursor:o}]}),I=g.memo(function({gizmoId:t,onSelectVersion:o}){const{value:r}=w("3645668434");return!t||!r?null:e.jsx(K,{gizmoId:t,onSelectVersion:o})});function K({gizmoId:s,onSelectVersion:t}){const o=y(),{data:r}=W({gizmoId:s}),i=r?r.items.reduce((a,d)=>{const c=new Date(d.updated_at),f=`${c.getFullYear()}-${c.getMonth()+1}-${c.getDate()}`;return a[f]||(a[f]=[]),a[f].push(d),a},{}):null,l=a=>{o.push(`/g/${s}/view?version=${a}`)};return i?e.jsx("div",{className:"relative h-full w-screen max-w-2xs",children:e.jsx("div",{className:"flex h-full max-w-2xs flex-col overflow-y-scroll bg-token-sidebar-surface-primary py-6 shadow-xl",children:e.jsx("div",{className:"relative flex-1 px-4 sm:px-6",children:Object.keys(i).map((a,d)=>{const c=i[a];return e.jsx(J,{date:a,entries:c,onSelectVersion:t,onRestoreVersion:l},d)})})})}):null}function J({date:s,entries:t,onSelectVersion:o,onRestoreVersion:r}){return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"border-b border-token-border-medium py-2 font-semibold uppercase text-token-text-secondary",children:e.jsx(b,{value:s,dateStyle:"medium"})}),e.jsx("div",{className:"flex flex-col space-y-2",children:t.map((i,l)=>e.jsxs("div",{className:"flex flex-row items-center justify-between border-b border-token-border-medium",onClick:()=>o(i.version),children:[e.jsx("span",{className:"grow p-2 hover:cursor-pointer hover:bg-token-sidebar-surface-tertiary",children:e.jsx(b,{value:i.updated_at,timeStyle:"short"})}),e.jsx(Q,{onRestoreVersion:()=>{r(i.version)}})]},l))})]})}function Q({onRestoreVersion:s}){return e.jsx(e.Fragment,{children:e.jsx(D,{sideOffset:8,triggerButton:e.jsx("button",{color:"secondary",className:"rounded-lg px-3 py-2 text-token-text-primary duration-100 ease-in hover:bg-token-sidebar-surface-tertiary active:scale-[0.9]",children:e.jsx($,{className:"icon-md"})}),children:e.jsxs(E.Item,{className:"items-center",disabled:!1,onClick:s,children:[e.jsx(P,{className:"icon-md"}),e.jsx(n,{id:"gizmoVersionHistory.restoreVersionLabel",defaultMessage:"Restore this version"})]})})})}const Y=({gizmoId:s,version:t})=>N({queryFn:async()=>M.getVersion({gizmoId:s,version:t}),queryKey:["gizmo","version",{gizmoId:s,version:t}]}),X=(s,t)=>`/gpts/editor/${s}?version=${t}`;function Z({gizmoId:s}){var j;const[t,o]=g.useState(null),r=y(),{data:i}=B(s),l=(j=i==null?void 0:i.gizmo.current_user_permission)==null?void 0:j.can_write,a=T(),[d,c]=g.useState(!1),f=()=>{t?r.push(X(s,t)):r.push(A(s))};return e.jsxs("div",{className:"flex h-screen w-full flex-col items-center",children:[e.jsx("div",{className:"relative flex h-16 w-full items-center justify-between gap-2 border-b border-token-border-medium px-3",children:i&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex cursor-pointer items-center gap-2",onClick:()=>r.back(),children:[e.jsx(q,{className:"icon-lg"}),e.jsx("div",{className:"font-semibold",children:l?e.jsx(n,{id:"gizmoReadOnly.versionHistoryTitle",defaultMessage:"Version History"}):e.jsx(n,{id:"gizmoReadOnly.configurationTitle",defaultMessage:"Configuration"})})]}),e.jsx("div",{className:"mr-4 flex items-center gap-2",children:l?e.jsx(z,{color:"secondary",onClick:()=>{t&&t!==i.gizmo.live_version&&i.tools.find(m=>{var h;return m.type===G.JIT_PLUGIN&&((h=m.metadata.auth)==null?void 0:h.type)!==k.None})?c(!0):f()},children:e.jsx(n,{id:"gizmo.readonly.restoreVersion",defaultMessage:"Restore this version"})}):e.jsx(z,{color:"secondary",loading:a.isPending,onClick:async()=>{const m=await a.mutateAsync({gizmoId:s});m.gizmo.id&&r.push(`/gpts/editor/${m.gizmo.id}`)},children:e.jsx(n,{id:"gizmo.readonly.duplicate",defaultMessage:"Duplicate"})})})]})}),e.jsxs("div",{className:"flex h-full w-full items-center",children:[l&&e.jsx(I,{gizmoId:s,onSelectVersion:m=>{o(m)}}),e.jsx(se,{gizmoId:s,version:t})]}),d&&e.jsx(ee,{onClose:()=>{c(!1)},onContinue:f})]})}function ee({onClose:s,onContinue:t}){const[o,r]=g.useState(!1);return e.jsx(C,{isOpen:!0,onClose:s,type:"warning",showCloseButton:!0,title:e.jsx(n,{id:"gizmoReadOnly.authModalWarningTitle",defaultMessage:"Reset Authentication for Custom Actions"}),primaryButton:e.jsx(v,{onClick:()=>{r(!0),t()},loading:o,color:"secondary",children:e.jsx(n,{id:"gizmoReadOnly.authModalContinueButton",defaultMessage:"Continue"})}),secondaryButton:e.jsx(v,{onClick:s,color:"secondary",children:e.jsx(n,{id:"gizmoReadOnly.authModalCancelButton",defaultMessage:"Cancel"})}),size:"normal",children:e.jsx(n,{id:"gizmoReadOnly.authModalWarningBody",defaultMessage:"Restoring this version will reset authentication of your custom actions. You may need to reconfigure each custom action afterwards."})})}function se({gizmoId:s,version:t}){const{data:o}=Y({gizmoId:s,version:t}),[r,i]=g.useState(null);if(!o)return null;const l=o.tools.filter(a=>a.type===G.JIT_PLUGIN);return e.jsx("div",{className:"flex max-h-[80vh] flex-grow justify-center overflow-y-auto",children:e.jsxs("div",{className:"flex w-full max-w-2xl flex-col text-sm",children:[e.jsx(u,{className:"self-center",children:e.jsx(_,{src:o.gizmo.display.profile_picture_url,isFirstParty:!1,className:"h-12 w-12"})}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(n,{id:"gizmo.readonly.nameLabel",defaultMessage:"Name"})}),e.jsx(p,{type:"text",value:o.gizmo.display.name??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(n,{id:"gizmo.readonly.descriptionLabel",defaultMessage:"Description"})}),e.jsx(p,{type:"text",value:o.gizmo.display.description??"",disabled:!0,className:"bg-token-main-surface-secondary"})]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(n,{id:"gizmo.readonly.instructionsLabel",defaultMessage:"Instructions"})}),e.jsx(H,{className:"resize-none bg-token-main-surface-secondary",rows:8,value:o.gizmo.instructions??"",disabled:!0})]}),o.gizmo.display.prompt_starters&&o.gizmo.display.prompt_starters.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(n,{id:"gizmo.readonly.conversationStartersLabel",defaultMessage:"Conversation starters"})}),o.gizmo.display.prompt_starters.map((a,d)=>e.jsx(p,{type:"text",value:a,disabled:!0,className:"resize-none bg-token-main-surface-secondary"},d))]}),o.files&&o.files.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(n,{id:"gizmo.readonly.knowledgeLabel",defaultMessage:"Knowledge"})}),o.files.map((a,d)=>e.jsx(L,{file:a.name,fileId:a.id},d))]}),e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(n,{id:"gizmo.readonly.capabilitiesLabel",defaultMessage:"Capabilities"})}),e.jsx(O,{enabledTools:o.tools,onEnabledToolsChange:S})]}),l&&l.length>0&&e.jsxs(u,{children:[e.jsx(x,{label:e.jsx(n,{id:"gizmo.readonly.actionsLabel",defaultMessage:"Actions"})}),l.map((a,d)=>{const c=a;return e.jsx(U,{isDisabled:!1,actionTool:c,onShowActionsEditor:()=>{(r==null?void 0:r.metadata.action_id)===c.metadata.action_id?i(null):i(c)}},d)}),r&&e.jsx("textarea",{readOnly:!0,value:r.metadata.raw_spec??"",className:"mb-16 block h-96 w-full border-t-0 border-token-main-surface-tertiary bg-transparent p-2 font-mono text-xs text-token-text-primary"})]})]})})}const me=()=>(R(),null);function xe(){var l;const s=V(),t=y(),o=((l=t.query)==null?void 0:l.gizmoId)??"",r=F(o),{value:i}=w("3645668434");return g.useEffect(()=>{s!=null&&s.isFree()&&t.push("/")},[s,t]),i?e.jsx(Z,{gizmoId:r}):null}export{me as clientLoader,xe as default};
//# sourceMappingURL=h4gwq24exnlyeetj.js.map
