class CreateMapagents < ActiveRecord::Migration[6.1]
  def change
    create_table :mapagents do |t|
      t.belongs_to :map, null: false, foreign_key: true
      t.belongs_to :agent, null: false, foreign_key: true
      t.string :rating

      t.timestamps
    end
  end
end
