class Bitset < ApplicationRecord
  validates :set, length: { maximum: 50 },
            format: { with: /^[0-1]*$/ }
end
