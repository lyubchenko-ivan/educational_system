class AddBitsetToUsers < ActiveRecord::Migration[6.1]
  def change
    add_reference :bitsets, :user, index: true, uniq: true
    add_foreign_key :bitsets, :user
  end
end
