"use strict";(self["webpackChunksyc"]=self["webpackChunksyc"]||[]).push([[14],{1014:function(t,a,e){e.r(a),e.d(a,{default:function(){return k}});var r=e(3396),o=e(7139);const s={class:"container"},c={class:"row"},l={key:0,class:"link-wrap"};function i(t,a,e,i,p,y){const n=(0,r.up)("Nav"),u=(0,r.up)("router-link"),h=(0,r.up)("BreadCrumbs"),g=(0,r.up)("router-view"),d=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(n),(0,r._)("div",s,[(0,r._)("div",c,[t.$route.params.type?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(u,{to:"/worksboard/gallery",class:(0,o.C_)({active:"gallery"===t.$route.params.type})},{default:(0,r.w5)((()=>[(0,r.Uk)("gallery")])),_:1},8,["class"]),(0,r.Wm)(u,{to:"/worksboard/photography/all",class:(0,o.C_)({active:"photography"===t.$route.params.type})},{default:(0,r.w5)((()=>[(0,r.Uk)("photography")])),_:1},8,["class"]),(0,r.Wm)(u,{to:"/worksboard/videography/all",class:(0,o.C_)({active:"videography"===t.$route.params.type})},{default:(0,r.w5)((()=>[(0,r.Uk)("videography")])),_:1},8,["class"])])):(0,r.kq)("",!0),t.$route.params.type?((0,r.wg)(),(0,r.j4)(h,{key:1})):(0,r.kq)("",!0),(0,r.Wm)(g,{onEmitProject:y.filterProject,galleryData:p.galleryData,recentData:p.recentData,categoryData:y.categoryData,projectData:p.projectData},null,8,["onEmitProject","galleryData","recentData","categoryData","projectData"])])]),(0,r.Wm)(d)],64)}e(7658);var p=e(5029),y=e(3480);const n={class:"category-list"};function u(t,a,e,s,c,l){const i=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("ul",n,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(c.categoryList,((t,a)=>((0,r.wg)(),(0,r.iD)("li",{key:a},[(0,r.Wm)(i,{to:`/worksboard/${l.type}/${t}`,class:(0,o.C_)({active:l.category===t}),onClick:a=>l.click(t)},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t),1)])),_:2},1032,["to","class","onClick"])])))),128))])}var h={data(){return{categoryList:["all","landscape","commercial","documentary"]}},computed:{type(){return this.$route.params.type},category(){return this.$route.params.category}},methods:{click(t){this.$emit("emit-category",t)}},created(){}},g=e(89);const d=(0,g.Z)(h,[["render",u],["__scopeId","data-v-581fdf43"]]);var D=d,m={name:"works",components:{Nav:p.Z,Footer:y.Z,BreadCrumbs:D},data(){return{typeLinks:["gallery","photography","videography"],allData:[],galleryData:[[],[]],projectData:{},recentData:{}}},computed:{typeData(){return this.allData.filter((t=>t.type===this.$route.params.type))},categoryData(){return this.typeData.filter((t=>"all"===this.$route.params.category?t.category:t.category===this.$route.params.category))},project(){return this.$route.params.project}},watch:{project(){this.filterProject(this.project)}},methods:{getProjectData(){const t="1Qvk6q6zxcVPyCg7hz782qem1zADCnIr_7JtCCBMslw8",a=`https://sheets.googleapis.com/v4/spreadsheets/${t}/values/test`;this.$http.get(a,{params:{key:"AIzaSyBdjPypTptcwPIhBI34Tt4-4YqXci_ayFk"}}).then((t=>{const a=[];t.data.values.forEach((t=>{a.push({type:t[0],category:t[1],title:t[2],imgList:JSON.parse(t[3]),video:t[4],description:t[5],preview:t[6],date:new Date(t[7])})})),this.allData=a,this.filterGallery(),this.$route.params.project&&(this.projectData=this.categoryData.filter((t=>t.title===this.$route.params.project))[0]),this.filterRencent()}))},filterGallery(){this.galleryData[0]=this.allData.filter((t=>"videography"===t.type)),this.galleryData[1]=this.allData.filter((t=>"photography"===t.type&&["ZIGZAG","嘉義市東公有零售市場","合歡山"].includes(t.title)))},filterProject(t){this.projectData=this.categoryData.filter((a=>a.title===t))[0]},filterRencent(){this.recentData=this.allData.reduce(((t,a)=>t.date>a.date?t:a))}},created(){this.getProjectData()}};const f=(0,g.Z)(m,[["render",i],["__scopeId","data-v-48cedffd"]]);var k=f}}]);
//# sourceMappingURL=14.01945fcb.js.map