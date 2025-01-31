import{P as g}from"./PureTaskList-BXGhj9sG.js";import{S as L,i as E,s as b,h as I,e as N,b as w,c as j,u as q,j as A,k as C,t as K,m as M,f as W}from"./index-DximhN0d.js";import{actionsData as O,Default as n}from"./Task.stories-DnJd7-fL.js";import"./Task-CS5RSB5J.js";import"./v4-CQkTLCs1.js";function z(e){let a,r;const o=e[1].default,t=I(o,e,e[0],null);return{c(){a=N("div"),t&&t.c(),w(a,"class","svelte-1isti8q")},m(s,d){j(s,a,d),t&&t.m(a,null),r=!0},p(s,[d]){t&&t.p&&(!r||d&1)&&q(t,o,s,s[0],r?C(o,s[0],d,null):A(s[0]),null)},i(s){r||(K(t,s),r=!0)},o(s){M(t,s),r=!1},d(s){s&&W(a),t&&t.d(s)}}}function B(e,a,r){let{$$slots:o={},$$scope:t}=a;return e.$$set=s=>{"$$scope"in s&&r(0,t=s.$$scope)},[t,o]}class P extends L{constructor(a){super(),E(this,a,B,z,b,{})}}P.__docgen={version:3,name:"MarginDecorator.svelte",data:[],computed:[],methods:[],components:[],description:null,keywords:[],events:[],slots:[{keywords:[],visibility:"public",description:"",name:"default"}],refs:[]};const R={component:g,title:"PureTaskList",tags:["autodocs"],decorators:[()=>P],render:e=>({Component:g,props:e,on:{...O}})},i={args:{tasks:[{...n.args.task,id:"1",title:"Task 1"},{...n.args.task,id:"2",title:"Task 2"},{...n.args.task,id:"3",title:"Task 3"},{...n.args.task,id:"4",title:"Task 4"},{...n.args.task,id:"5",title:"Task 5"},{...n.args.task,id:"6",title:"Task 6"}]}},c={args:{tasks:[...i.args.tasks.slice(0,5),{id:"6",title:"Task 6 (pinned)",state:"TASK_PINNED"}]}},l={args:{tasks:[],loading:!0}},u={args:{...l.args,loading:!1}};var m,p,k;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // The data was inherited from the Default story in task.stories.js.
    tasks: [{
      ...TaskStories.Default.args.task,
      id: '1',
      title: 'Task 1'
    }, {
      ...TaskStories.Default.args.task,
      id: '2',
      title: 'Task 2'
    }, {
      ...TaskStories.Default.args.task,
      id: '3',
      title: 'Task 3'
    }, {
      ...TaskStories.Default.args.task,
      id: '4',
      title: 'Task 4'
    }, {
      ...TaskStories.Default.args.task,
      id: '5',
      title: 'Task 5'
    }, {
      ...TaskStories.Default.args.task,
      id: '6',
      title: 'Task 6'
    }]
  }
}`,...(k=(p=i.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};var f,T,h;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Default story.
    tasks: [...Default.args.tasks.slice(0, 5), {
      id: '6',
      title: 'Task 6 (pinned)',
      state: 'TASK_PINNED'
    }]
  }
}`,...(h=(T=c.parameters)==null?void 0:T.docs)==null?void 0:h.source}}};var _,D,S;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    tasks: [],
    loading: true
  }
}`,...(S=(D=l.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var $,v,y;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    // Shaping the stories through args composition.
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false
  }
}`,...(y=(v=u.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};const U=["Default","WithPinnedTasks","Loading","Empty"];export{i as Default,u as Empty,l as Loading,c as WithPinnedTasks,U as __namedExportsOrder,R as default};
