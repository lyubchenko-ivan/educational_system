class Bitset < ApplicationRecord
  belongs_to :user

  validates :set, length: { maximum: 50 },
            format: { with: /\A[0-1]*\z/ }

  validates :user, presence: true, uniqueness: true
end
