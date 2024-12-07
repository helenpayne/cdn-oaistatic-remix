import{aN as j,bf as A,r as h,ad as C,a1 as O,aK as D,m as e,a2 as I,a3 as T,a5 as t,bQ as m,Z as v,d_ as B,bY as R,d$ as U,a6 as E,bo as _}from"./eljox9y9liclbxjs.js";import{ay as Y,Z as z,bp as H,bq as L,br as F,bs as K,bt as k,b0 as b,bu as g}from"./q02ioa5nz1msdn73.js";import{u as q}from"./fjii1rhgftspjqgz.js";import"./mov0dqfy71k4mkbp.js";import"./l0xkd1ou0a6b53wu.js";import"./d6zp3a3jsn0b88yi.js";function G(){const c=Y(),a=j(),{data:i}=A(),r=a!=null||i!=null,[l,o]=h.useState(!1),M=C(),n=i==null?void 0:i.accountItems,f=q((a==null?void 0:a.id)??""),w=a==null?void 0:a.id,u=n==null?void 0:n.find(d=>d.id===w),W=(a==null?void 0:a.isOwnerOfAccount())&&a.isTeam()&&!a.hasPaidSubscription(),N=(a==null?void 0:a.isOwnerOfAccount())&&a.isTeam()&&a.hasPaidSubscription(),p=n==null?void 0:n.filter(d=>!d.isDeactivated()),x=O(),S=D(),P=h.useCallback(()=>{o(!0),z.setPurchaseWorkspaceData({minimumSeats:Math.max(f,H),existingAccount:u}),o(!1)},[f,u]),y=async()=>{o(!0);try{const d=await v.fetchCustomerPortalUrl();M.push(d.url),o(!1)}catch{o(!1),S.warning(x.formatMessage(s.unableToOpenStripeDashboard),{hasCloseButton:!0})}};return a==null||!u||!p?e.jsx(e.Fragment,{}):e.jsx(I,{type:"success",onClose:T,isOpen:r,title:e.jsx("span",{className:"text-lg",children:e.jsx(t,{...s.workspaceDeactivated})}),children:e.jsxs("div",{className:"flex flex-col items-center justify-center gap-4",children:[e.jsxs("div",{className:"flex w-full items-center gap-4",children:[e.jsx(L,{src:u.data.profilePictureUrl,size:"large"}),e.jsx("div",{className:"font-semibold",children:u.data.name})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.workspaceDeactivated})}),e.jsxs("ul",{className:"list-disc pl-5",children:[e.jsx("li",{className:"mb-1",children:e.jsx(t,{...s.chatHistoryUnavailable})}),e.jsx("li",{children:e.jsx(t,{...s.otherWorkspacesAvailable})})]})]}),W&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.purchaseNewSubscription})}),e.jsx(m,{className:"m-auto mt-2 w-full",loading:l,onClick:P,children:e.jsx(t,{...s.purchaseNewSubscriptionButton})})]}),N&&e.jsxs("div",{className:"flex w-full flex-col",children:[e.jsx("p",{children:e.jsx(t,{...s.resolveOutstandingInvoice})}),e.jsx(m,{className:"m-auto mt-2 w-full",loading:l,onClick:y,children:e.jsx(t,{...s.manageSubscriptionButton})})]}),e.jsx(F,{}),e.jsx("div",{className:"w-full justify-center",children:p.length>0?e.jsxs(e.Fragment,{children:[e.jsx("h3",{className:"mb-2 text-base font-bold",children:e.jsx(t,{...s.selectWorkspace})}),e.jsx(K,{data:p})]}):e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("h3",{className:"text-base font-bold",children:e.jsx(t,{...s.createPersonalWorkspace})}),e.jsx(t,{...s.deactivatedWorkspaceReason})]}),e.jsxs("div",{className:"flex w-full items-center gap-4",children:[c&&c.picture&&e.jsx("img",{alt:"Profile",src:c.picture,width:k.workspaceMedium,height:k.workspaceMedium,className:"flex items-center justify-center rounded-sm"}),e.jsx("span",{className:"font-semibold",children:c&&e.jsx("span",{children:c.name})})]}),e.jsx("div",{className:"ml-auto",children:e.jsx(m,{title:x.formatMessage(s.createPersonalWorkspaceButton),loading:l,onClick:async()=>{o(!0),await v.upsertPersonalWorkspace(),B(U),R()},color:"primary",className:"ml-4"})})]})})]})})}const s=E({workspaceDeactivated:{id:"deactivatedWorkspaceModal.workspaceDeactivated",defaultMessage:"Your workspace has been deactivated"},workspaceDeactivatedDesc:{id:"deactivatedWorkspaceModal.workspaceDeactivatedDesc",defaultMessage:"Your workspace has been deactivated."},chatHistoryUnavailable:{id:"deactivatedWorkspaceModal.chatHistoryUnavailable",defaultMessage:"Your chat history and settings will not be available."},otherWorkspacesAvailable:{id:"deactivatedWorkspaceModal.otherWorkspacesAvailable",defaultMessage:"You will still be able to use ChatGPT with the other workspaces associated with this email address."},selectWorkspace:{id:"deactivatedWorkspaceModal.selectWorkspace",defaultMessage:"Select a workspace to continue"},createPersonalWorkspace:{id:"deactivatedWorkspaceModal.createPersonalWorkspace",defaultMessage:"Create a personal workspace to continue"},deactivatedWorkspaceReason:{id:"deactivatedWorkspaceModal.deactivatedWorkspaceReason",defaultMessage:"Because your workspace has been deactivated, you need to create a personal workspace to continue using ChatGPT."},profileAlt:{id:"deactivatedWorkspaceModal.profileAlt",defaultMessage:"Profile"},createPersonalWorkspaceButton:{id:"deactivatedWorkspaceModal.createPersonalWorkspaceButton",defaultMessage:"Create a personal workspace"},unableToOpenStripeDashboard:{id:"deactivatedWorkspaceModal.unableToOpenStripeDashboard",defaultMessage:"Unable to open Stripe dashboard"},purchaseNewSubscription:{id:"deactivatedWorkspaceModal.purchaseNewSubscription",defaultMessage:"You can reactivate your workspace by purchasing a new subscription."},purchaseNewSubscriptionButton:{id:"deactivatedWorkspaceModal.purchaseNewSubscriptionButton",defaultMessage:"Purchase subscription"},resolveOutstandingInvoice:{id:"deactivatedWorkspaceModal.resolveOutstandingInvoice",defaultMessage:"You can reactivate your workspace by resolving an outstanding invoice on your subscription."},manageSubscriptionButton:{id:"deactivatedWorkspaceModal.manageSubscriptionButton",defaultMessage:"Manage subscription"}});function ee(){const c=b(g.workspaces),a=j(),i=b(g.workspaceId),r=c.find(o=>o.id===i),l=_();return h.useEffect(()=>{a!=null&&a.data&&(!r||!r.deactivated)&&l("/")},[a,r,l]),a!=null&&a.data&&(!r||!r.deactivated)?e.jsx("div",{}):e.jsx(G,{})}export{ee as default};
//# sourceMappingURL=kbgad7332kb6arm5.js.map
