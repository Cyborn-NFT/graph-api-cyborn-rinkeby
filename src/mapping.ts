import { MarketItemCreated as MarketItemCreatedEvent } from "../generated/CybornMarket/CybornMarket"
import { MarketItemCreated } from "../generated/schema"

export function handleMarketItemCreated(event: MarketItemCreatedEvent): void {
  let entity = new MarketItemCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.itemId = event.params.itemId
  entity.nftContract = event.params.nftContract
  entity.tokenId = event.params.tokenId
  entity.seller = event.params.seller
  entity.owner = event.params.owner
  entity.price = event.params.price
  entity.sold = event.params.sold
  entity.save()
}
