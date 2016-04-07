class CreateRepos < ActiveRecord::Migration
  def change
    create_table :repos do |t|
      t.references :user, index: true, foreign_key: true
      t.string :owner_login
      t.integer :user_id
      t.string :name

      t.timestamps null: false
    end
  end
end
