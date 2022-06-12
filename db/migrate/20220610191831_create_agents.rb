class CreateAgents < ActiveRecord::Migration[6.1]
  def change
    create_table :agents do |t|
      t.string :uuid
      t.string :description
      t.string :bustPortrait
      t.string :fullPortrait
      t.string :fullPortraitV2
      t.string :background
      t.string :backgroundGradientColors
      t.string :role
      # t.belongs_to :user, null: false, foreign_key: true
      # t.belongs_to :map, null: false, foreign_key: true

      t.timestamps
    end
  end
end
