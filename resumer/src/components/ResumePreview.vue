<template>
    <div id="resumePreview">
       
        <div class="content">
            <svg @click="save" class="iconSave">
                <use xlink:href="#icon-tubiaozhizuomoban"></use>
            </svg>
            <router-link to="/preview">
                <svg class="iconPreview ">
                    <use xlink:href="#icon-chakan"></use>
                </svg>
            </router-link>
            <div class="previewHeader">
                <h1>ABOUT</h1>
                <p>Some words to say...</p>
            </div>
            <div class="previewContent">
                <section data-name="profile" v-if="resume.profile && resume.profile.name">
                    <ul>
                        <li>
                            <h3>个人信息</h3>
                            <p>
                                姓名：{{resume.profile.name}}
                            </p>
                            <p>{{resume.profile.title}}</p>
                            <p>城市：{{resume.profile.city}}</p>
                            <p>生日：{{resume.profile.birthday}}</p>
                            <p>自我评价：{{resume.profile.self}}</p>
                        </li>
                    </ul>

                </section>

                <section data-name="workHistory" v-if="resume.workHistory && resume.workHistory.length > 0">
                    <ul>
                        <h3>工作经历</h3>
                        <li v-for="item in resume.workHistory">
                            <p v-show="item.company">公司：{{item.company}}</p>
                            <p v-show="item.details"> 工作描述：{{item.details}} </p>
                            <hr v-show="item.details">
                        </li>
                    </ul>
                </section>

                <section data-name="education" v-if="resume.education && resume.education.length > 0">
                    <ul>
                        <h3>毕业院校</h3>
                        <li v-for="item in resume.education">
                            <p v-show="item.school">毕业学校：{{item.school}}</p>
                            <p v-show="item.details"> 详细情况：{{item.details}} </p>
                            <hr v-show="item.details">
                        </li>
                    </ul>
                </section>

                <section data-name="projects" v-if="resume.projects && resume.projects.length > 0">
                    <ul>
                            <h3>项目经历</h3>                        
                        <li v-for="item in resume.projects">
                            <p v-show="item.name">项目名称：{{item.name}}</p>
                            <p v-show="item.link">项目链接：{{item.link}} </p>
                            <p v-show="item.details">项目介绍： {{item.details}} </p>
                            <hr v-show="item.details">
                        </li>
                    </ul>
                </section>

                <section data-name="awards" v-if="resume.awards && resume.awards.length > 0">

                    <ul>
                            <h3>获奖情况</h3>                        
                        <li v-for="item in resume.awards">
                            <p v-show="item.name">奖项：{{item.name}}</p>
                            <p v-show="item.details">详细情况： {{item.details}} </p>
                            <hr v-show="item.details">
                        </li>
                    </ul>
                </section>

                <section data-name="contacts" v-if="resume.contacts && resume.contacts.length > 0">
                    <ul>
                            <h3>联系方式</h3>                        
                        <li v-for="item in resume.contacts">
                            <p v-show="item.phone">手机：{{item.phone}}</p>
                            <p v-show="item.QQ">QQ： {{item.QQ}} </p>
                            <p v-show="item.wechat">微信： {{item.wechat}} </p>
                            <p v-show="item.Email">邮箱： {{item.Email}} </p>
                            <hr v-show="item.Email">
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ResumePreview',
    computed: {
        resume() {
            return this.$store.state.resume
        }
    },
    methods: {
        save() {
            this.$store.dispatch('saveResume')
            if(this.$store.state.user.id===''){
                alert('请先登录，再保存')
            }
        }
    }
}
</script>

<style lang="scss">
#resumePreview {
    background: #444;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    padding: 1em;
    color: #333;
    overflow: hidden;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    * {
        box-sizing: border-box;
        font-variant: normal;
        font-weight: normal;
    }
    .content {
        position: relative;
        background: #FDFDFC;
        width: 99%;
        height: 100%;
        overflow: hidden;
        border-radius: 6px;
        >.previewHeader {
            font-weight: bold;
            margin-top: 50px;
            text-align: center;
            >h1 {
                font-size: 60px;
                letter-spacing: 20px;
                color: #f3f0e8;
                margin: 0;
            }
            >p {
                font-size: 13px;
                color: #3B3C40;
            }
        }
        >.previewContent {
            padding: 10px 64px;
            display: flex;
            max-height: 476px;
            flex-direction: column; // align-items: center;
            overflow: auto;
            section {
                margin-top: 50px;
                ul {
                    list-style: none;
                }
                li{
                    >hr{
                        margin-top:10px;
                    }
                }
                h3 {
                    border-bottom: 1px solid #999;
                    padding-bottom: .3em;
                    margin-bottom: .3em;
                    color: #69bcc2;
                }
                p {
                    margin-top: 10px;
                    color: #3B3C40;
                }
            }
        }
    } // section[data-name="profile"] {
    //     >h1 {
    //         margin: .1em 0;
    //         font-size: 4em;
    //     }
    // }
    // section[data-name="workHistory"],
    // section[data-name="projects"],
    // section[data-name="awards"] {
    //     li+li {
    //         margin-top: 1em;
    //     }
    //     li {
    //         h3 {
    //             border-bottom: 1px solid #999;
    //             padding-bottom: .3em;
    //             margin-bottom: .3em;
    //         }
    //     }
    // }
    // section[data-name="education"] {
    //     li {
    //         line-height: 1.5;
    //     }
    // }
    // section[data-name="contacts"] {
    //     td:first-child {
    //         padding-right: 1em;
    //     }
    .iconPreview {
        position: absolute;
        top: 2px;
        right: 20px;
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        color: #43634D;
        overflow: hidden;
        z-index: 1;
    }
    .iconSave {
        position: absolute;
        top: 2px;
        right: 60px;
        width: 2em;
        height: 2em;
        vertical-align: -0.15em;
        fill: currentColor;
        color: #43634D;
        overflow: hidden;
        z-index: 1;
    }
}
</style>