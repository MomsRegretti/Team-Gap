class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.references :map, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.string :body
      t.string :category
      t.timestamps
    end
  end
end
