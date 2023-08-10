import type { UserConfig } from "@commitlint/types";

const configuration: UserConfig = {
    extends: ["@commitlint/config-conventional"],
    rules: {
        "header-max-length": [2, "always", 72],
        "type-enum": [
            2,
            "always",
            ["build", "ci", "docs", "feat", "fix", "perf", "refactor", "revert", "format", "test"],
        ],
    },
    prompt: {
        messages: {
            skip: "'Enterでスキップ'",
            max: "最大%d文字",
            emptyWarning: "必須事項です",
            upperLimitWarning: "最大文字数を超えています",
        },
        questions: {
            type: {
                description: "変更の種類を選択",
                enum: {
                    build: {
                        description: "ビルドシステム、外部依存の変更",
                        title: "Builds",
                    },
                    ui: {
                        description: "スタイルの追加、変更",
                        title: "Styling",
                    },
                    ci: {
                        description: "CIの設定やスクリプトの変更",
                        title: "CI",
                    },
                    docs: {
                        description: "ドキュメントの整備、変更",
                        title: "Documentation",
                    },
                    feat: {
                        description: "新機能の追加",
                        title: "Features",
                    },
                    fix: {
                        description: "バグの修正",
                        title: "Bug Fixes",
                    },
                    format: {
                        description: "動作の変更を伴わないコードの書式の変更",
                        title: "Format",
                    },
                    perf: {
                        description: "パフォーマンスの向上を目的とする変更",
                        title: "Performance Improvement",
                    },
                    refactor: {
                        description: "保守性の向上を目的とする変更",
                        title: "Refactoring",
                    },
                    revert: {
                        description: "コミットの取り消し",
                        title: "Reverts",
                    },
                    test: {
                        description: "テストの追加、変更",
                        title: "Tests",
                    },
                },
            },
            scope: {
                description: "変更範囲の記述 (記述しなくてよい)",
            },
            subject: {
                description: "変更内容の要約",
            },
            body: {
                description: "変更内容の詳細",
            },
            isBreaking: {
                description: "破壊的変更の有無",
            },
            breakingBody: {
                description: "破壊的変更の要約",
            },
            breaking: {
                description: "破壊的変更の詳細",
            },
            isIssueAffected: {
                description: "未解決のissuesに関する変更であるか",
            },
            issuesBody: {
                description: "issuesの概要を記載する",
            },
            issues: {
                description: "変更内容の詳細とissueの番号を記載する",
            },
        },
    },
};

module.exports = configuration;
