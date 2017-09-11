<template>
    <div id="resumeEditor">
        <ol class="panels">
            <li v-for="item in resumeConfig" v-show="item.field === selected">
                <div v-if="item.type === 'array'">
                    <h2>{{item.field}}</h2>
                    <div class="subitem" v-for="(subitem, i) in resume[item.field]">
                        <svg class="icon delete" @click="removeResumeSubfield(item.field, i)">
                            <use xlink:href="#icon-shanchu"></use>
                        </svg>
                        <div class="resumeField" v-for="(value,key) in subitem">
                            <label> {{key}} </label>
                            <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
                        </div>
                        <hr>
                    </div>
                    <svg class="icon add" @click="addResumeSubfield(item.field)">
                        <use xlink:href="#icon-tianjia"></use>
                    </svg>
                </div>
                <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
                    <label> {{key}} </label>
                    <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
                </div>
            </li>
        </ol>
    </div>
</template>

<script>
export default {
    name: 'ResumeEditor',
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
        },
        show() {
            return this.$store.state.show
        }
    },
    methods: {
        changeResumeField(path, value) {
            this.$store.commit('updateResume', {
                path,
                value
            })
        },
        addResumeSubfield(field) {
            this.$store.commit('addResumeSubfield', { field })
        },
        removeResumeSubfield(field, index) {
            this.$store.commit('removeResumeSubfield', { field, index })
        }
    }
}
</script>

<style lang="scss" scoped>
#resumeEditor {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
    border-radius: 6px;
    >nav {
        width: 80px;
        background: #43634d;
        color: white;
        >ol {
            >li {
                height: 48px;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 16px;
                margin-bottom: 16px;
                &.active {
                    background: #f4d246;
                    color: #fff;
                }
            }
        }
    }
    >.panels {
        flex-grow: 1;
        >li {
            padding: 24px;
        }
        .icon {
            width: 1.5em;
            height: 1.5em;
            vertical-align: -0.15em;
            fill: currentColor;
            overflow: hidden;
            &.delete {
                color: #FA6434;
                position: absolute;
                right: 0;
                top: -3px;
                cursor: pointer;
            }
            &.add {
                width: 2em;
                height: 2em;
                color: #9FD7EF;
                cursor: pointer;
            }
        }
    }
    svg.icon {
        width: 24px;
        height: 24px;
    }
}

ol {
    list-style: none;
    color: #fff;
    overflow: auto;
    padding: 16px;
    text-align: center;
    h2 {
        color: #69bcc2;
        margin-top: 10px;
    }
    .subitem {
        position: relative;
        margin-top: 16px;
        label {
            font-size: 20px;
        }
    }
}

.resumeField {
    >label {
        display: block;
    }
    input[type=text] {
        margin: 16px 0;
        border: 1px solid #ddd;
        border-radius: 6px;
        box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.25);
        width: 100%;
        height: 40px;
        padding: 0 8px;
    }
}

hr {
    border: none;
    border-top: 1px solid #ddd;
    margin: 24px 0;
}
</style>