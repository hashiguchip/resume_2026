// Package schema は ent の domain 定義。各 entity を 1 ファイル 1 型で定義する。
package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/field"
)

// Project は職務経歴 1 件分の entity (誰が見ても同じ内容、user に紐づかない)。
//
// id は "project-1" のようなドメイン側で意味を持つ固定文字列なので、
// ent デフォルトの int 自動採番ではなく string PK にしている。
// period_start / period_end は postgres date 型に落とし、月初固定で扱う。
// period_end が NULL のレコードは「現在進行中」を意味する。
//
// tech_ids / phase_ids は frontend の constants/{tech,phases}.ts に対する
// 単なる参照で、DB 側に Tech / Phase テーブルは存在しない (scope 縮小 reframe)。
// そのため M:N edge ではなく JSON []string を直接 field に持つ。
type Project struct {
	ent.Schema
}

func (Project) Fields() []ent.Field {
	return []ent.Field{
		field.String("id").
			NotEmpty().
			Immutable(),
		field.String("title").NotEmpty(),
		field.Time("period_start").
			SchemaType(map[string]string{"postgres": "date"}),
		field.Time("period_end").
			Optional().
			Nillable().
			SchemaType(map[string]string{"postgres": "date"}),
		field.String("team").NotEmpty(),
		field.String("role").NotEmpty(),
		field.Text("summary"),
		field.JSON("tech_ids", []string{}).
			Default([]string{}),
		field.JSON("phase_ids", []string{}).
			Default([]string{}),
		field.Int("display_order").
			Default(0),
	}
}
