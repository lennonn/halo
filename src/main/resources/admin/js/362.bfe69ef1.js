"use strict";
(self["webpackChunkhalo_admin"] = self["webpackChunkhalo_admin"] || []).push([[362], {
    77794: function (e, t, a) {
        a.d(t, {
            Z: function () {
                return m
            }
        });
        var r = function () {
            var e = this, t = e.$createElement, a = e._self._c || t;
            return a("a-tree-select", {
                attrs: {
                    allowClear: !0,
                    treeData: e.categoryTreeData,
                    treeDataSimpleMode: !0,
                    placeholder: "请选择上级目录，默认为顶级目录",
                    treeDefaultExpandAll: ""
                }, model: {
                    value: e.categoryIdString, callback: function (t) {
                        e.categoryIdString = t
                    }, expression: "categoryIdString"
                }
            })
        }, o = [], n = a(75725), l = (a(12566), a(41479), a(82395), a(21082), a(31875), a(11074), {
            name: "CategorySelectTree",
            props: {
                categoryId: {type: Number, required: !0, default: 0},
                categories: {
                    type: Array, required: !1, default: function () {
                        return []
                    }
                }
            },
            computed: {
                categoryTreeData: function () {
                    return [{
                        id: 0,
                        title: "根目录",
                        value: "0",
                        pId: -1
                    }].concat((0, n.Z)(this.categories.map((function (e) {
                        return {id: e.id, title: e.name, value: e.id.toString(), pId: e.parentId}
                    }))))
                }, categoryIdString: {
                    get: function () {
                        return this.categoryId.toString()
                    }, set: function (e) {
                        this.$emit("update:categoryId", e ? parseInt(e) : 0)
                    }
                }
            }
        }), i = l, s = a(42177), c = (0, s.Z)(i, r, o, !1, null, null, null), m = c.exports
    }, 55362: function (e, t, a) {
        a.d(t, {
            Z: function () {
                return B
            }
        });
        var r = function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("a-modal", {
                        attrs: {
                            afterClose: e.onClosed,
                            bodyStyle: {padding: 0},
                            maskClosable: !1,
                            width: 680,
                            destroyOnClose: ""
                        }, scopedSlots: e._u([{
                            key: "title", fn: function () {
                                return [e._v(" " + e._s(e.modalTitle) + " "), e.loading ? a("a-icon", {attrs: {type: "loading"}}) : e._e()]
                            }, proxy: !0
                        }, {
                            key: "footer", fn: function () {
                                return [e._t("extraFooter"), e.draftSaveVisible ? a("ReactiveButton", {
                                    attrs: {
                                        errored: e.form.draftSaveErrored,
                                        loading: e.form.draftSaving,
                                        text: (e.hasId ? "转为" : "保存") + "草稿",
                                        erroredText: "保存失败",
                                        loadedText: "保存成功",
                                        type: "danger"
                                    }, on: {
                                        callback: function (t) {
                                            return e.handleSavedCallback()
                                        }, click: function (t) {
                                            return e.handleSaveDraft()
                                        }
                                    }
                                }) : e._e(), e.publishVisible ? a("ReactiveButton", {
                                    attrs: {
                                        errored: e.form.publishErrored,
                                        loading: e.form.publishing,
                                        erroredText: "发布失败",
                                        loadedText: "发布成功",
                                        text: "转为发布"
                                    }, on: {
                                        callback: function (t) {
                                            return e.handleSavedCallback()
                                        }, click: function (t) {
                                            return e.handlePublish()
                                        }
                                    }
                                }) : e._e(), a("ReactiveButton", {
                                    attrs: {
                                        errored: e.form.saveErrored,
                                        erroredText: (e.hasId ? "保存" : "发布") + "失败",
                                        loadedText: (e.hasId ? "保存" : "发布") + "成功",
                                        loading: e.form.saving,
                                        text: e.hasId ? "保存" : "发布"
                                    }, on: {
                                        callback: function (t) {
                                            return e.handleSavedCallback()
                                        }, click: function (t) {
                                            return e.handleSave()
                                        }
                                    }
                                }), a("a-button", {
                                    attrs: {disabled: e.loading}, on: {
                                        click: function (t) {
                                            e.modalVisible = !1
                                        }
                                    }
                                }, [e._v("关闭")])]
                            }, proxy: !0
                        }], null, !0), model: {
                            value: e.modalVisible, callback: function (t) {
                                e.modalVisible = t
                            }, expression: "modalVisible"
                        }
                    }, [a("div", {staticClass: "card-container"}, [a("a-tabs", {attrs: {type: "card"}}, [a("a-tab-pane", {
                        key: "normal",
                        attrs: {tab: "常规"}
                    }, [a("a-form", {
                        attrs: {
                            "label-col": {span: 4},
                            "wrapper-col": {span: 20},
                            labelAlign: "left"
                        }
                    }, [a("a-form-item", {attrs: {label: "文章标题"}}, [a("a-input", {
                        model: {
                            value: e.form.model.title,
                            callback: function (t) {
                                e.$set(e.form.model, "title", t)
                            },
                            expression: "form.model.title"
                        }
                    })], 1), a("a-form-item", {
                        attrs: {
                            help: e.fullPath,
                            label: "文章别名"
                        }
                    }, [a("a-input", {
                        scopedSlots: e._u([{
                            key: "addonAfter", fn: function () {
                                return [a("a-popconfirm", {
                                    attrs: {
                                        "cancel-text": "取消",
                                        "ok-text": "确定",
                                        placement: "left",
                                        title: "是否确定根据标题重新生成别名？"
                                    }, on: {confirm: e.handleGenerateSlug}
                                }, [a("a-icon", {staticClass: "cursor-pointer", attrs: {type: "sync"}})], 1)]
                            }, proxy: !0
                        }]), model: {
                            value: e.form.model.slug, callback: function (t) {
                                e.$set(e.form.model, "slug", t)
                            }, expression: "form.model.slug"
                        }
                    })], 1), a("a-form-item", {attrs: {label: "分类目录"}}, [a("a-space", {attrs: {direction: "vertical"}}, [a("category-tree", {
                        ref: "categoryTree",
                        model: {
                            value: e.form.model.categoryIds, callback: function (t) {
                                e.$set(e.form.model, "categoryIds", t)
                            }, expression: "form.model.categoryIds"
                        }
                    }), a("a-button", {
                        attrs: {type: "dashed"}, on: {
                            click: function (t) {
                                e.categoryCreateModalVisible = !0
                            }
                        }
                    }, [e._v("新增")])], 1)], 1), a("a-form-item", {attrs: {label: "标签"}}, [a("TagSelect", {
                        model: {
                            value: e.form.model.tagIds,
                            callback: function (t) {
                                e.$set(e.form.model, "tagIds", t)
                            },
                            expression: "form.model.tagIds"
                        }
                    })], 1), a("a-form-item", {attrs: {label: "摘要"}}, [a("a-input", {
                        attrs: {
                            autoSize: {minRows: 5},
                            placeholder: "如不填写，会从文章中自动截取",
                            type: "textarea"
                        }, model: {
                            value: e.form.model.summary, callback: function (t) {
                                e.$set(e.form.model, "summary", t)
                            }, expression: "form.model.summary"
                        }
                    })], 1)], 1)], 1), a("a-tab-pane", {
                        key: "advanced",
                        attrs: {tab: "高级"}
                    }, [a("a-form", {
                        attrs: {
                            "label-col": {span: 4},
                            "wrapper-col": {span: 20},
                            labelAlign: "left"
                        }
                    }, [a("a-form-item", {attrs: {label: "禁止评论"}}, [a("a-switch", {
                        model: {
                            value: e.form.model.disallowComment,
                            callback: function (t) {
                                e.$set(e.form.model, "disallowComment", t)
                            },
                            expression: "form.model.disallowComment"
                        }
                    })], 1), a("a-form-item", {attrs: {label: "是否置顶"}}, [a("a-switch", {
                        model: {
                            value: e.topPriority,
                            callback: function (t) {
                                e.topPriority = t
                            },
                            expression: "topPriority"
                        }
                    })], 1), a("a-form-item", {attrs: {label: "发表时间："}}, [a("a-date-picker", {
                        attrs: {
                            defaultValue: e.createTimeDefaultValue,
                            format: "YYYY-MM-DD HH:mm:ss",
                            placeholder: "选择文章发表时间",
                            showTime: ""
                        }, on: {change: e.onCreateTimeSelect, ok: e.onCreateTimeSelect}
                    })], 1), a("a-form-item", {attrs: {label: "自定义模板："}}, [a("a-select", {
                        model: {
                            value: e.form.model.template,
                            callback: function (t) {
                                e.$set(e.form.model, "template", t)
                            },
                            expression: "form.model.template"
                        }
                    }, [a("a-select-option", {key: "", attrs: {value: ""}}, [e._v("无")]), e._l(e.templates, (function (t) {
                        return a("a-select-option", {key: t, attrs: {value: t}}, [e._v(" " + e._s(t) + " ")])
                    }))], 2)], 1), a("a-form-item", {attrs: {label: "访问密码："}}, [a("a-input-password", {
                        attrs: {autocomplete: "new-password"},
                        model: {
                            value: e.form.model.password, callback: function (t) {
                                e.$set(e.form.model, "password", t)
                            }, expression: "form.model.password"
                        }
                    })], 1), a("a-form-item", {attrs: {label: "封面图："}}, [a("a-space", {attrs: {direction: "vertical"}}, [a("img", {
                        staticClass: "w-1/2 cursor-pointer",
                        staticStyle: {"border-radius": "4px"},
                        attrs: {src: e.form.model.thumbnail || "/images/placeholder.jpg", alt: "Post cover thumbnail"},
                        on: {
                            click: function (t) {
                                e.attachmentSelectVisible = !0
                            }
                        }
                    }), a("a-input", {
                        attrs: {"allow-clear": "", placeholder: "点击封面图选择图片，或者输入外部链接"},
                        model: {
                            value: e.form.model.thumbnail, callback: function (t) {
                                e.$set(e.form.model, "thumbnail", t)
                            }, expression: "form.model.thumbnail"
                        }
                    })], 1)], 1)], 1)], 1), a("a-tab-pane", {
                        key: "seo",
                        attrs: {tab: "SEO"}
                    }, [a("a-form", {
                        attrs: {
                            "label-col": {span: 4},
                            "wrapper-col": {span: 20},
                            labelAlign: "left"
                        }
                    }, [a("a-form-item", {attrs: {label: "自定义关键词"}}, [a("a-input", {
                        attrs: {
                            autoSize: {minRows: 5},
                            placeholder: "多个关键词以英文逗号隔开，如不填写，将自动使用标签作为关键词",
                            type: "textarea"
                        }, model: {
                            value: e.form.model.metaKeywords, callback: function (t) {
                                e.$set(e.form.model, "metaKeywords", t)
                            }, expression: "form.model.metaKeywords"
                        }
                    })], 1), a("a-form-item", {attrs: {label: "自定义描述"}}, [a("a-input", {
                        attrs: {
                            autoSize: {minRows: 5},
                            placeholder: "如不填写，会从文章中自动截取",
                            type: "textarea"
                        }, model: {
                            value: e.form.model.metaDescription, callback: function (t) {
                                e.$set(e.form.model, "metaDescription", t)
                            }, expression: "form.model.metaDescription"
                        }
                    })], 1)], 1)], 1), a("a-tab-pane", {
                        key: "meta",
                        attrs: {tab: "元数据"}
                    }, [a("MetaEditor", {
                        attrs: {metas: e.form.model.metas, targetId: e.form.model.id, target: "post"},
                        on: {
                            "update:metas": function (t) {
                                return e.$set(e.form.model, "metas", t)
                            }
                        }
                    })], 1)], 1)], 1), a("AttachmentSelectModal", {
                        attrs: {multiSelect: !1, visible: e.attachmentSelectVisible},
                        on: {
                            "update:visible": function (t) {
                                e.attachmentSelectVisible = t
                            }, confirm: e.handleSelectPostThumbnail
                        }
                    }), a("CategoryCreateModal", {
                        attrs: {visible: e.categoryCreateModalVisible},
                        on: {
                            "update:visible": function (t) {
                                e.categoryCreateModalVisible = t
                            }, close: e.onCategoryCreateModalClose
                        }
                    })], 1)
                }, o = [], n = a(47458), l = a(86475),
                i = (a(70315), a(41479), a(87591), a(30535), a(85018), a(31875), a(18482), a(86381), function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("a-tree", {
                        attrs: {
                            checkedKeys: e.categoryIds,
                            treeData: e.categoryTree,
                            checkStrictly: "",
                            checkable: "",
                            defaultExpandAll: "",
                            showLine: ""
                        }, on: {check: e.onCheck}
                    })
                }), s = [], c = (a(21082), a(17132));

        function m(e, t) {
            t.forEach((function (t) {
                e.key === t.parentId && (e.children || (e.children = []), e.children.push({
                    key: t.id,
                    title: t.name,
                    isLeaf: !1
                }))
            })), e.children ? e.children.forEach((function (e) {
                return m(e, t)
            })) : e.isLeaf = !0
        }

        function d(e) {
            var t = {key: 0, title: "top", children: []};
            return m(t, e), t.children
        }

        var u = {
                    name: "CategoryTree",
                    model: {prop: "categoryIds", event: "check"},
                    props: {
                        categoryIds: {
                            type: Array, required: !1, default: function () {
                                return []
                            }
                        }
                    },
                    data: function () {
                        return {categories: {data: [], loading: !1}}
                    },
                    computed: {
                        categoryTree: function () {
                            return this.categories.data.length ? d(this.categories.data) : []
                        }
                    },
                    created: function () {
                        this.handleListCategories()
                    },
                    methods: {
                        handleListCategories: function () {
                            var e = this;
                            return (0, n.Z)(regeneratorRuntime.mark((function t() {
                                var a, r;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.categories.loading = !0, t.next = 4, c.Z.category.list({
                                                sort: [],
                                                more: !1
                                            });
                                        case 4:
                                            a = t.sent, r = a.data, e.categories.data = r, t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t["catch"](0), e.$log.error(t.t0);
                                        case 12:
                                            return t.prev = 12, e.categories.loading = !1, t.finish(12);
                                        case 15:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[0, 9, 12, 15]])
                            })))()
                        }, onCheck: function (e, t) {
                            this.$log.debug("Chekced keys", e), this.$log.debug("e", t), this.$emit("check", e.checked)
                        }
                    }
                }, f = u, p = a(42177), h = (0, p.Z)(f, i, s, !1, null, null, null), g = h.exports, v = function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("a-select", {
                        staticClass: "w-full",
                        attrs: {"token-separators": [",", "|"], allowClear: "", mode: "tags", placeholder: "选择或输入标签"},
                        on: {change: e.handleChange},
                        model: {
                            value: e.selectedTagNames, callback: function (t) {
                                e.selectedTagNames = t
                            }, expression: "selectedTagNames"
                        }
                    }, e._l(e.tags, (function (t) {
                        return a("a-select-option", {key: t.id, attrs: {value: t.name}}, [e._v(e._s(t.name))])
                    })), 1)
                }, b = [], y = (a(82395), a(90195), a(10299)), k = a.n(y), x = {
                    name: "TagSelect",
                    model: {prop: "tagIds", event: "change"},
                    props: {
                        tagIds: {
                            type: Array, required: !1, default: function () {
                                return []
                            }
                        }
                    },
                    data: function () {
                        return {tags: [], selectedTagNames: []}
                    },
                    created: function () {
                        this.handleListTags()
                    },
                    watch: {
                        tags: function (e) {
                            var t = this;
                            e && (this.selectedTagNames = this.tagIds.map((function (e) {
                                return t.tagIdMap[e].name
                            })))
                        }, tagIds: {
                            handler: function (e) {
                                var t = this;
                                this.tags.length && (this.selectedTagNames = e.map((function (e) {
                                    return t.tagIdMap[e].name
                                })))
                            }, deep: !0
                        }
                    },
                    computed: {
                        tagIdMap: function () {
                            var e = {};
                            return this.tags.forEach((function (t) {
                                e[t.id] = t
                            })), e
                        }, tagNameMap: function () {
                            var e = {};
                            return this.tags.forEach((function (t) {
                                e[t.name] = t
                            })), e
                        }
                    },
                    methods: {
                        handleListTags: function (e) {
                            var t = this;
                            c.Z.tag.list({sort: "name,asc", more: !0}).then((function (a) {
                                t.tags = a.data, e && e()
                            }))
                        }, handleChange: function () {
                            var e = this, t = this.selectedTagNames.filter((function (t) {
                                return !e.tagNameMap[t]
                            }));
                            if (this.$log.debug("Tag names to create", t), t.length) {
                                var a = t.map((function (e) {
                                    return c.Z.tag.create({name: e})
                                }));
                                k().all(a).then(k().spread((function () {
                                    e.handleListTags((function () {
                                        e.$log.debug("Tag name map", e.tagNameMap);
                                        var t = e.selectedTagNames.map((function (t) {
                                            return e.tagNameMap[t].id
                                        }));
                                        e.$emit("change", t)
                                    }))
                                })))
                            } else {
                                var r = this.selectedTagNames.map((function (t) {
                                    return e.tagNameMap[t].id
                                }));
                                this.$emit("change", r)
                            }
                        }
                    }
                }, w = x, C = (0, p.Z)(w, v, b, !1, null, null, null), S = C.exports, T = a(99421), $ = function () {
                    var e = this, t = e.$createElement, a = e._self._c || t;
                    return a("a-modal", {
                        attrs: {afterClose: e.onClose, width: 512, destroyOnClose: "", title: "新建分类"},
                        scopedSlots: e._u([{
                            key: "footer", fn: function () {
                                return [a("ReactiveButton", {
                                    attrs: {
                                        errored: e.form.errored,
                                        loading: e.form.saving,
                                        erroredText: "保存失败",
                                        loadedText: "保存成功",
                                        text: "保存",
                                        type: "primary"
                                    }, on: {callback: e.handleSavedCallback, click: e.handleCreate}
                                }), a("a-button", {
                                    on: {
                                        click: function (t) {
                                            e.modalVisible = !1
                                        }
                                    }
                                }, [e._v("关闭")])]
                            }, proxy: !0
                        }]),
                        model: {
                            value: e.modalVisible, callback: function (t) {
                                e.modalVisible = t
                            }, expression: "modalVisible"
                        }
                    }, [a("a-form-model", {
                        ref: "categoryForm",
                        attrs: {
                            "label-col": {span: 4},
                            model: e.form.model,
                            rules: e.form.rules,
                            "wrapper-col": {span: 20},
                            labelAlign: "left"
                        }
                    }, [a("a-form-model-item", {
                        attrs: {
                            help: "* 页面上所显示的名称",
                            label: "名称：",
                            prop: "name"
                        }
                    }, [a("a-input", {
                        ref: "nameInput", model: {
                            value: e.form.model.name, callback: function (t) {
                                e.$set(e.form.model, "name", t)
                            }, expression: "form.model.name"
                        }
                    })], 1), a("a-form-model-item", {
                        attrs: {
                            help: "* 一般为单个分类页面的标识，最好为英文",
                            label: "别名：",
                            prop: "slug"
                        }
                    }, [a("a-input", {
                        model: {
                            value: e.form.model.slug, callback: function (t) {
                                e.$set(e.form.model, "slug", t)
                            }, expression: "form.model.slug"
                        }
                    })], 1), a("a-form-model-item", {
                        attrs: {
                            label: "上级目录：",
                            prop: "parentId"
                        }
                    }, [a("category-select-tree", {
                        attrs: {categories: e.list.data, "category-id": e.form.model.parentId},
                        on: {
                            "update:categoryId": function (t) {
                                return e.$set(e.form.model, "parentId", t)
                            }, "update:category-id": function (t) {
                                return e.$set(e.form.model, "parentId", t)
                            }
                        }
                    })], 1), a("a-form-model-item", {
                        attrs: {
                            help: "* 在分类页面可展示，需要主题支持",
                            label: "封面图：",
                            prop: "thumbnail"
                        }
                    }, [a("AttachmentInput", {
                        attrs: {title: "选择封面图"},
                        model: {
                            value: e.form.model.thumbnail, callback: function (t) {
                                e.$set(e.form.model, "thumbnail", t)
                            }, expression: "form.model.thumbnail"
                        }
                    })], 1), a("a-form-model-item", {
                        attrs: {
                            help: "* 分类密码",
                            label: "密码：",
                            prop: "password"
                        }
                    }, [a("a-input-password", {
                        attrs: {autocomplete: "new-password"},
                        model: {
                            value: e.form.model.password, callback: function (t) {
                                e.$set(e.form.model, "password", t)
                            }, expression: "form.model.password"
                        }
                    })], 1), a("a-form-model-item", {
                        attrs: {
                            help: "* 分类描述，需要主题支持",
                            label: "描述：",
                            prop: "description"
                        }
                    }, [a("a-input", {
                        attrs: {autoSize: {minRows: 3}, type: "textarea"},
                        model: {
                            value: e.form.model.description, callback: function (t) {
                                e.$set(e.form.model, "description", t)
                            }, expression: "form.model.description"
                        }
                    })], 1)], 1)], 1)
                }, I = [], _ = a(77794), E = {
                    name: "CategoryCreateModal",
                    components: {CategorySelectTree: _.Z},
                    props: {visible: {type: Boolean, default: !1}},
                    data: function () {
                        return {
                            list: {data: [], loading: !1},
                            form: {
                                model: {},
                                saving: !1,
                                errored: !1,
                                rules: {
                                    name: [{required: !0, message: "* 分类名称不能为空", trigger: ["change"]}, {
                                        max: 255,
                                        message: "* 分类名称的字符长度不能超过 255",
                                        trigger: ["change"]
                                    }],
                                    slug: [{max: 255, message: "* 分类别名的字符长度不能超过 255", trigger: ["change"]}],
                                    thumbnail: [{max: 1023, message: "* 封面图链接的字符长度不能超过 1023", trigger: ["change"]}],
                                    description: [{max: 100, message: "* 分类描述的字符长度不能超过 100", trigger: ["change"]}]
                                }
                            }
                        }
                    },
                    computed: {
                        modalVisible: {
                            get: function () {
                                return this.visible
                            }, set: function (e) {
                                this.$emit("update:visible", e)
                            }
                        }
                    },
                    created: function () {
                        this.handleListCategories()
                    },
                    watch: {
                        modalVisible: function (e) {
                            var t = this;
                            e && this.$nextTick((function () {
                                t.$refs.nameInput.focus()
                            }))
                        }
                    },
                    methods: {
                        handleListCategories: function () {
                            var e = this;
                            return (0, n.Z)(regeneratorRuntime.mark((function t() {
                                var a, r;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.list.loading = !0, t.next = 4, c.Z.category.list({});
                                        case 4:
                                            a = t.sent, r = a.data, e.list.data = r, t.next = 12;
                                            break;
                                        case 9:
                                            t.prev = 9, t.t0 = t["catch"](0), e.$log.error("Failed to get categories", t.t0);
                                        case 12:
                                            return t.prev = 12, e.list.loading = !1, t.finish(12);
                                        case 15:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[0, 9, 12, 15]])
                            })))()
                        }, handleCreate: function () {
                            var e = this;
                            this.$refs.categoryForm.validate(function () {
                                var t = (0, n.Z)(regeneratorRuntime.mark((function t(a) {
                                    return regeneratorRuntime.wrap((function (t) {
                                        while (1) switch (t.prev = t.next) {
                                            case 0:
                                                if (!a) {
                                                    t.next = 14;
                                                    break
                                                }
                                                return t.prev = 1, e.form.saving = !0, t.next = 5, c.Z.category.create(e.form.model);
                                            case 5:
                                                t.next = 11;
                                                break;
                                            case 7:
                                                t.prev = 7, t.t0 = t["catch"](1), e.form.errored = !0, e.$log.error("Failed to create category", t.t0);
                                            case 11:
                                                return t.prev = 11, setTimeout((function () {
                                                    e.form.saving = !1
                                                }), 400), t.finish(11);
                                            case 14:
                                            case"end":
                                                return t.stop()
                                        }
                                    }), t, null, [[1, 7, 11, 14]])
                                })));
                                return function (e) {
                                    return t.apply(this, arguments)
                                }
                            }())
                        }, handleSavedCallback: function () {
                            this.form.errored ? this.form.errored = !1 : (this.form.model = {}, this.handleListCategories())
                        }, onClose: function () {
                            this.$emit("close")
                        }
                    }
                }, D = E, M = (0, p.Z)(D, $, I, !1, null, null, null), R = M.exports, V = a(91411), Z = a(38487), Y = a(73511),
                L = a.n(Y), A = a(98906), P = a(94671), N = {
                    name: "PostSettingModal",
                    mixins: [V.jB, V.KT],
                    components: {CategoryTree: g, TagSelect: S, MetaEditor: T.Z, CategoryCreateModal: R},
                    props: {
                        visible: {type: Boolean, default: !1},
                        loading: {type: Boolean, default: !1},
                        post: {
                            type: Object, default: function () {
                                return {}
                            }
                        },
                        savedCallback: {type: Function, default: null}
                    },
                    data: function () {
                        return {
                            postStatuses: P.JQ,
                            form: {
                                model: {},
                                saving: !1,
                                saveErrored: !1,
                                draftSaving: !1,
                                draftSaveErrored: !1,
                                publishing: !1,
                                publishErrored: !1
                            },
                            templates: [],
                            attachmentSelectVisible: !1,
                            categoryCreateModalVisible: !1
                        }
                    },
                    computed: (0, l.Z)((0, l.Z)({}, (0, A.Se)(["options"])), {}, {
                        modalVisible: {
                            get: function () {
                                return this.visible
                            }, set: function (e) {
                                this.$emit("update:visible", e)
                            }
                        }, modalTitle: function () {
                            return this.form.model.id ? "文章设置" : "文章发布"
                        }, createTimeDefaultValue: function () {
                            if (this.form.model.createTime) {
                                var e = new Date(this.form.model.createTime);
                                return (0, Z._)(e, "YYYY-MM-DD HH:mm:ss")
                            }
                            return (0, Z._)(new Date, "YYYY-MM-DD HH:mm:ss")
                        }, topPriority: {
                            get: function () {
                                return 0 !== this.form.model.topPriority
                            }, set: function (e) {
                                this.form.model.topPriority = e ? 1 : 0
                            }
                        }, fullPath: function () {
                            var e = this.options, t = e.post_permalink_type, a = e.archives_prefix, r = e.blog_url,
                                    o = e.path_suffix, n = void 0 === o ? "" : o, l = this.form.model, i = l.slug,
                                    s = void 0 === i ? "{slug}" : i, c = l.createTime, m = void 0 === c ? new Date : c,
                                    d = l.id, u = void 0 === d ? "{id}" : d;
                            switch (t) {
                                case"DEFAULT":
                                    return "".concat(r, "/").concat(a, "/").concat(s).concat(n);
                                case"YEAR":
                                    return "".concat(r).concat((0, Z._)(m, "/YYYY/")).concat(s).concat(n);
                                case"DATE":
                                    return "".concat(r).concat((0, Z._)(m, "/YYYY/MM/")).concat(s).concat(n);
                                case"DAY":
                                    return "".concat(r).concat((0, Z._)(m, "/YYYY/MM/DD/")).concat(s).concat(n);
                                case"ID":
                                    return "".concat(r, "/?p=").concat(u);
                                case"ID_SLUG":
                                    return "".concat(r, "/").concat(a, "/").concat(u).concat(n);
                                default:
                                    return ""
                            }
                        }, hasId: function () {
                            return !!this.form.model.id
                        }, draftSaveVisible: function () {
                            var e = this.form, t = e.draftSaving, a = e.publishing;
                            return (this.form.model.status !== P.JQ.DRAFT.value || !this.hasId || t) && !a
                        }, publishVisible: function () {
                            var e = this.form, t = e.draftSaving, a = e.publishing;
                            return (this.form.model.status === P.JQ.DRAFT.value && this.hasId || a) && !t
                        }
                    }),
                    watch: {
                        modalVisible: function (e) {
                            e && (this.form.model = Object.assign({}, this.post), this.form.model.slug || this.form.model.id || this.handleGenerateSlug())
                        }, post: {
                            deep: !0, handler: function (e) {
                                this.form.model = Object.assign({}, e)
                            }
                        }
                    },
                    created: function () {
                        this.handleListCustomTemplates()
                    },
                    methods: {
                        handleCreateOrUpdate: function () {
                            var e = this;
                            return (0, n.Z)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            if (e.form.model.title) {
                                                t.next = 3;
                                                break
                                            }
                                            throw e.$notification["error"]({
                                                message: "提示",
                                                description: "文章标题不能为空！"
                                            }), new Error("文章标题不能为空！");
                                        case 3:
                                            if (e.form.model.keepRaw = !0, t.prev = 4, !e.hasId) {
                                                t.next = 10;
                                                break
                                            }
                                            return t.next = 8, c.Z.post.update(e.form.model.id, e.form.model);
                                        case 8:
                                            t.next = 12;
                                            break;
                                        case 10:
                                            return t.next = 12, c.Z.post.create(e.form.model);
                                        case 12:
                                            t.next = 18;
                                            break;
                                        case 14:
                                            throw t.prev = 14, t.t0 = t["catch"](4), e.$log.error(t.t0), new Error(t.t0);
                                        case 18:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[4, 14]])
                            })))()
                        }, handleSave: function () {
                            var e = this;
                            return (0, n.Z)(regeneratorRuntime.mark((function t() {
                                var a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.form.saving = !0, a = e.form.model.status, a || (e.form.model.status = e.postStatuses.PUBLISHED.value), t.next = 6, e.handleCreateOrUpdate();
                                        case 6:
                                            t.next = 12;
                                            break;
                                        case 8:
                                            t.prev = 8, t.t0 = t["catch"](0), e.form.saveErrored = !0, e.$log.error("Failed to save post", t.t0);
                                        case 12:
                                            return t.prev = 12, setTimeout((function () {
                                                e.form.saving = !1
                                            }), 400), t.finish(12);
                                        case 15:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[0, 8, 12, 15]])
                            })))()
                        }, handlePublish: function () {
                            var e = this;
                            return (0, n.Z)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.form.publishing = !0, e.form.model.status = e.postStatuses.PUBLISHED.value, t.next = 5, e.handleCreateOrUpdate();
                                        case 5:
                                            t.next = 11;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0), e.form.publishErrored = !0, e.$log.error("Failed to publish post", t.t0);
                                        case 11:
                                            return t.prev = 11, setTimeout((function () {
                                                e.form.publishing = !1
                                            }), 400), t.finish(11);
                                        case 14:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[0, 7, 11, 14]])
                            })))()
                        }, handleSaveDraft: function () {
                            var e = this;
                            return (0, n.Z)(regeneratorRuntime.mark((function t() {
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, e.form.draftSaving = !0, e.form.model.status = e.postStatuses.DRAFT.value, t.next = 5, e.handleCreateOrUpdate();
                                        case 5:
                                            t.next = 11;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0), e.form.draftSaveErrored = !0, e.$log.error("Failed to save draft post", t.t0);
                                        case 11:
                                            return t.prev = 11, setTimeout((function () {
                                                e.form.draftSaving = !1
                                            }), 400), t.finish(11);
                                        case 14:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[0, 7, 11, 14]])
                            })))()
                        }, handleSavedCallback: function () {
                            this.form.saveErrored || this.form.draftSaveErrored || this.form.publishErrored ? (this.form.saveErrored = !1, this.form.draftSaveErrored = !1, this.form.publishErrored = !1) : this.savedCallback && this.savedCallback()
                        }, handleListCustomTemplates: function () {
                            var e = this;
                            return (0, n.Z)(regeneratorRuntime.mark((function t() {
                                var a;
                                return regeneratorRuntime.wrap((function (t) {
                                    while (1) switch (t.prev = t.next) {
                                        case 0:
                                            return t.prev = 0, t.next = 3, c.Z.theme.listCustomPostTemplates();
                                        case 3:
                                            a = t.sent, e.templates = a.data, t.next = 10;
                                            break;
                                        case 7:
                                            t.prev = 7, t.t0 = t["catch"](0), e.$log.error(t.t0);
                                        case 10:
                                        case"end":
                                            return t.stop()
                                    }
                                }), t, null, [[0, 7]])
                            })))()
                        }, onCreateTimeSelect: function (e) {
                            this.form.model.createTime = e.valueOf()
                        }, handleGenerateSlug: function () {
                            if (this.form.model.title && L().isSupported()) {
                                var e, t = "", a = L().parse(this.form.model.title.replace(/\s+/g, "").toLowerCase());
                                a.forEach((function (a) {
                                    if (2 === a.type) {
                                        var r = a.target ? a.target.toLowerCase() : "";
                                        t += t && !/\n|\s/.test(e.target) ? "-" + r : r
                                    } else t += (e && 2 === e.type ? "-" : "") + a.target;
                                    e = a
                                })), this.$set(this.form.model, "slug", t)
                            }
                        }, handleSelectPostThumbnail: function (e) {
                            var t = e.raw;
                            t.length && (this.form.model.thumbnail = encodeURI(t[0].path)), this.attachmentSelectVisible = !1
                        }, onClosed: function () {
                            this.$emit("onClose"), this.$emit("onUpdate", this.form.model)
                        }, onCategoryCreateModalClose: function () {
                            this.$refs.categoryTree.handleListCategories()
                        }
                    }
                }, F = N, O = (0, p.Z)(F, r, o, !1, null, null, null), B = O.exports
    }
}]);