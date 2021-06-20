package backend.course.controller;

import backend.course.image.ImageService;
import backend.course.image.Image;
import backend.course.item.Item;
import backend.course.item.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("backend")
@CrossOrigin("*")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;
    private final ImageService imageService;

    @GetMapping
    public List<Item> getAll() {
        Item item1 = new Item("Golarka", "OneBlade", 200.5);
        Item item2 = new Item("Iphone", "12 pro", 5000);
        Item item3 = new Item("Dell", "XPS 13", 7900);
        Item item4 = new Item("Golarka", "OneBlade", 200.5);
        Item item5 = new Item("Iphone", "12 pro", 5000);
        Item item6 = new Item("Dell", "XPS 13", 7900);
        Item item7 = new Item("Golarka", "OneBlade", 200.5);
        Item item8 = new Item("Iphone", "12 pro", 5000);
        Item item9 = new Item("Dell", "XPS 13", 7900);

        List<Item> items = itemService.getAll();
        if(items.isEmpty()) {
            itemService.save(Arrays.asList(item1, item2, item3, item4, item5, item6, item7, item8, item9));
        }

        return items;
    }

    @PostMapping(path = "{id}/image/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public void uploadItemImage(@PathVariable("id") UUID id, @RequestParam("file") MultipartFile file) {
        Item currItem = itemService.getById(id);
        imageService.saveImageItem(currItem, file);
        System.out.println(id + " file: " + file);
    }

    @GetMapping(path = "{id}/image/download")
    public byte[] downloadItemImage(@PathVariable("id") UUID id) {
        List<Image> images = imageService.getImageByItemId(itemService.getById(id));
        return images != null && images.size() > 0 ? images.get(0).getData() : null;
    }
}
