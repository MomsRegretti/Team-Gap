# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_06_17_164130) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "agents", force: :cascade do |t|
    t.string "uuid"
    t.string "displayName"
    t.string "roleIcon"
    t.string "displayIcon"
    t.string "description"
    t.string "bustPortrait"
    t.string "fullPortrait"
    t.string "fullPortraitV2"
    t.string "background"
    t.string "backgroundGradientColors"
    t.string "role"
    t.string "role_uuid"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "map_id", null: false
    t.bigint "user_id", null: false
    t.string "body"
    t.string "category"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["map_id"], name: "index_comments_on_map_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "mapagents", force: :cascade do |t|
    t.bigint "map_id", null: false
    t.bigint "agent_id", null: false
    t.string "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["agent_id"], name: "index_mapagents_on_agent_id"
    t.index ["map_id"], name: "index_mapagents_on_map_id"
  end

  create_table "maps", force: :cascade do |t|
    t.string "uuid"
    t.string "displayName"
    t.string "listViewIcon"
    t.string "splash"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "avatar"
  end

  add_foreign_key "comments", "maps"
  add_foreign_key "comments", "users"
  add_foreign_key "mapagents", "agents"
  add_foreign_key "mapagents", "maps"
end
