class BitsetsController < ApplicationController
  def show
    @bitset = Bitset.find(params[:id])
  end

  def create
    @bitset = Bitset.create(bitset_params)

    if @bitset.errors.empty?
      redirect_to @bitset, success: 'Successfully created!'
    else
      flash[:error] = 'Something went wrong'
      render 'new'
    end
  end

  def update
    @bitset = Bitset.update(bitset_params)
  end

  def new
    @bitset = Bitset.new
  end

  private

  def bitset_params
    params.require(:bitset).permit(:set, :id)
  end
end
