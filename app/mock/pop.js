var data = {
    "list": {
        "bpmn_auth": {
            "cnname": "流程权限",
            "children": [{
                "id": 1,
                "cnname": "审批权",
                "desc": "审核不通过将终止整个流程",
                "checked": 1
            }]
        },
        "node_auth": {
            "cnname": "节点权限",
            "children": [{
                    "id": 1,
                    "cnname": "待处理",
                    "desc": "指定人员行使节点权限,之前处理人退出流程",
                    "checked": 1
                },
                {
                    "id": 2,
                    "cnname": "忽略",
                    "desc": "本节点变为空节点,流程从本节点默认通过",
                    "checked": 0
                },
                {
                    "id": 3,
                    "cnname": "终止",
                    "desc": "本节点的后续流程将不再执行,是并发节点并不受影响",
                    "checked": 0
                },
                {
                    "id": 5,
                    "cnname": "知会",
                    "desc": "为当前节点增加并行节点,新节点无权限,只继承批注文件阅读权限",
                    "checked": 0
                }
            ]
        },
        "opinion_auth": {
            "cnname": "意见附言",
            "children": [{
                "id": 1,
                "cnname": "可发表意见",
                "desc": "",
                "checked": 0
            }]
        },
        "archive_auth": {
            "cnname": "归档权限",
            "children": [{
                "id": 1,
                "cnname": "处理后归档",
                "desc": "",
                "checked": 0
            }]
        }
    },

    "editlist": [{
            "column_id": "1",
            "name": "报修金额",
            "readable": 0,
            "writable": 0
        },
        {
            "column_id": "2",
            "name": "部门主管意见",
            "readable": 0,
            "writable": 0
        },
        {
            "column_id": "3",
            "name": "报修金额",
            "readable": 0,
            "writable": 0
        }
    ],

    "filelist": [{
        "id": "1",
        "name": "北京航空航天大学2017差旅报销单"
    }, {
        "id": 2,
        "name": "北京航空航天大学报销明细表"
    }],
    "conditionlist": {
        "file": {
            "1": {
                "name": "表单1",
                "column": [{
                        "id": "1",
                        "type": "",
                        "cnname": "字段2",
                        "enname": "form1area2"
                    },
                    {
                        "id": 2,
                        "type": "",
                        "cnname": "字段1",
                        "enname": "form1area1"
                    }
                ]
            },
            "3": {
                "name": "表单3",
                "column": [{
                    "id": 3,
                    "type": "",
                    "cnname": "字段1",
                    "enname": "form3area1"
                }]
            },
            "5": {
                "name": "表单5",
                "column": [{
                    "id": 4,
                    "type": "",
                    "cnname": "字段5",
                    "enname": "form5area1"
                }]
            },
            "6": {
                "name": "表单6",
                "column": [{
                    "id": 5,
                    "type": "",
                    "cnname": "字段1",
                    "enname": "form3area1"
                }]
            },
            "7": {
                "name": "表单7",
                "column": [{
                    "id": 6,
                    "type": "",
                    "cnname": "字段5",
                    "enname": "form5area1"
                }]
            },
            "rule": "xxxxxx"
        }
    }
}
module.exports = data