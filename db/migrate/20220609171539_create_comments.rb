class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :map, null: false, foreign_key: true
      t.string :body
      t.string :category

      t.timestamps
    end
  end
end
