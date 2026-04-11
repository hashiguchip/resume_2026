package schema

import (
	"time"

	"entgo.io/ent"
	"entgo.io/ent/schema/edge"
	"entgo.io/ent/schema/field"
)

// User はチョクナビ閲覧 gate を通すための referral code holder。
//
// referral code は plaintext で保存する (このプロジェクトの脅威モデル上問題ない
// と判断、SOPS で seed YAML が暗号化されているので at-rest は保護される)。
// revoked_at は soft delete: hard delete はせず、auth 側で revoked_at IS NULL を
// 条件に弾く。
//
// 各 user は 1 つの Pricing に紐づく (N:1)。これにより operator は user 毎に
// 異なる料金プランを提示できる。pricing edge は Unique で User 側に FK を生やす。
type User struct {
	ent.Schema
}

func (User) Fields() []ent.Field {
	return []ent.Field{
		field.String("label").
			NotEmpty().
			Unique(),
		field.String("code").
			NotEmpty().
			Unique(),
		field.Time("created_at").
			Immutable().
			Default(time.Now),
		field.Time("revoked_at").
			Optional().
			Nillable(),
		field.Time("last_seen_at").
			Optional().
			Nillable(),
	}
}

// Edges: User → Pricing は N:1 (user 側が pricing を 1 つ持つ、複数 user が
// 同じ pricing を共有できる)。.Unique() で User 側に pricing_id FK が生える。
func (User) Edges() []ent.Edge {
	return []ent.Edge{
		edge.To("pricing", Pricing.Type).
			Unique().
			StorageKey(edge.Column("pricing_id")),
	}
}
