package schema

import (
	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// Pricing は料金プラン。複数行存在し得る (user 毎に異なるプランを提示する想定)。
//
// label は seed YAML から人間可読に参照するための natural key (例: "standard")。
// 各 user は pricing_id でこの行を参照する (N:1 from User side)。
type Pricing struct {
	ent.Schema
}

func (Pricing) Fields() []ent.Field {
	return []ent.Field{
		field.String("label").
			NotEmpty().
			Unique(),
		field.String("rate").NotEmpty(),
		field.String("billing_hours").NotEmpty(),
		field.String("trial_rate").NotEmpty(),
		field.String("trial_note"),
	}
}

// Edges:
//   - patterns: Pricing → PricingPattern (1:N、子側に pricing_id 列)
//   - users: Pricing ← User の back-reference (1 pricing → many users)
func (Pricing) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("patterns", PricingPattern.Type).
			StorageKey(edge.Column("pricing_id")),
		edge.From("users", User.Type).
			Ref("pricing"),
	}
}
