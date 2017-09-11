<template>
    <div id="editorNav">
        <nav>
            <ol>
                <li v-for="(item,index) in resumeConfig" :class="{active: item.field === selected}" @click="selected = item.field">
                    <svg class="icon">
                        <use :xlink:href="`#icon-${item.icon}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    computed: {
        selected: {
            get() {
                return this.$store.state.selected
            },
            set(value) {
                return this.$store.commit('switchTab', value)
            }
        },
        resume() {
            return this.$store.state.resume
        },
        resumeConfig() {
            return this.$store.state.resumeConfig
        }
    }
}
</script>
<style lang="scss" scoped>
nav {
    ol {
        background: #000;
        height: 100%;
        padding: 16px 0;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        color:#fff;
        li {
            padding: 10px 16px;
            margin-top:20px;
            .icon {
                font-size: 30px;
            }
            &.active{
                background:#fff;
                color:#000;
            }
        }
    }
}
</style>

