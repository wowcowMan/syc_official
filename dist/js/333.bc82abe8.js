"use strict";(self["webpackChunksyc"]=self["webpackChunksyc"]||[]).push([[333],{3333:function(t,a,e){e.r(a),e.d(a,{default:function(){return g}});var r=e(3396),o=e(7139);const s={class:"container"},l={key:0,class:"link-wrap"},c={key:1,class:"category-list"};function i(t,a,e,i,p,y){const h=(0,r.up)("Nav"),n=(0,r.up)("router-link"),u=(0,r.up)("router-view"),g=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(h),(0,r._)("div",s,[t.$route.params.type?((0,r.wg)(),(0,r.iD)("div",l,[(0,r.Wm)(n,{to:"/worksboard/gallery",class:(0,o.C_)({active:"gallery"===t.$route.params.type})},{default:(0,r.w5)((()=>[(0,r.Uk)("gallery")])),_:1},8,["class"]),(0,r.Wm)(n,{to:"/worksboard/photography/all",class:(0,o.C_)({active:"photography"===t.$route.params.type})},{default:(0,r.w5)((()=>[(0,r.Uk)("photography")])),_:1},8,["class"]),(0,r.Wm)(n,{to:"/worksboard/videography/all",class:(0,o.C_)({active:"videography"===t.$route.params.type})},{default:(0,r.w5)((()=>[(0,r.Uk)("videography")])),_:1},8,["class"])])):(0,r.kq)("",!0),t.$route.params.type?((0,r.wg)(),(0,r.iD)("ul",c,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(p.categoryList,((t,a)=>((0,r.wg)(),(0,r.iD)("li",{key:a},[(0,r.Wm)(n,{to:`/worksboard/${y.type}/${t}`,class:(0,o.C_)({active:y.category===t})},{default:(0,r.w5)((()=>[(0,r.Uk)((0,o.zw)(t),1)])),_:2},1032,["to","class"])])))),128))])):(0,r.kq)("",!0),(0,r.Wm)(u,{onEmitProject:y.filterProject,galleryData:p.galleryData,recentData:p.recentData,categoryData:y.categoryData,projectData:p.projectData},null,8,["onEmitProject","galleryData","recentData","categoryData","projectData"])]),(0,r.Wm)(g)],64)}e(7658);var p=e(7047),y=e(7569),h={name:"works",components:{Nav:p.Z,Footer:y.Z},data(){return{categoryList:["all","landscape","commercial","documentary"],allData:[],galleryData:[[],[]],projectData:{},recentData:{}}},computed:{typeData(){return this.allData.filter((t=>t.type===this.$route.params.type))},categoryData(){return this.typeData.filter((t=>"all"===this.$route.params.category?t.category:t.category===this.$route.params.category))},type(){return this.$route.params.type},category(){return this.$route.params.category},project(){return this.$route.params.project}},watch:{project(){this.filterProject(this.project)}},methods:{getProjectData(){const t="1Qvk6q6zxcVPyCg7hz782qem1zADCnIr_7JtCCBMslw8",a=`https://sheets.googleapis.com/v4/spreadsheets/${t}/values/test`;this.$http.get(a,{params:{key:"AIzaSyBdjPypTptcwPIhBI34Tt4-4YqXci_ayFk"}}).then((t=>{const a=[];t.data.values.forEach((t=>{a.push({type:t[0],category:t[1],title:t[2],imgList:JSON.parse(t[3]),video:t[4],description:t[5],preview:t[6],date:new Date(t[7])})})),this.allData=a,this.filterGallery(),this.filterRencent(),this.$route.params.project&&this.filterProject(this.$route.params.project)}))},filterGallery(){this.galleryData[0]=this.allData.filter((t=>"videography"===t.type)),this.galleryData[1]=this.allData.filter((t=>"photography"===t.type&&["ZIGZAG","嘉義市東公有零售市場","合歡山"].includes(t.title)))},filterProject(t){this.projectData=this.categoryData.filter((a=>a.title===t))[0]},filterRencent(){this.recentData=this.allData.reduce(((t,a)=>t.date>a.date?t:a))}},created(){this.getProjectData()}},n=e(89);const u=(0,n.Z)(h,[["render",i],["__scopeId","data-v-9fd7405a"]]);var g=u}}]);
//# sourceMappingURL=333.bc82abe8.js.map