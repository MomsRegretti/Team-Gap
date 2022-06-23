class CreateMaps < ActiveRecord::Migration[6.1]
  def change
    create_table :maps  do |t|
      t.string :uuid
      t.string :displayName
      t.string :listViewIcon
      t.string :splash
      t.string :rolebias
      t.timestamps
    end
  end
end
