class Bitset < ApplicationRecord
  validates :set, length: { maximum: 50 },
            format: { with: /\A[0-1]*\z/ }
end
