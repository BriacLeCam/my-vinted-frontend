"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1266],{11356:function(e,t,r){var n=r(35250),i=r(3283),o=r(66494),a=r(62278),s=r(29500),l=r(79200),d=r(2117),c=r(57106),u=r(14475),f=r(94440),m=r(88836),g=r(44559),h=r(69894),x=r(42491),v=r(4948),Z=r(5918);t.Z=e=>{let{isLoading:t=!1,error:r,walletBalance:y,activePayInMethod:C,selectedCreditCard:p,onPaymentMethodSelect:I}=e,S=(0,u.Z)("payment_method_selection"),_=(0,i.v9)(x.K);function P(){return(0,n.jsx)(a.Z,{name:d.Z,color:a.Z.Color.GreyscaleLevel3,testId:"extra-service-active-pay-in-method-pencil-icon"})}return t?(0,n.jsx)(f.Z,{testId:"extra-service-active-pay-in-method-loader"}):p?(0,n.jsx)(m.Z,{card:p,clickableType:h.M.AlwaysClickable,onClick:I,suffix:P()}):C?(0,n.jsx)(g.Z,{body:function(){if((null==C?void 0:C.code)===Z.u.Trustly)return C.note;if((null==C?void 0:C.code)===Z.u.Wallet&&y){let{availableAmount:e}=y;return(0,n.jsx)(o.Z,{text:S("notes.wallet",{balance:(0,v.ZO)(e,_)})})}return null}(),payInMethod:C,onClick:I,suffix:P()}):(0,n.jsx)(s.Z,{title:S("choose_payment_method"),suffix:(0,n.jsx)(a.Z,{name:c.Z,aria:{"aria-hidden":"true"}}),validation:r&&(0,n.jsx)(l.Z,{text:r,theme:"warning"}),type:s.Z.Type.Navigating,styling:s.Z.Styling.Wide,testId:"extra-service-active-pay-in-method-choose-payment-method",onClick:I})}},68577:function(e,t,r){r.d(t,{Z:function(){return en}});var n=r(35250),i=r(70079),o=r(3283),a=r(91808),s=r(79852),l=r(82599),d=r(65529),c=r(81518),u=r(79699),f=r(85088),m=r(94440),g=r(5918),h=r(89842),x=r(14475),v=r(57158),Z=r(14217),y=e=>{let{screen:t,orderId:r,orderType:n,shouldTrack:o}=e,{track:a}=(0,v.Z)();(0,i.useEffect)(()=>{r&&o&&a((0,Z.NN)({screen:t,orderId:r,orderType:n}))},[a,t,r,n,o])},C=e=>{let{show:t,orderId:r,orderType:i,orderPayable:a,selectedCreditCardId:v,selectedPayInMethodId:Z,onBack:C,onCancel:p,onConfirm:I,onAddCreditCard:S}=e,_=(0,x.Z)("checkout.payment.select"),P=(0,x.Z)("payment_method_selection"),j=(0,o.v9)(h.PG),w=(0,o.v9)(h.pd),k=(0,o.v9)(h.nL),R=(0,o.v9)(e=>h.P3(e,null==a?void 0:a.amount));function b(){C()}function W(e){S(e)}function N(e,t){if(e.code===g.u.CreditCard&&!t){W(e);return}I(e,t)}return y({shouldTrack:t,orderId:r,orderType:i,screen:u.l.PaymentOptions}),(0,n.jsx)(d.Z,{show:t,hasScrollableContent:!0,testId:"extra-service-pay-in-method-selection-modal",children:(0,n.jsxs)("div",{className:"u-fill-width",children:[(0,n.jsx)(s.Z,{body:_("title"),right:(0,n.jsx)(l.IM,{inline:!0,iconName:c.Z,styling:l.IM.Styling.Flat,testId:"extra-service-pay-in-method-selection-modal-close",onClick:function(){p()}})}),function(){if(!j.length)return(0,n.jsx)(m.Z,{styling:m.Z.Styling.Wide,testId:"extra-service-pay-in-methods-loader"});let e={balance:w||null,isDisabled:R,reason:P("validations.insufficient_wallet_funds")};return(0,n.jsx)(f.Z,{wrapInScrollableArea:!0,creditCards:k,wallet:e,payInMethods:j,selectedCreditCardId:v,selectedPayInMethodId:Z,trackTargetDetails:{type:i,service_order_id:r},onBack:b,onSubmit:N,onAddNewCard:W})}()]})})},p=r(94366),I=r(8951),S=r(65090),_=r(16011),P=e=>{let{show:t,onBack:r,orderId:i,orderType:a,onSuccess:s,addCardSourceParams:l,isCardAddError:d=!1}=e,c=(0,x.Z)("credit_card_add.threeds2.errors"),f=(0,o.v9)(I.PR),m=(0,p.Z)(),g=d?c("redirect_return_error"):void 0;return(y({shouldTrack:t,orderId:i,orderType:a,screen:u.l.CreditCardAdd}),f&&i)?(0,n.jsx)(S.Z,{show:t,allowSingleUse:!0,errorMessage:g,source:(0,_.ut)({orderId:i,userId:f.id,page:m,...l}),trackingTargetDetails:{service_order_id:i,type:a},onCreditCardAddSuccess:s,onBack:r}):null},j=r(18294),w=r(94838),k=e=>{var t;let{onError:r,onCancel:a,onAuthSubmitted:d}=e,u=(0,o.v9)(h.AF),f=(0,o.v9)(h.zo),[m,g]=(0,i.useState)(!0),x=null===(t=u.embedded)||void 0===t?void 0:t.authAction;return x&&f?(0,n.jsxs)("div",{className:"threeds2__challenge-modal",children:[(0,n.jsx)(s.Z,{right:(0,n.jsx)(l.IM,{inline:!0,iconName:c.Z,styling:l.IM.Styling.Flat,testId:"extra-service-payment-auth-modal--close",onClick:a})}),m?(0,n.jsx)("div",{className:"threeds2__extra-service-loader","data-testid":"3ds-loader",children:(0,n.jsx)(j.Z,{size:j.Z.Size.X2Large})}):null,(0,n.jsx)(w.Z,{authAction:x,threeDS2Config:f,onInputRequested:function(){g(!1)},onContinue:d,onError:r})]}):null},R=e=>{let{show:t,onError:r,onCancel:i,onAuthSubmitted:o}=e;return(0,n.jsx)(d.Z,{show:t,children:(0,n.jsx)(k,{onAuthSubmitted:o,onCancel:i,onError:r})})},b=r(93766),W=r(66494),N=r(62278),M=r(29500),T=r(83737),E=r(72056),A=r(15394),O=r(50225),F=r(71718),z=r(42491),Q=r(4948),L=r(81717),D=r(86978),B=r(18338),$=r(34404),q=r(25246);let X=q.L7,U=5*q.L7;var G=e=>{let{start:t,duration:r}=e,n=(0,i.useRef)(null),o=(0,i.useRef)(null),[a,s]=(0,i.useState)({state:"idle"}),l=(0,i.useCallback)(()=>{s(e=>{if(!r)return e;let t="inProgress"===e.state?e.remainingTime:r;return{remainingTime:t-X,state:t>X?"inProgress":"over"}})},[r]),d=(0,i.useCallback)(()=>{n.current&&(clearInterval(n.current),n.current=null)},[]),c=(0,i.useCallback)(()=>{n.current||(n.current=setInterval(l,X))},[l]),u=(0,i.useCallback)(()=>{o.current&&(clearTimeout(o.current),o.current=null)},[]),f=(0,i.useCallback)(()=>{o.current||(o.current=setTimeout(c,U))},[c]);return(0,i.useEffect)(()=>(t&&r?f():(d(),u(),s({state:"idle"})),()=>{d(),u(),s({state:"idle"})}),[t,r,d,c,f,u]),(0,i.useEffect)(()=>{"inProgress"!==a.state&&d()},[d,a.state]),a};let J=[$.oQ.Failure,$.oQ.Success];var K=e=>{var t;let{show:r,orderId:a,orderType:s,orderStatus:c,errorMessage:f,orderPayable:m,onContinue:g}=e,h=(0,A.Z)(),{track:C}=(0,v.Z)(),p=(0,o.v9)(z.K),I=(0,x.Z)(`extra_services.checkout.order_status_modal.${s}`),S=(0,x.Z)("extra_services.checkout.order_status_modal.common"),_=(null===(t=(0,F.Z)({shouldTrackExpose:r,abTestName:"vas_pending_state"}))||void 0===t?void 0:t.variant)||"off",P="off"!==_,w=$.uP[_],k=G({start:r&&P&&c===$.oQ.Processing,duration:w});y({orderId:a,orderType:s,screen:u.l.ExtraServicePendingPaymentModal,shouldTrack:r&&"inProgress"===k.state});let R=(0,i.useMemo)(()=>{if(!P)return null;if(c===$.oQ.Processing&&"idle"!==k.state){let e=h.formatDate(new Date(w),{second:"2-digit"});return{title:S("long_processing.title"),action:S("long_processing.action"),explanation:"inProgress"===k.state?S("long_processing.explanation.countdown",{countdownDuration:e}):S("long_processing.explanation.continue_waiting")}}return c===$.oQ.Failure?{title:S(`${c}.title`),explanation:S(`${c}.explanation`,{"help-center":e=>(0,n.jsx)(O.Z,{type:D.Z.PaymentFailed,accessChannel:L.Si.ProductLink,render:t=>(0,n.jsx)("a",{href:t,target:"_blank",rel:"noreferrer","data-testid":"failed-order-explanation-faq-link",children:e})})}),action:S(`${c}.action`)}:null},[h,c,k.state,S,w,P]);function q(){P&&"inProgress"!==k.state&&C((0,Z.Q5)({screen:u.l.ExtraServicePendingPaymentModal,target:B.U.ExtraServicePendingPaymentTryAgain,targetDetails:JSON.stringify({type:s,service_order_id:a})})),g()}if(c===$.oQ.Idle)return null;let X=m&&(0,Q.ZO)(m,p);return(0,n.jsx)(d.Z,{show:r,testId:"extra-service-order-status-modal",children:(0,n.jsxs)(M.Z,{children:[(0,n.jsx)(b.Z,{size:b.Z.Size.Large}),(0,n.jsx)("div",{className:"u-flexbox u-justify-content-center",children:function(){switch(c){case $.oQ.Success:return(0,n.jsx)(N.Z,{name:T.Z,testId:"extra-service-order-success-icon",color:N.Z.Color.Success});case $.oQ.Failure:return(0,n.jsx)(N.Z,{name:E.Z,testId:"extra-service-order-failure-icon",color:N.Z.Color.Warning});case $.oQ.Processing:default:return(0,n.jsx)(j.Z,{testId:"extra-service-order-confirmation-loader",size:j.Z.Size.XLarge})}}()}),(0,n.jsx)(b.Z,{size:b.Z.Size.X2Large}),(0,n.jsx)(W.Z,{text:(null==R?void 0:R.title)||I(`${c}.title`,{orderPayable:X}),alignment:W.Z.Alignment.Center,width:W.Z.Width.Parent,type:W.Z.Type.Heading}),(0,n.jsx)(b.Z,{size:b.Z.Size.Large}),(0,n.jsx)(W.Z,{text:f||(null==R?void 0:R.explanation)||I(`${c}.explanation`),alignment:W.Z.Alignment.Center,width:W.Z.Width.Parent}),(0,n.jsx)(b.Z,{size:b.Z.Size.X2Large}),function(){let e=P&&c===$.oQ.Processing&&"idle"!==k.state;return J.includes(c)||e?(0,n.jsx)(l.IM,{disabled:e&&"over"!==k.state,text:(null==R?void 0:R.action)||I(`${c}.action`),styling:l.IM.Styling.Filled,onClick:q,testId:"continue-button"}):null}(),function(){if("idle"===k.state||c!==$.oQ.Processing)return null;let e="inProgress"===k.state?h.formatDate(new Date(k.remainingTime),{minute:"2-digit",second:"2-digit"}):null,t="inProgress"===k.state?S("long_processing.bottom_note.countdown",{countdown:e}):S("long_processing.bottom_note.continue_waiting");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.Z,{size:b.Z.Size.Large}),(0,n.jsx)(W.Z,{text:t,type:W.Z.Type.Caption,width:W.Z.Width.Parent,alignment:W.Z.Alignment.Center})]})}()]})})},V=r(98222),H=r(36071),Y=r(90595),ee=(e,t)=>{let{relativeUrl:r,replaceHistoryState:n,urlQuery:o}=(0,Y.Z)(),a=(0,i.useRef)(t.onSuccess),s=(0,i.useRef)(t.onFailure),l=(0,i.useRef)(t.onNoResult),d=(0,i.useRef)(o);a.current=t.onSuccess,s.current=t.onFailure,l.current=t.onNoResult,d.current=o,(0,i.useEffect)(()=>{let{cardId:t,orderId:i,cardAddResult:o}=(0,_.wE)(d.current,e);if(!o||!i){var c;null===(c=l.current)||void 0===c||c.call(l);return}o===H.l_.Success&&t?a.current({cardId:t,orderId:i}):o===H.l_.Fail&&s.current({orderId:i}),n((0,_.ZY)(r,d.current))},[e,r,n])},et=r(63081),er=r(20647),en=e=>{let{show:t,onBack:r,orderId:s,orderType:l,entityType:d,orderPayable:c,onCheckoutFinish:f,addCardSourceParams:m,orderConfirmationModal:g,onInitStartAfterCardAuth:x,isOrderFree:p=!1,shouldSelectPaymentMethodFirst:I=!0}=e,S=(0,o.I0)(),{track:_}=(0,v.Z)(),[j,w]=(0,i.useState)(null),k=(0,o.v9)(h.Z3),b=(0,o.v9)(h.yv),W=(0,o.v9)(h.AF),N=(0,o.v9)(h.AV),M=(0,o.v9)(h._i),T=(0,o.v9)(e=>h.V_(e,null==c?void 0:c.amount)),E=(0,o.v9)(e=>h.b2(e,null==c?void 0:c.amount)),[A,O]=(0,i.useState)($.WR.None);(0,F.Z)({abTestName:"trustly_open_banking",shouldTrackExpose:A===$.WR.OrderConfirmation}),y({shouldTrack:A===$.WR.OrderConfirmation,orderId:s,orderType:l,screen:u.l.Checkout}),(0,i.useEffect)(()=>{S(er.Nw.getPayInMethodsRequest())},[S]),ee(l,{onSuccess:e=>{x(e.orderId),w({isError:!1,cardId:e.cardId})},onFailure:e=>{x(e.orderId),w({isError:!0})}});let z=(0,i.useCallback)((e,t)=>{S(er.Nw.setSelectedPayInMethod({creditCardId:t,selectedPayInMethodId:e.id})),O($.WR.OrderConfirmation)},[S,O]);(0,i.useEffect)(()=>{if(!t){O($.WR.None);return}if((null==j?void 0:j.cardId)&&M){z(M,j.cardId);return}if(null==j?void 0:j.isError){O($.WR.CreditCardForm);return}if(I&&!T&&!p){O($.WR.PayInMethodSelection);return}O($.WR.OrderConfirmation)},[t,s,S,p,j,T,M,I,z]),(0,i.useEffect)(()=>{!function(){let{embedded:e,payInRedirectUrl:r}=W;if(t&&A!==$.WR.None){if(e){O($.WR.PaymentAuth);return}r&&(0,et.ru)(r)}}()},[t,A,W,O]);let Q=e=>{if(s){if(_((0,Z.Q5)({target:B.U.CheckoutPayButton,targetDetails:JSON.stringify({valid:!0,service_order_id:s,type:$.M5[l],payment_method:(null==T?void 0:T.code.toLowerCase())||null})})),E&&!e){O($.WR.BlikCodeInput);return}S(er.Nw.confirmOrderPaymentRequest({orderId:s,blikCode:e,orderType:l,entityType:d,selectedCreditCardId:null==N?void 0:N.id,selectedPaymentMethodId:null==T?void 0:T.id})),O($.WR.OrderStatus)}};function L(){O($.WR.OrderConfirmation)}function D(){O($.WR.PayInMethodSelection),w(null)}function q(){O($.WR.None),S(er.Nw.cancelOrderPaymentAuth()),f(b===$.oQ.Success)}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(C,{show:A===$.WR.PayInMethodSelection,orderId:s,orderType:l,orderPayable:c,selectedCreditCardId:null==N?void 0:N.id,selectedPayInMethodId:null==T?void 0:T.id,onBack:r,onCancel:q,onAddCreditCard:function(){O($.WR.CreditCardForm)},onConfirm:z}),(0,n.jsx)(P,{show:A===$.WR.CreditCardForm,orderId:s,orderType:l,isCardAddError:null==j?void 0:j.isError,addCardSourceParams:m,onSuccess:function(e){M&&(S(er.Nw.addCreditCardSuccess({creditCard:e})),z(M,e.id))},onBack:D}),(0,n.jsx)(R,{show:A===$.WR.PaymentAuth,onError:function(e){S(er.Nw.setOrderPaymentErrorMessage({errorMessage:e})),O($.WR.OrderStatus)},onCancel:q,onAuthSubmitted:function(e){W.embedded&&(S(er.Nw.updateOrderPaymentDataRequest({state:e,paymentId:W.embedded.paymentId})),O($.WR.OrderStatus))}}),(0,n.jsx)(a.Z,{show:A===$.WR.SalesTaxInfo,messageType:"extra_service",onClose:L}),(0,n.jsx)(V.Z,{show:A===$.WR.BlikCodeInput,onInputConfirmed:e=>Q(e),onCancel:L}),(0,n.jsx)(K,{show:A===$.WR.OrderStatus,orderId:s,orderType:l,orderStatus:b,orderPayable:c,errorMessage:k,onContinue:q}),g({show:A===$.WR.OrderConfirmation,onBack:r,onConfirmOrder:()=>Q(),onShowSalesTaxModal:function(){O($.WR.SalesTaxInfo)},onPaymentMethodSelect:D})]})}}}]);
//# sourceMappingURL=1266-296eca65956a0772.js.map